var clone = require('clone')

module.exports = function reducer (state, action) {
  var newState = clone(state)
  var {conspiracies} = newState
  var {type, payload} = action
  switch (type) {
    case 'INIT':
      return newState
    case 'INCREMENT_VOTES':
      conspiracies.forEach((conspiracy, index) => {
        if (conspiracy.id === payload) conspiracies[index].votes++
      })
      return newState
    case 'DECREMENT_VOTES':
      // find the target conspiracy to DECREMEN
      // decrement it

      
      conspiracies.forEach((conspiracy, index) => {
        if (conspiracy.id === payload) conspiracies[index].votes--
      })
      return newState
    case 'ADD_CONSPIRACY':
      if (payload) {
        var ID = conspiracies[conspiracies.length - 1].id + 1
        conspiracies.push({id: ID, description: payload.description, votes: 0, author: payload.author})
      }
      return newState
    case 'DELETE_CONSPIRACY':
      console.log("deleting id: ", payload)
      newState.conspiracies = conspiracies.filter((conspiracy) => {
        return conspiracy.id !== payload
      })
      return newState
    case 'EDIT_CONSPIRACY':
      conspiracies.forEach((conspiracy) => {
        if (conspiracy.id === payload.id) conspiracy.description = payload.description
      })
      return newState
  }
  return newState
}
