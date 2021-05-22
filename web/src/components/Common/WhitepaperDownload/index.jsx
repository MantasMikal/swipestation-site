import React, { useState } from 'react'
import ButtonStandard from 'Primitive/ButtonStandard'
import TextControl from 'Primitive/TextControl'
import Type from 'Primitive/Type'
import Container from 'Primitive/Container'

import styles from './WhitepaperDownload.module.scss'

/**
 * Component for showing whitepaper download
 */
const WhitepaperDownload = () => {
  const [emailInput, setEmailInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/.netlify/functions/whitepaper', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: emailInput })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <section className={styles.WhitepaperDownload}>
      <Container size="wide" gutter center>
        <Type as="h3" size="displayLarge">
          LOREM IPSUM
        </Type>
        <div className={styles.Download}>
          <div className={styles.Title}>
            <Type as="p" size="baseLarge">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </Type>
          </div>
          <form onSubmit={handleSubmit}>
            <TextControl
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="Your email"
              name="email"
              type="email"
            />
            <ButtonStandard type="submit" secondary>
              DOWNLOAD
            </ButtonStandard>
          </form>
        </div>
      </Container>
    </section>
  )
}

WhitepaperDownload.propTypes = {}

export default WhitepaperDownload
