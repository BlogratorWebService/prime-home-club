
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string(),
  phone: z.string(),
  brand: z.string(),
  issue: z.string(),
});

// IMPORTANT: Replace this with your actual Google Apps Script URL
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzGLgp5J04f2oSVqv5qO6Z2osnHipLdBHWcbTtSzKCASMQUrue9jvzWv4K_6MNi71gaug/exec';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = leadSchema.parse(body);

    if (!APPS_SCRIPT_URL) {
      console.error("APPS_SCRIPT_URL is not defined in environment variables.");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }
    
    // The Google Apps Script expects 'Brand' with a capital 'B'
    const payload = {
        name: validatedData.name,
        phone: validatedData.phone,
        Brand: validatedData.brand, // Capitalize key to match script
        issue: validatedData.issue
    };

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.status !== 'success') {
      console.error("Error from Google Apps Script:", result.message);
      throw new Error("Failed to add lead to Google Sheet.");
    }

    return NextResponse.json({ message: 'Lead captured successfully' }, { status: 200 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data', details: error.errors }, { status: 400 });
    }
    console.error("Error in API route:", error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
