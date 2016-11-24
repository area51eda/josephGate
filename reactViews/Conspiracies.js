const React = require('react')

const Conspiracies = (props) => {
  var {description, votes} = props.conspiracy
  return <div>
    <h1> A conspiracy</h1>
    <p>{description}</p>
    <p>{votes}</p>
  </div>
}

module.exports = Conspiracies
