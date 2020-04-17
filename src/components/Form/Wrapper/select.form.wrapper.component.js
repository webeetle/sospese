import React from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import PropTypes from 'prop-types'

const SelectWrapper = (props) => {
  const {
    input: { name, value, onChange },
    native,
    fullWidth,
    variant,
    rowsData,
    meta,
    render = false,
    disabled = false,
    ...propsInputWrapped
  } = props

  const renderOption = (rowData, native = false) => {
    if (native) {
      return (
        <option value={rowData.value}>{rowData.label}</option>
      )
    }
    if (typeof (render) === 'function') {
      return render(rowData)
    }
    return (
      <MenuItem key={'nativeSelect_' + rowData.value} value={rowData.value}>{rowData.label}</MenuItem>
    )
  }

  const renderSelectedOption = (value, label, native) => {
    if (value && value !== '') {
      return renderOption({
        value: value,
        label: label
      }, native)
    }

    return null
  }

  const ownProps = () => {
    const otherProps = {}

    if (variant === 'outlined') {
      otherProps.input = (
        <OutlinedInput
          fullWidth
          labelWidth={propsInputWrapped.placeholder.length * 9.5}
        />
      )
    }

    return otherProps
  }

  return (
    <FormControl variant={variant} fullWidth={fullWidth} error={meta.error && meta.touched}>
      {propsInputWrapped.placeholder ? (<InputLabel> {propsInputWrapped.placeholder} </InputLabel>) : null}
      <Select
        value={value}
        native={native}
        name={name}
        disabled={disabled}

        {...ownProps()}
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
            return renderOption(rowData, native)
          }) : renderSelectedOption(value, value, native)
        }
      </Select>
      {meta.error && meta.touched ? (<FormHelperText>{meta.error}</FormHelperText>) : <></>}
    </FormControl>
  )
}

SelectWrapper.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  rowsData: PropTypes.array,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  native: PropTypes.bool,
  render: PropTypes.any,
  label: PropTypes.string
}

export default SelectWrapper
