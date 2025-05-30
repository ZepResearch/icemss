export const userConfirmationTemplate = (data) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paper Submission Confirmation - ICEMSS</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
        
        body {
            font-family: 'Roboto', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #fffdf0;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #FFD700;
            color: #333;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
        }
        .content {
            padding: 30px;
        }
        .greeting {
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 20px;
        }
        .submission-details {
            background-color: #fffdf0;
            border-left: 4px solid #FFD700;
            padding: 20px;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        .submission-details h2 {
            margin-top: 0;
            font-size: 18px;
            color: #333;
        }
        .submission-details ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        .submission-details li {
            margin-bottom: 10px;
        }
        .submission-details strong {
            font-weight: 500;
            color: #555;
        }
        .footer {
            background-color: #FFD700;
            color: #333;
            text-align: center;
            padding: 20px;
            font-size: 14px;
            border-top: 1px solid #e9ecef;
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
            <h1>Paper Submission Confirmation - ICEMSS</h1>
        </div>
        <div class="content">
            <p class="greeting">Dear ${data.authorName},</p>
            <p>Thank you for submitting your paper to the International Conference on Engineering, Management and Social Sciences (ICEMSS). We are pleased to confirm that we have received your submission titled:</p>
            <p style="font-weight: 500; font-style: italic; color: #333;">"${data.paperTitle}"</p>
            
            <div class="submission-details">
                <h2>Submission Details</h2>
                <ul>
                    <li><strong>Author Name:</strong> ${data.authorName}</li>
                    <li><strong>Email:</strong> ${data.email}</li>
                    <li><strong>Phone:</strong> ${data.number}</li>
                    <li><strong>Country:</strong> ${data.country}</li>
                    <li><strong>Department:</strong> ${data.department}</li>
                    <li><strong>University/Organization:</strong> ${data.universityOrganization}</li>
                    <li><strong>Paper Type:</strong> ${data.paperType}</li>
                    <li><strong>Presentation Type:</strong> ${data.presentationType}</li>
                    <li><strong>Submission Date:</strong> ${new Date().toLocaleDateString()}</li>
                </ul>
            </div>
            
            <p>Our team will carefully review your submission and contact you within 2-3 weeks with further information about the acceptance status and presentation details.</p>
            
            <p>If you have any questions or need to make changes to your submission, please contact us at info@icemss.in</p>
            
            <p>We appreciate your contribution to ICEMSS and look forward to potentially featuring your work at the conference.</p>
            
            <p>Best regards,<br>ICEMSS Organizing Committee</p>
        </div>
        <div class="footer">
            <p>This is an automated message. Please do not reply to this email. For any inquiries, contact info@icemss.in</p>
        </div>
    </div>
</body>
</html>
`;

export default userConfirmationTemplate;

