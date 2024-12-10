const ClientConfirmationEmail = (data) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>We've Received Your Message</title>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          
          body {
              font-family: 'Inter', Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
              background-color: #f97316;
              color: white;
              padding: 30px 20px;
              text-align: center;
          }
          .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 700;
          }
          .content {
              padding: 30px 20px;
          }
          .message {
              font-size: 16px;
              color: #333333;
              background-color: #f9f9f9;
              padding: 20px;
              border-radius: 6px;
              border-left: 3px solid #f97316;
              margin-bottom: 20px;
          }
          .footer {
              text-align: center;
              padding: 20px;
              background-color: #f9f9f9;
              color: #666666;
              font-size: 12px;
              border-top: 1px solid #e5e5e5;
          }
          @media only screen and (max-width: 600px) {
              .container {
                  margin: 0;
                  border-radius: 0;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>We've Received Your Message</h1>
          </div>
          <div class="content">
              <div class="message">
                  <p>Dear ${data.name},</p>
                  <p>Thank you for contacting us. We have received your message and our team will get back to you within 24 hours.</p>
                  <p>Here's a summary of the information you provided:</p>
                  <ul>
                      <li><strong>Name:</strong> ${data.name}</li>
                      <li><strong>Email:</strong> ${data.email}</li>
                      <li><strong>Phone:</strong> ${data.phone}</li>
                      <li><strong>Country:</strong> ${data.country}</li>
                  </ul>
                  <p>If you need to add any information to your request, please don't hesitate to reply to this email.</p>
                  <p>Best regards,<br>Your Support Team</p>
              </div>
          </div>
          <div class="footer">
              This is an automated response to your contact form submission. Please do not reply to this email.
          </div>
      </div>
  </body>
  </html>
    `;
  };
  
  export default ClientConfirmationEmail;
  
  