var h = require('hyperscript')

module.exports = (dispatch) => {
  return h('div#add', {}, form(dispatch))
}

function form (dispatch) {
  return h('div', {},
    h('h3', 'Add new theory:'),
    h('input#description', {}, 'Add new conspiracy'),
    h('button', {type: 'submit', onclick: () => dispatch({type: 'ADD_CONSPIRACY', payload: {description: document.getElementById('description').value, author: 'anon'}})}, 'submit')
  )
}
