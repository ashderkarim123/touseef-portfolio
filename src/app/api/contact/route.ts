import { NextResponse } from 'next/server';

// 👇 Paste your Google Apps Script Web App URL here after Step 2
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || '';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    // Forward to Google Apps Script (which writes to Google Sheet + sends email)
    if (GOOGLE_SCRIPT_URL) {
      const gsRes = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject || '(No subject)',
          message: data.message,
          timestamp: new Date().toISOString(),
          source: 'Portfolio Website',
        }),
      });

      if (!gsRes.ok) {
        console.error('Google Script forwarding failed:', await gsRes.text());
      }
    } else {
      // Fallback: log to console if URL not configured
      console.log('=== NEW CONTACT FORM SUBMISSION ===');
      console.log(`Name:    ${data.name}`);
      console.log(`Email:   ${data.email}`);
      console.log(`Subject: ${data.subject}`);
      console.log(`Message: ${data.message}`);
      console.log('===================================');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
