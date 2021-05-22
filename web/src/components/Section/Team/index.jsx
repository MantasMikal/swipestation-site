import React from 'react'
import { string, array } from 'prop-types'

import Container from 'Primitive/Container'
import ModalWithTrigger from 'Primitive/ModalWithTrigger'
import Type from 'Primitive/Type'
import BlockText from 'Common/BlockText'
import { Card, Page } from 'Common/TeamMember'

import styles from './Team.module.scss'

const Team = ({ title, description, team }) => {
  return (
    <Container gutter size="wide" center className={styles.Team}>
      <Type size="displayLarge" as="h3" className={styles.Title}>
        {title}
      </Type>
      {description && (
        <div className={styles.Description}>
          <BlockText blocks={description} />
        </div>
      )}
      <div className={styles.TeamMembers}>
        {team &&
          [...team].map((member, i) => (
            <div className={styles.TeamMember} key={`TeamMember-${i}`}>
              <ModalWithTrigger
                ariaLabel="Example ModalWithTrigger"
                trigger={<Card {...member} />}
              >
                <Page {...member} />
              </ModalWithTrigger>
            </div>
          ))}
      </div>
    </Container>
  )
}

Team.propTypes = {
  title: string,
  description: array
}

export default Team
