import React from 'react'
import createMedia from './createMedia'
import Grid from 'Primitive/Grid'

export function createGrid(component) {
  const gridMedia = component.gridMedia
  const colTemplate = component.colTemplate
    ? { gridTemplateColumns: `${component.colTemplate}` }
    : null
  const rowTemplate = component.rowTemplate
    ? { gridTemplateRows: `${component.rowTemplate}` }
    : null

  const rowGap = component.rowGap ? { gridRowGap: `${component.rowGap}` } : null
  const colGap = component.colGap
    ? { gridColumnGap: `${component.colGap}` }
    : null
  const margin = component.margin ? { margin: component.margin } : null
  const centered = component.centered && component.centered
  const styles = Object.assign(
    {},
    colTemplate,
    rowTemplate,
    rowGap,
    colGap,
    margin
  )

  if (!gridMedia) return <> </>

  // Build content
  const gridComponents = gridMedia.map((item) => {
    return createMedia(item)
  })
  return (
    gridComponents && (
      <Grid style={styles} centered={centered} key={component._key}>
        {gridComponents}
      </Grid>
    )
  )
}
export default createGrid
