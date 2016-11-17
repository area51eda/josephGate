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
  }
  return newState
}
