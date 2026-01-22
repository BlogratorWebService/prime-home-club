
// 1. Open your Google Sheet.
// 2. Go to Extensions > Apps Script.
// 3. Paste this code into the script editor and save the project.
// 4. Click "Deploy" > "New deployment".
// 5. For "Select type", choose "Web app".
// 6. In the "Who has access" dropdown, select "Anyone".
// 7. Click "Deploy".
// 8. Authorize the script when prompted.
// 9. Copy the provided Web app URL and set it as the value for the `APPS_SCRIPT_URL` environment variable in your project.

const LEADS_SHEET_NAME = 'Leads'; // Sheet for contact form leads
const BOOKINGS_SHEET_NAME = 'Bookings'; // Sheet for service bookings

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Check if this is a booking or a lead
    if (data.type === 'booking') {
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(BOOKINGS_SHEET_NAME);
      if (!sheet) {
        throw new Error(`Sheet with name "${BOOKINGS_SHEET_NAME}" not found.`);
      }

      // Bookings: name, phone, email, address, service, timestamp
      const newRow = [
        data.name,
        data.phone,
        data.email,
        data.address,
        data.service,
        new Date()
      ];

      sheet.appendRow(newRow);

      return ContentService
        .createTextOutput(JSON.stringify({ status: 'success', message: 'Booking added successfully' }))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      // Handle leads (existing functionality)
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(LEADS_SHEET_NAME);
      if (!sheet) {
        throw new Error(`Sheet with name "${LEADS_SHEET_NAME}" not found.`);
      }

      // Leads: name, phone, brand, issue, timestamp
      const newRow = [
        data.name,
        data.phone,
        data.Brand,
        data.issue,
        new Date()
      ];

      sheet.appendRow(newRow);

      return ContentService
        .createTextOutput(JSON.stringify({ status: 'success', message: 'Lead added successfully' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

  } catch (error) {
    Logger.log(error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

    