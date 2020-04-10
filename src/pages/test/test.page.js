import React from 'react'
import { useStyles } from './test.style'

export function TestPage () {
  const classes = useStyles()
  return (
    <div className={classes.root}>test</div>
  )
}
