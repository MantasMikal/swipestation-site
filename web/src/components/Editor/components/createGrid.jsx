import React from 'react'
import createMedia from './createMedia'
import Grid from 'Primitive/Grid'

export function createGrid(component) {
  const gridMedia = component.gridMedia

  if (!gridMedia) return <> </>

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
  const preserveGrid = component.preserveGrid ? { display: 'grid' } : null // Overrides display:block on mobile
  const maxWidth = component.maxWidth ? { maxWidth: component.maxWidth } : null

  const styles = Object.assign(
    {},
    colTemplate,
    rowTemplate,
    rowGap,
    colGap,
    margin,
    preserveGrid,
    maxWidth
  )

  const gridComponents = gridMedia.map((item) => {
    return createMedia(item)
  })

  return (
    gridComponents &&
    gridComponents.length > 0 && (
      <Grid style={styles} centered={centered}>
        {gridComponents}
      </Grid>
    )
  )
}

export default createGrid
