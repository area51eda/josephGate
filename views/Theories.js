var h = require('hyperscript')

module.exports = (conspiracies, dispatch) => {
  return h('div#yo', {}, conspiracies.map((conspiracy) => {
    return showConspiracy(conspiracy, dispatch)
  }))
}

function showConspiracy (conspiracy, dispatch) {
  return h('div', {},
    h('h2', {}, `"${conspiracy.description}" id: ${conspiracy.id}`),
    h('p', {}, `-  ${conspiracy.author}`),
    h('button.upVote', {}, {onclick: () => dispatch({type: 'INCREMENT_VOTES', payload: conspiracy.id})}, '+'),
    h('button.downVote', {}, {onclick: () => dispatch({type: 'DECREMENT_VOTES', payload: conspiracy.id})}, '-'),
    h('p', {}, `score: ${conspiracy.votes}`),
    h('button.delete', {}, {onclick: () => dispatch({type: 'DELETE_CONSPIRACY', payload: conspiracy.id})}, 'Bull$h*t!!')
  )
}
