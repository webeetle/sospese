import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

const TextFieldWrapper = ({
  input: { name, onChange, onBlur, value, ...propsInput },
  meta,
  fullWidth,
  readOnly = false,
  variant,
  disabled = false,
  type = 'text',
  highlighted = false,
  InputProps = {},
  onClick,
  disableUnderline = false,
  label,
  placeholder,
  rowsMax,
  multiline,
  rows,
  uppercase = false,
  lowercase = false,
  hidden = false,
  id,
  ...propsField
}) => {
  if (type === 'hidden') {
    delete meta.error
  }

  return (
    hidden ? null : (
      <TextField
        id={id}
        type={type}
        label={label}
        placeholder={placeholder}
        name={name}
        helperText={meta.touched ? meta.error : undefined}
        error={(meta.error && meta.touched) || highlighted}
        value={propsField.value ? propsField.value : value}
        fullWidth={fullWidth}
        variant={variant}
        onChange={(...params) => {
          if (uppercase) {
            params[0].target.value = params[0].target.value.toUpperCase()
          }

          if (lowercase) {
            params[0].target.value = params[0].target.value.toLowerCase()
          }

          if (onChange) {
            onChange(...params)
          }
          if (propsField.onChange) {
            propsField.onChange(...params)
          }
        }}
        onBlur={(...params) => {
          if (onBlur) {
            onBlur(...params)
          }
          if (propsField.onBlur) {
            propsField.onBlur(...params)
          }
        }}
        disabled={disabled}
        rows={rows}
        rowsMax={rowsMax}
        multiline={multiline}
        inputProps={{
          ...propsInput
        }}
        InputProps={{
          ...InputProps,
          className: multiline ? 'textarea-default' : (InputProps ? InputProps.className : ''),
          readOnly,
          disableUnderline: disableUnderline,
          type: type
        }}
        onClick={!disabled ? onClick : () => {}}
      />
    )
  )
}

TextFieldWrapper.propTypes = {
  id: PropTypes.string,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  hidden: PropTypes.bool,
  rows: PropTypes.array,
  input: PropTypes.object,
  meta: PropTypes.object,
  readOnly: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  highlighted: PropTypes.bool,
  InputProps: PropTypes.object,
  onClick: PropTypes.func,
  disableUnderline: PropTypes.bool,
  multiline: PropTypes.bool,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  rowsMax: PropTypes.number,
  label: PropTypes.string
}

export default TextFieldWrapper
