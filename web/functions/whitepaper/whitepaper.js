const nodemailer = require('nodemailer')
const config = require('../../../config')
const pug = require('pug')
var fs = require('fs').promises

exports.handler = async function (event) {
  const { email, emailBody, subject, attachment, title } = JSON.parse(
    event.body
  )

  const attachmentUrl = attachment.asset.url

  const options = {
    pass: process.env.MAILGUN_TOKEN,
    user: process.env.MAILGUN_DOMAIN,
    port: 587
  }

  const transporter = nodemailer.createTransport({
    service: 'mailgun',
    auth: options
  })

  try {
    var html = await fs.readFile(require.resolve('./whitepaper.pug'))
    let template = pug.render(html, {
      siteUrl: config.site.siteUrl,
      emailBody: emailBody,
      attachmentUrl: attachmentUrl,
      title: title
    })

    await transporter.sendMail({
      from: 'SwipeStation no-reply@email.swipestation.co.uk', // sender address
      to: email,
      subject: subject,
      html: template
    })
    return {
      statusCode: 200,
      body: `OK`
    }
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: `Server error`
    }
  }
}
