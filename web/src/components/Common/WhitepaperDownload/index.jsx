import React, { useState } from 'react'
import { object, shape, string, array } from 'prop-types'

import ButtonStandard from 'Primitive/ButtonStandard'
import TextControl from 'Primitive/TextControl'
import Type from 'Primitive/Type'
import Container from 'Primitive/Container'
import Icon from 'Primitive/Icon'
import styles from './WhitepaperDownload.module.scss'
import BlockText from 'Common/BlockText'

/**
 * Component for showing whitepaper download
 */
const WhitepaperDownload = ({ email, title, _rawDescription, buttonText }) => {
  const [emailInput, setEmailInput] = useState('')
  const [isSent, setIsSent] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    fetch('/.netlify/functions/whitepaper', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailInput,
        ...email
      })
    })
      .then(() => {
        setIsSent(true)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section className={styles.WhitepaperDownload}>
      <Container size="wide" gutter center>
        <Type as="h3" size="displayLarge">
          {title}
        </Type>
        <div className={styles.Download}>
          <div className={styles.Title}>
            <BlockText size="baseLarge" blocks={_rawDescription} />
          </div>
          {isSent ? (
            <div className={styles.Complete}>
              <Icon type="emailSent" width={120} height={120} />
              <Type as="p" size="baseLarge">
                Check your email!
              </Type>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <TextControl
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Your email"
                name="email"
                type="email"
                required
              />
              <ButtonStandard type="submit" secondary loading={isLoading}>
                {buttonText}
              </ButtonStandard>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}

WhitepaperDownload.propTypes = {
  email: shape({
    subject: string,
    emailBody: string,
    attachment: object,
    title: string
  }),
  title: string,
  _rawDescription: array,
  buttonText: string
}

export default WhitepaperDownload
