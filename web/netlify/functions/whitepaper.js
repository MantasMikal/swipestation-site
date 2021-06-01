const mg = require('nodemailer-mailgun-transport')
const Email = require('email-templates')

import config from '../../../config'

exports.handler = async function (event) {
  const { email, emailBody, subject, attachment, title } = JSON.parse(
    event.body
  )
  const attachmentUrl = attachment.asset.url
  const mail = new Email({
    message: {
      from: 'Swipestation example@example.com',
      subject: subject
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