# Connecting the Client Inquiry Form to an External Backend / Database

The **Website Development Client Inquiry Form** in this project is already fully operational with:
1. **Persistent Browser Storage (localStorage)**: Every submission is recorded instantly with timestamp, contact info, budget, and project notes.
2. **Owner Inquiries Dashboard**: Accessible directly on the site (or via `Alt + D` or the "View Submitted Inquiries" button) where the website owner can review, search, filter, change status (`new`, `contacted`, `in-progress`, `completed`), call, email, or chat on WhatsApp with the client, and export all records to **Excel/CSV**.
3. **External Backend / Webhook Compatibility**: Built-in support to seamlessly forward every inquiry to your server, database, Google Sheet, or email notification service.

---

## 3 Easy Ways to Connect to a Remote Backend

### Option 1: Direct Webhook / Formspree / Web3Forms (No Backend Code Required)

If you don't want to run your own backend server, you can forward inquiries directly to your email or Telegram via any standard webhook.

1. Create a free form endpoint on **[Formspree](https://formspree.io)**, **[Web3Forms](https://web3forms.com)**, or **[Make.com](https://make.com)**.
2. Add the endpoint URL to your environment file (`.env`):
   ```env
   VITE_FORM_BACKEND_URL="https://formspree.io/f/your_form_id"
   ```
3. When deployed on Netlify, add `VITE_FORM_BACKEND_URL` in **Site settings ➜ Environment variables**.
4. Every inquiry submitted on the website will be forwarded directly to your email while remaining stored in the dashboard!

---

### Option 2: Google Sheets Integration (Free & Instant)

To receive every inquiry directly in an online Google Sheet:
1. Open a new Google Sheet.
2. Go to **Extensions ➜ Apps Script**.
3. Paste the following script:
   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);
     sheet.appendRow([
       new Date(),
       data.fullName,
       data.mobileNumber,
       data.email,
       data.address,
       data.occupation || 'N/A',
       data.budget || 'N/A',
       data.websiteType || 'N/A',
       data.projectDescription || 'N/A'
     ]);
     return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
4. Click **Deploy ➜ New Deployment ➜ Web App**.
   - Set **Who has access** to: *Anyone*.
5. Copy the Web App URL and set it as:
   ```env
   VITE_FORM_BACKEND_URL="https://script.google.com/macros/s/your_script_id/exec"
   ```

---

### Option 3: Custom Node.js / Express Server

If you have a custom backend or database (PostgreSQL, MongoDB, Supabase):
1. Create a simple endpoint:
   ```typescript
   app.post('/api/inquiries', async (req, res) => {
     const { fullName, mobileNumber, email, address, occupation, budget, websiteType, projectDescription } = req.body;
     // Save to database
     await db.inquiries.create({ data: req.body });
     res.status(201).json({ message: 'Inquiry saved' });
   });
   ```
2. Point your `VITE_FORM_BACKEND_URL` to `/api/inquiries`.
