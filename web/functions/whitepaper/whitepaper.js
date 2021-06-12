// const Email = require('email-templates')
const nodemailer = require('nodemailer')
const config = require('../../../config')
const pug = require('pug')
var fs = require('fs')

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
    var html = fs.readFileSync(require.resolve('./whitepaper.pug'))
    console.log('🚀 ~ file: whitepaper.js ~ line 14 ~ text', html)
    let template = pug.render(html, {
      siteUrl: config.site.siteUrl,
      emailBody: emailBody,
      attachmentUrl: attachmentUrl,
      title: title
    })
    console.log('🚀 ~ file: whitepaper.js ~ line 30 ~ template', template)
  } catch (err) {
    console.log(err)
  }

  try {
    let info = await transporter.sendMail({
      from: 'SwipeStation no-reply@email.swipestation.co.uk', // sender address
      to: email,
      subject: subject,
      html: template // html body
    })
    console.log('🚀 ~ file: whitepaper.js ~ line 49 ~ res', info)
    return {
      statusCode: 200,
      body: `OK`
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: `Server error`
    }
  }
}
