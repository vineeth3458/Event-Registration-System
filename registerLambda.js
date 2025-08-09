const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const ses = new AWS.SES();

exports.handler = async (event) => {
  const body = JSON.parse(event.body);

  const { name, email } = body;

  // Save to DynamoDB
  const params = {
    TableName: process.env.TABLE_NAME,
    Item: { email, name, registrationDate: new Date().toISOString() },
  };

  await dynamo.put(params).promise();

  // Send confirmation email
  const emailParams = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Text: { Data: `Hi ${name},\n\nThanks for registering for the event!` },
      },
      Subject: { Data: 'Event Registration Confirmation' },
    },
    Source: process.env.FROM_EMAIL,
  };

  await ses.sendEmail(emailParams).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Registration successful!' }),
  };
};
