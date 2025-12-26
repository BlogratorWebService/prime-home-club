import { NextResponse } from 'next/server';
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

    const appsScriptUrl = 'https://script.google.com/macros/s/AKfycbyrAEAAgjotxzl9TrWq6QQtlOnFfQ0M1nlXaDia0ddZNzbA21OSG6G5hPODZT2s1S5gOw/exec';

    // Forward the data to Google Apps Script
    const appsScriptResponse = await fetch(appsScriptUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsedData),
        // Google Apps Script web apps do redirects, we don't want to follow them
        redirect: 'follow', 
    });
    
    // The response from Apps Script is not standard JSON, so we read it as text.
    const textResponse = await appsScriptResponse.text();
    let responseData;
    try {
        responseData = JSON.parse(textResponse);
    } catch(e) {
        console.warn("Could not parse Apps Script response as JSON:", textResponse);
        responseData = { status: 'success', message: 'Assumed success due to non-JSON response.' };
    }
    
    if (responseData.status !== 'success') {
      throw new Error(responseData.message || 'An error occurred with the Google Sheet submission.');
    }

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
