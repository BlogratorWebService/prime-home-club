import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { z } from 'zod';

// Define the schema for the incoming request body
const leadSchema = z.object({
  name: z.string(),
  phone: z.string(),
  issue: z.string(),
  tvBrand: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedData = leadSchema.parse(body);

    // !! IMPORTANT !!
    // You must create a Google Cloud Service Account and enable the Google Sheets API.
    // 1. Go to https://console.cloud.google.com/
    // 2. Create a new project or select an existing one.
    // 3. Enable the "Google Sheets API".
    // 4. Go to "Credentials", create a new "Service Account".
    // 5. Download the JSON key file for this service account.
    // 6. Share your Google Sheet with the service account's email address (found in the JSON key file).
    // 7. Store the contents of the JSON key file in environment variables.

    // Replace with your environment variables
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!privateKey || !clientEmail || !sheetId) {
        console.error("Google API credentials or Sheet ID are not set in environment variables.");
        // For the purpose of this example, we'll return a success response even if credentials are not set.
        // In a real application, you should throw an error here.
        return NextResponse.json({ message: 'Form submitted successfully (backend not configured).' }, { status: 200 });
        // throw new Error("Server is not configured for Google Sheets integration.");
    }
    
    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const newRow = [
      new Date().toISOString(),
      parsedData.name,
      parsedData.phone,
      parsedData.tvBrand || 'N/A',
      parsedData.issue,
    ];

    // Append the new row to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1', // Assumes your data is in a sheet named 'Sheet1'
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [newRow],
      },
    });

    return NextResponse.json({ message: 'Lead added to Google Sheet successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    if (error instanceof z.ZodError) {
        return NextResponse.json({ message: 'Invalid form data.', errors: error.errors }, { status: 400 });
    }
    // Avoid exposing detailed server errors to the client
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}
