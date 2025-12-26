// 1. Open your Google Sheet.
// 2. Go to Extensions > Apps Script.
// 3. Paste this code into the script editor and save the project.
// 4. Click "Deploy" > "New deployment".
// 5. For "Select type", choose "Web app".
// 6. In the "Who has access" dropdown, select "Anyone".
// 7. Click "Deploy".
// 8. Authorize the script when prompted.
// 9. Copy the provided Web app URL and set it as the value for the `APPS_SCRIPT_URL` environment variable in your Vercel project.

const SHEET_NAME = 'Sheet1'; // Change this if your sheet name is different

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) {
      throw new Error(`Sheet with name "${SHEET_NAME}" not found.`);
    }

    const data = JSON.parse(e.postData.contents);

    // This order must match your sheet columns
    const newRow = [
      data.name,
      data.phone,
      data.Brand, // Changed from tvBrand to Brand
      data.issue
    ];
    
    sheet.appendRow(newRow);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', message: 'Lead added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log(error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
