var redux = require('redux')
var h = require('hyperscript')
var morphdom = require('morphdom')

var reducer = require('./reducer')
var productsTemplate = require('./views/products')

var main = document.querySelector('main')
var app = document.createElement('div')
main.appendChild(app)

var initialState = {
  products: [
    {id: 1, name: 'The Name of the Wind', price: 12.50, details: 'Kvothe is cool'},
    {id: 2, name: 'Firefall', price: 11.29, details: 'Aliens are scary. Space vampires'},
    {id: 3, name: 'Kingdom of fear', price: 34.33, details: 'Song of the sausage creature'}
  ],
  cart: {
    1: 2 // There are two items with id 1 in the cart
  }
}

var store = redux.createStore(reducer, initialState)
const dispatch = store.dispatch

store.subscribe(render)

store.dispatch({type: 'INIT'}) //triggers an initial render

function render () {
  var currentState = store.getState()
  const newApp = h('div#app', {}, [
    productsTemplate(currentState, dispatch)
  ])
  morphdom(app, newApp)
}
