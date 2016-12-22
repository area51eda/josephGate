const redux = require('redux')
const h = require('hyperscript')
const morphdom = require('morphdom')

const reducer = require('./reducer')
const Theories = require('./views/Theories')

const initialState = {
  conspiracies: [
    {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick66', upVoted: false, downVoted: false},
    {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'jim_likes69', upVoted: false, downVoted: false},
    {id: 3, description: 'joseph can play the flute', votes: 0, author: 'jacko_wacko', upVoted: false, downVoted: false},
    {id: 4, description: 'joseph was born on the moon', votes: 0, author: 'sarah_bukka', upVoted: false, downVoted: false},
    {id: 5, description: 'joseph once killed a man in Reno', votes: 0, author: 'jim_like70', upVoted: false, downVoted: false},
    {id: 6, description: 'joseph was conceived by 2 trees, and somehow came out of a fish', votes: 0, author: 'andy_handy_dandy', upVoted: false, downVoted: false}
  ]
}

let store = redux.createStore(reducer, initialState)

store.subscribe(render)

const dispatch = store.dispatch

const main = document.querySelector('main')
// const app = document.createElement('div')
const app = h('div#app', {}, [
  Theories(initialState.conspiracies, dispatch)
])
main.appendChild(app)


function render () {
  const state = store.getState()
  const newView = h('div#app', {}, [
    Theories(state.conspiracies, dispatch)
  ])
  morphdom(app, newView)
}

// store.dispatch({type: 'INIT'})
