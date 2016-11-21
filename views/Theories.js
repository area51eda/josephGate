var h = require('hyperscript')
var html = require('yo-yo')

module.exports = (conspiracies, dispatch) => {
  return html`
    <div class="theories">
      ${conspiracies.map((conspiracy, index)=>{
        return showConspiracyYOYO(conspiracy, dispatch, index)
      })}
    </div>
  `
}

function showConspiracyYOYO (conspiracy, dispatch, index) {
  return html`
    <div class="theory">
      <h2>${conspiracy.description}</h2>
      <p>${conspiracy.author}</p>
      <button onclick=${ () => {
        dispatch({type: 'INCREMENT_VOTES', payload: index})
      }}>+</button>
      <button onclick=${ () => {
        dispatch({type: 'DECREMENT_VOTES', payload: index})
      }}>-</button>
      <p>Score: ${conspiracy.votes}</p>
      <button onclick=${ () => {
        dispatch({type: 'DELETE_CONSPIRACY', payload: index})
      }}>DELETE</button>
    </div>
  `
}
