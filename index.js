const redux = require('redux')
const html = require('yo-yo')

const React = require('react')
const ReactDom = require('react-dom')
const renderReact = ReactDom.render

const reducer = require('./reducer')
const Theories = require('./views/Theories')
const AddTheories = require('./views/AddTheories.js')

const Conspiracies = require('./reactViews/Conspiracies')

const main = document.querySelector('main')
const app = document.createElement('div')
main.appendChild(app)

const initialState = {
  conspiracies: [
    {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick66'},
    {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'jim_likes69'},
    {id: 3, description: 'joseph can play the flute', votes: 0, author: 'jacko_wacko'},
    {id: 4, description: 'joseph was born on the moon', votes: 0, author: 'sarah_bukka'},
    {id: 5, description: 'joseph once killed a man in Reno', votes: 0, author: 'jim_like70'},
    {id: 6, description: 'joseph was conceived by 2 trees, and somehow came out of a fish', votes: 0, author: 'andy_handy_dandy'}
  ]
}

let store = redux.createStore(reducer, initialState)

const dispatch = store.dispatch

const App = (props) =>
  <div id='app'>
    <Conspiracies conspiracy={props.state.conspiracies[0]} dispatch={props.dispatch} increment={props.increment}/>
  </div>
  // <h1>Hello {props.name}</h1>

  const dispatchIncrement = () => dispatch({type: 'INCREMENT_VOTES', payload: 0})

store.subscribe(() => {
  const state = store.getState()
  renderReact(<App
      state={state}
      dispatch={dispatch}
      increment={dispatchIncrement}
      />, app)
})


// function render () {
//   const state = store.getState()
//   const newView = html`
//     <div id='app'>
//       ${Theories(state.conspiracies, dispatch)}
//       ${AddTheories(dispatch)}
//     </div>
//   `
//   html.update(app, newView)
// }

store.dispatch({type: 'INIT'})
