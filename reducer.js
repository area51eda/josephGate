var clone = require('clone')

module.exports = function reducer (state, action) {
  var newState = clone(state)
  switch (action.type) {
    case 'INIT':
      return newState
    case 'INCREMENT_VOTES':
      newState.conspiracies[action.payload].votes++
      return newState
    case 'DECREMENT_VOTES':
      newState.conspiracies[action.payload].votes--
      return newState
      case 'ADD_THEORY':
        if (action.payload) {
          newState.conspiracies.push({id: newState.conspiracies.length+1, description: action.payload.description, votes: 0, author: action.payload.author})
        }
        return newState
  }
  return newState
}
