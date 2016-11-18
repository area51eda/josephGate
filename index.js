const redux = require('redux')
const h = require('hyperscript')
const morphdom = require('morphdom')

const reducer = require('./reducer')
const Theories = require('./views/Theories')

const main = document.querySelector('main')
const app = document.createElement('div')
main.appendChild(app)

const initialState = {
  conspiracies: [
    {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick'},
    {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'mick'},
    {id: 3, description: 'joseph can play the flute', votes: 0, author: 'mick'}
  ]
}

let store = redux.createStore(reducer, initialState)

store.subscribe(render)

const dispatch = store.dispatch

function render () {
  const state = store.getState()
  const newView = h('div#app', {}, [
    Theories(state.conspiracies, dispatch)
  ])
  morphdom(app, newView)
}

store.dispatch({type: 'INIT'})
