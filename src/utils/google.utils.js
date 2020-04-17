import { List, ListItem, ListItemText, Paper, TextField } from '@material-ui/core'
import React from 'react'

export function formatSuggestion (classes, active, suggestions, onSelectSuggestion) {
  return (
    <Paper elevation={0}>
      <List className={classes.listResult}>
        {
          suggestions.map((suggestion) => (
            <ListItem
              key={suggestion.description}
              button
              onClick={(event) => onSelectSuggestion(suggestion, event)}
            >
              <ListItemText>{suggestion.description}</ListItemText>
            </ListItem>
          ))
        }
      </List>
    </Paper>
  )
}

export const formatInput = input => {
  input.label = input.placeholder
  input.fullWidth = true
  delete input.placeholder
  return (
    <TextField
      {...input}
    />
  )
}
