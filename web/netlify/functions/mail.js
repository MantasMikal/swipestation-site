const mg = require('nodemailer-mailgun-transport')
const Email = require('email-templates')
var path = require('path')

exports.handler = async function (event) {
  console.log(event.queryStringParameters)
  const { email } = event.queryStringParameters
  const mail = new Email({
    message: {
      from: 'Swipestation example@example.com',
      subject: 'Swipestation whitepaper',
      attachments: [
        {
          filename: 'whitepaper.pdf',
          contentType: 'application/pdf',
          path: path.join(__dirname, '../email/attachments/whitepaper.pdf')
        }
      ]
    },
    transport: mg({
      auth: {
        api_key: process.env.MAILGUN_TOKEN,
        domain: process.env.MAILGUN_DOMAIN
      }
    }),
    send: true
  })

  mail
    .send({
      template: 'whitepaper',
      message: {
        to: email
      }
    })
    .then(() => {
      return {
        statusCode: 500,
        body: `Server error`
      }
    })
    .catch((error) => {
      console.log(error)
      return {
        statusCode: 200,
        body: `OK`
      }
    })
}
