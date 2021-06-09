const Email = require('email-templates')
const nodemailer = require('nodemailer')
const config = require('../../../config')
const path = require('path')

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

  const transport = nodemailer.createTransport({
    service: 'mailgun',
    auth: options
  })

  
  const mail = new Email({
    message: {
      from: 'SwipeStation no-reply@email.swipestation.co.uk',
      subject: subject
    },
    transport: transport,
    send: true
  })


  const templatePath = path.join(__dirname, 'emails', 'whitepaper')
  console.log(templatePath)

  try {
    const res = await mail.send({
      template: templatePath,
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
    console.log("🚀 ~ file: whitepaper.js ~ line 49 ~ res", res)
    const res2 = await mail.send({
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
    console.log("🚀 ~ file: whitepaper.js ~ line 49 ~ res2", res2)
    const res3 = await mail.send({
      template: path.join(__dirname, 'emails', 'whitepaper'),
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
    console.log("🚀 ~ file: whitepaper.js ~ line 49 ~ res3", res3)
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