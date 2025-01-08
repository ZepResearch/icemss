const PaymentInitiatedEmail = (data) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Conference Registration Payment</title>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
          
          body {
              font-family: 'Poppins', Arial, sans-serif;
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
              box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }
          .header {
              background: linear-gradient(135deg, #2c3e50, #3498db);
              color: white;
              padding: 40px 20px;
              text-align: center;
          }
          .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 700;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
          }
          .content {
              padding: 40px 30px;
          }
          .message {
              font-size: 16px;
              color: #333333;
              background-color: #f9f9f9;
              padding: 25px;
              border-radius: 8px;
              border-left: 5px solid #2c3e50;
              margin-bottom: 30px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }
          .message p {
              margin-bottom: 15px;
          }
          .message ul {
              padding-left: 20px;
          }
          .message li {
              margin-bottom: 10px;
          }
          .footer {
              text-align: center;
              padding: 20px;
              background-color: #f9f9f9;
              color: #666666;
              font-size: 14px;
              border-top: 1px solid #e5e5e5;
          }
          .button {
              display: inline-block;
              padding: 12px 24px;
              background-color: #2c3e50;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              font-weight: 600;
              margin-top: 20px;
              transition: background-color 0.3s ease;
          }
          .button:hover {
              background-color: #3498db;
          }
          @media only screen and (max-width: 600px) {
              .container {
                  margin: 0;
                  border-radius: 0;
              }
              .content {
                  padding: 30px 20px;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>2nd International Conference on Engineering, Management and Social Sciences</h1>
          </div>
          <div class="content">
              <div class="message">
                  <p>Dear ${data.billing_name},</p>
                  <p>Thank you for initiating your registration payment for the 2nd International Conference on Engineering, Management and Social Sciences. We have received your payment request for:</p>
                  <ul>
                      <li><strong>Registration ID:</strong> ${data.order_id}</li>
                      <li><strong>Name:</strong> ${data.billing_name}</li>
                      <li><strong>Amount:</strong> ${data.currency} ${data.amount}</li>
                      <li><strong>Email:</strong> ${data.billing_email}</li>
                      <li><strong>Number:</strong> ${data.billing_tel}</li>
                      <li><strong>City:</strong> ${data.billing_city}</li>
                      <li><strong>State:</strong> ${data.billing_state}</li>
                      <li><strong>Zip Code:</strong> ${data.billing_zip}</li>
                      <li><strong>Country:</strong> ${data.billing_country}</li>
                      <li><strong>Billing Address:</strong> ${data.billing_address}</li>
                      <li><strong>Registration Type:</strong> ${data.name}</li>
                  </ul>
                  <p>Your payment is currently being processed. Once completed, you will receive a confirmation email with your registration details and further instructions about the conference.</p>
                  <p>Important Note: Please retain this registration ID for future reference. If you have any questions about your registration or payment, please contact our conference secretariat.</p>
                  <p>We look forward to your participation in advancing knowledge across engineering, management, and social sciences.</p>
                  <p>Best regards,<br>Conference Organizing Committee</p>
                \
              </div>
          </div>
          <div class="footer">
              <p>This is an automated message. Please do not reply to this email.</p>
              <p>&copy; 2025 2nd International Conference on Engineering, Management and Social Sciences. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
    `;
  };
  
  export default PaymentInitiatedEmail;