// ============================================================
// GOOGLE APPS SCRIPT — Paste this into your Google Sheet's
// Apps Script editor (Extensions > Apps Script)
// ============================================================

// 👇 Change this to your Gmail address to receive email alerts
const NOTIFY_EMAIL = "your-email@gmail.com";

// This function runs when the web app receives a POST request
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    // === Write to Google Sheet ===
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Subject",
        "Message",
        "Source"
      ]);

      // Style the header row
      sheet.getRange(1, 1, 1, 6)
        .setBackground("#9929FB")
        .setFontColor("#ffffff")
        .setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Append the new lead row
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name,
      data.email,
      data.subject || "(No subject)",
      data.message,
      data.source || "Portfolio Website"
    ]);

    // Auto-resize columns for readability
    sheet.autoResizeColumns(1, 6);

    // === Send Email Notification ===
    var subject = "🚀 New Portfolio Lead: " + data.name;
    var body = [
      "You received a new message from your portfolio website!\n",
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "👤 Name:    " + data.name,
      "📧 Email:   " + data.email,
      "📝 Subject: " + (data.subject || "(No subject)"),
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "💬 Message:",
      data.message,
      "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      "⏰ Time: " + data.timestamp,
      "\nReply directly to this email or click: mailto:" + data.email
    ].join("\n");

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: subject,
      body: body,
      replyTo: data.email   // ← Hitting "Reply" goes directly to the lead
    });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================================
// DEPLOYMENT STEPS:
// 1. Go to your Google Sheet
// 2. Click Extensions > Apps Script
// 3. Delete any existing code and paste this entire file
// 4. Change NOTIFY_EMAIL to your Gmail address (line 8)
// 5. Click Deploy > New Deployment
// 6. Type = "Web App"
//    Execute as = "Me"
//    Who has access = "Anyone"
// 7. Click Deploy → copy the Web App URL
// 8. Paste the URL into your .env.local file:
//    GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_ID/exec
// 9. Restart npm run dev
// ============================================================
