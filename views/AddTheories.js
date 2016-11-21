var h = require('hyperscript')
var html = require('yo-yo')

module.exports = (dispatch) => {
  return h('div#add', {}, form(dispatch))
}

function form (dispatch) {
  return h('div', {},
    h('h3', 'Add new theory:'),
    h('input#description', {}, 'Add new conspiracy'),
    h('button', {type: 'submit', onclick: () => dispatch({type: 'ADD_CONSPIRACY', payload: {description: document.getElementById('description').value, author: 'anon'}})}, 'submit'),
    h('button', {type: 'submit', onclick: () => dispatch({type: 'CLEAR_ALL'})}, 'clear all')
  )
}
