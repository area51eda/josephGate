var h = require('hyperscript')

module.exports = (conspiracies, dispatch) => {
  console.log('Theores template:', {conspiracies})
  return h('div#yo', {}, conspiracies.map((conspiracy) => {
    return showConspiracy(conspiracy, dispatch)
  }))
}

function showConspiracy (conspiracy, dispatch) {
  const { id } = conspiracy

  return h('div.conDiv', { id }, [
    h('h2', `"${conspiracy.description}"`),
    h('p', `-  ${conspiracy.author}`),
    h('button.upVote', {onclick: () => dispatch({type: 'INCREMENT_VOTES', payload: id})}, '+'),
    h('button.downVote', {onclick: () => dispatch({type: 'DECREMENT_VOTES', payload: id})}, '-'),
    h('p', `score: ${conspiracy.votes}`),
    h('button.delete', {onclick: () => dispatch({type: 'DELETE_CONSPIRACY', payload: id})}, 'Bull$h*t!!')
  ])
}
