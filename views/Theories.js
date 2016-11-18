var h = require('hyperscript')

module.exports = (conspiracies, dispatch) => {
  console.log({conspiracies})
  return h('div#yo', {}, conspiracies.map((conspiracy, index) => {
    return showConspiracy(conspiracy, dispatch)
  }))
}

function showConspiracy (conspiracy, dispatch) {
  return h('div', {},
    h('h2', {}, `"${conspiracy.description}"`),
    h('p', {}, `-  ${conspiracy.author}`),
    h('button.upVote', {}, {onclick: () => dispatch({type: 'INCREMENT_VOTES', payload: conspiracy.id})}, '+'),
    h('button.downVote', {}, {onclick: () => dispatch({type: 'DECREMENT_VOTES', payload: conspiracy.id})}, '-'),
    h('p', {}, `score: ${conspiracy.votes}`),
    h('button.delete', {}, {onclick: () => dispatch({type: 'DELETE_CONSPIRACY', payload: conspiracy.id})}, 'Bull$h*t!!')
  )
}
