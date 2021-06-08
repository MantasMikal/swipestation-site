const Email = require('email-templates')
const nodemailer = require('nodemailer')
const config = require('../../../config')

exports.handler = async function (event) {
  const { email, emailBody, subject, attachment, title } = JSON.parse(
    event.body
  )

  const options = {
    pass: process.env.MAILGUN_TOKEN,
    user: process.env.MAILGUN_DOMAIN,
    port: 587
  }

  const transport = nodemailer.createTransport({
    service: 'mailgun',
    auth: options
  })

  const attachmentUrl = attachment.asset.url
  const mail = new Email({
    message: {
      from: 'SwipeStation no-reply@email.swipestation.co.uk',
      subject: subject
    },
    transport: transport,
    send: true
  })

  try {
    const res = await mail.send({
      template: 'whitepaper',
      message: {
        to: email,
        subject: subject
      },
      locals: {
        siteUrl: config.site.siteUrl,
        emailBody: emailBody,
        attachmentUrl: attachmentUrl,
        title: title
      }
    })
    console.log("🚀 ~ file: whitepaper.js ~ line 45 ~ res", res)
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
