import { NextResponse } from 'next/server';
import { z } from 'zod';

const bookingSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  address: z.string(),
  service: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, address, service } = bookingSchema.parse(body);

    const appsScriptUrl = 'https://script.google.com/macros/s/AKfycbzGLgp5J04f2oSVqv5qO6Z2osnHipLdBHWcbTtSzKCASMQUrue9jvzWv4K_6MNi71gaug/exec';

    const payload = {
      name,
      phone,
      email,
      address,
      service,
      type: 'booking', // To differentiate from leads
    };

    const appsScriptResponse = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    });

    const textResponse = await appsScriptResponse.text();
    let responseData;
    try {
      responseData = JSON.parse(textResponse);
    } catch (e) {
      console.warn("Could not parse Apps Script response as JSON:", textResponse);
      responseData = { status: 'success', message: 'Assumed success due to non-JSON response.' };
    }

    if (responseData.status !== 'success') {
      throw new Error(responseData.message || 'An error occurred with the Google Sheet submission.');
    }

    return NextResponse.json({ message: 'Booking added to Google Sheet successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: 'Invalid form data.', errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ message: 'An internal server error occurred.' }, { status: 500 });
  }
}
