import React from 'react'
import { string, array } from 'prop-types'
import Container from 'Primitive/Container'
import Type from 'Primitive/Type'
import Map from 'Primitive/Map'

import styles from './Locations.module.scss'
import BlockText from 'Common/BlockText'

const Locations = ({ locations, title, description }) => {
  console.log('Locations -> locations', locations)
  return (
    <Container gutter size="wide" center spacious className={styles.Locations}>
      <Type size="displayLarge" as="h3" className={styles.Title}>
        {title}
      </Type>

      {description && (
        <div className={styles.Description}>
          <BlockText blocks={description} />
        </div>
      )}
      <div className={styles.Wrapper}>
        {locations.map((loc, i) => (
          <div className={styles.MapWrapper}>
            <div className={styles.Map}>
              <Map
                style={{ height: '100%', borderRadius: '3px' }}
                locations={[loc.location]}
                key={`Location-${i}`}
              />
            </div>
            <Type className={styles.City} size="title">
              {loc.city}
            </Type>
            <Type className={styles.Address} size="base">
              {loc.address}
            </Type>
          </div>
        ))}
      </div>
    </Container>
  )
}

Locations.propTypes = {
  title: string,
  description: array
}

export default Locations
