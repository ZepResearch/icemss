// File: app/components/emails/ContactFormEmail.jsx
const ContactFormEmail = (data) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
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
        .field {
            margin-bottom: 20px;
            border-bottom: 1px solid #e5e5e5;
            padding-bottom: 15px;
        }
        .field:last-child {
            border-bottom: none;
            padding-bottom: 0;
        }
        .label {
            font-weight: 600;
            color: #f97316;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .value {
            font-size: 16px;
            color: #333333;
            background-color: #f9f9f9;
            padding: 10px;
            border-radius: 6px;
            border-left: 3px solid #f97316;
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
            <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">Name</div>
                <div class="value">${data.name}</div>
            </div>
            <div class="field">
                <div class="label">Email</div>
                <div class="value">${data.email}</div>
            </div>
            <div class="field">
                <div class="label">Phone</div>
                <div class="value">${data.phone}</div>
            </div>
            <div class="field">
                <div class="label">Country</div>
                <div class="value">${data.country}</div>
            </div>
            <div class="field">
                <div class="label">Message</div>
                <div class="value">${data.message}</div>
            </div>
        </div>
        <div class="footer">
            This email was sent from your website's contact form.
        </div>
    </div>
</body>
</html>


`;
};

export default ContactFormEmail;