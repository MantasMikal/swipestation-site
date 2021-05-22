const mg = require('nodemailer-mailgun-transport')
const Email = require('email-templates')
var path = require('path')

exports.handler = async function (event) {
  const { email } = JSON.parse(event.body)
  const mail = new Email({
    message: {
      from: 'Swipestation example@example.com',
      subject: 'Swipestation whitepaper',
      attachments: [
        {
          filename: 'whitepaper.pdf',
          contentType: 'application/pdf',
          path: path.join(__dirname, '../../emails/attachments/whitepaper.pdf')
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

  try {
    await mail.send({
      template: 'whitepaper',
      message: {
        to: email
      }
    })
    return {
      statusCode: 200,
      body: `OK`
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: `Server error`
    }
  }
}
