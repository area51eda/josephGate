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
    {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick66'},
    {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'jim_likes69'},
    {id: 3, description: 'joseph can play the flute', votes: 0, author: 'jacko_wacko'},
    {id: 4, description: 'joseph was born on the moon', votes: 0, author: 'sarah_bukka'},
    {id: 5, description: 'joseph once killed a man in Reno', votes: 0, author: 'jim_like70'},
    {id: 6, description: 'joseph was conceived by 2 trees, and somehow came out of a fish', votes: 0, author: 'andy_handy_dandy'}
  ]
}

let store = redux.createStore(reducer, initialState)

store.subscribe(function () {
  var state = store.getState()
  var view = render(state, store.dispatch)
  morphdom(app, view)
})

store.dispatch({type: 'INIT'})
const dispatch = store.dispatch

function render (state, dispatch) {
    return h('div#app', {}, [
    Theories(state.conspiracies, dispatch)
  ])
}
