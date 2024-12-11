const ClientConfirmationEmail = (data) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>We've Received Your Submission - ICEMSS</title>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          
          body {
              font-family: 'Inter', Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
              background-color: #fffdf0;
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
              background-color: #FFD700;
              color: #333333;
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
              background-color: #fffdf0;
              padding: 20px;
              border-radius: 6px;
              border-left: 3px solid #FFD700;
              margin-bottom: 20px;
          }
          .footer {
              text-align: center;
              padding: 20px;
              background-color: #FFD700;
              color: #333333;
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
              <h1>We've Received Your Submission</h1>
          </div>
          <div class="content">
              <div class="message">
                  <p>Dear ${data.authorName},</p>
                  <p>Thank you for your submission to the International Conference on Engineering, Management and Social Sciences (ICEMSS). We have received your paper and our team will review it shortly.</p>
                  <p>Here's a summary of the information you provided:</p>
                  <ul>
                      <li><strong>Author Name:</strong> ${data.authorName}</li>
                      <li><strong>Email:</strong> ${data.email}</li>
                      <li><strong>Phone:</strong> ${data.number}</li>
                      <li><strong>Country:</strong> ${data.country}</li>
                      <li><strong>Paper Title:</strong> ${data.paperTitle}</li>
                      <li><strong>Department:</strong> ${data.department}</li>
                      <li><strong>University/Organization:</strong> ${data.universityOrganization}</li>
                      <li><strong>Paper Type:</strong> ${data.paperType}</li>
                      <li><strong>Presentation Type:</strong> ${data.presentationType}</li>
                  </ul>
                  <p>If you need to make any changes to your submission or have any questions, please don't hesitate to contact us.</p>
                  <p>Best regards,<br>ICEMSS Organizing Committee</p>
              </div>
          </div>
          <div class="footer">
              This is an automated response to your paper submission for ICEMSS. Please do not reply to this email.
          </div>
      </div>
  </body>
  </html>
    `;
  };
  
  export default ClientConfirmationEmail;
  
  