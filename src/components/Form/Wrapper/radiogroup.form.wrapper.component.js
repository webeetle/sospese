import React from 'react'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import PropTypes from 'prop-types'

const RadioGroupWrapper = (props) => {
  const {
    input: { name, onChange, value },
    rowsData,
    meta,
    ...propsInputWrapped
  } = props

  return (
    <RadioGroup
      row
      value={value}
      name={name}
      onChange={(...params) => {
        if (onChange) {
          onChange(...params)
        }
        if (propsInputWrapped.onChange) {
          propsInputWrapped.onChange(...params)
        }
      }}
    >
      {
        rowsData && rowsData.length ? rowsData.map((rowData) => {
          return (
            <FormControlLabel
              key={'radioGroup_' + rowData.value}
              value={rowData.value}
              control={
                <Radio color='primary' />
              }
              label={rowData.label}
              labelPlacement={rowData.labelPlacement}
            />
          )
        }) : null
      }
    </RadioGroup>
  )
}

RadioGroupWrapper.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  rowsData: PropTypes.array
}

export default RadioGroupWrapper
