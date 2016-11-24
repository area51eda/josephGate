const React = require('react')

const Conspiracies = (props) => {
  var {description, votes} = props.conspiracy
  return <div className='theory'>
    <h2>A conspiracy</h2>
    <p>{description}</p>
    <p>Votes: {votes}</p>
    <button onClick={() => props.dispatch({type: "INCREMENT_VOTES", payload: 0})}>+</button>
    <button onClick={() => props.dispatch({type: "DECREMENT_VOTES", payload: 0})}>-</button>
    <br/>
    <button onClick={() => props.dispatch({type: "DELETE_CONSPIRACY", payload: 0})}>DELETE</button>
  </div>
}

module.exports = Conspiracies
