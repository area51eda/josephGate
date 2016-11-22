var test = require('tape')
var freeze = require('deep-freeze')

var reducer = require('../reducer')

test("base test", function(t){
  t.ok(true)
  t.end()
})

test("Test that reducer can increment votes", function(t){
  // arrange
  const state = {
    conspiracies: [
      {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick'},
      {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'mick'},
      {id: 3, description: 'joseph can play the flute', votes: 0, author: 'mick'}
    ]
  }

  const expectedState = {
    conspiracies: [
      {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick'},
      {id: 2, description: 'joseph has 11 toes', votes: 1, author: 'mick'},
      {id: 3, description: 'joseph can play the flute', votes: 0, author: 'mick'}
    ]
  }
  freeze(state)
  // act
  const actual = reducer(state, {type: 'INCREMENT_VOTES', payload: 2})
  // assert
  t.deepEquals(actual, expectedState, 'the reducer increments correctly')
  t.end()
})

test("Test that reducer can decrement votes", function(t){
  // arrange
  const state = {
    conspiracies: [
      {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick'},
      {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'mick'},
      {id: 3, description: 'joseph can play the flute', votes: 0, author: 'mick'}
    ]
  }

  const expectedState = {
    conspiracies: [
      {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick'},
      {id: 2, description: 'joseph has 11 toes', votes: -1, author: 'mick'},
      {id: 3, description: 'joseph can play the flute', votes: 0, author: 'mick'}
    ]
  }
  freeze(state)
  // act
  const actual = reducer(state, {type: 'DECREMENT_VOTES', payload: 2})
  // assert
  t.deepEquals(actual, expectedState, 'the reducer decrements correctly')
  t.end()
})

test("Test that reducer can add new conspiracy", function(t){
  // arrange
  const state = {
    conspiracies: [
      {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick'},
      {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'mick'},
      {id: 3, description: 'joseph can play the flute', votes: 0, author: 'mick'}
    ]
  }

  const expectedState = {
    conspiracies: [
      {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick'},
      {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'mick'},
      {id: 3, description: 'joseph can play the flute', votes: 0, author: 'mick'},
      {id: 4, description: 'joseph can swim through land', votes: 0, author: 'mick'}
    ]
  }
  freeze(state)
  // act
  const actual = reducer(state, {type: 'ADD_CONSPIRACY', payload: {description: 'joseph can swim through land', author: 'mick'}})
  // assert
  t.deepEquals(actual, expectedState, 'the reducer can add new conspiraciy')
  t.end()
})

test("Test that reducer can delete a conspiracy", function(t){
  // arrange
  const state = {
    conspiracies: [
      {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick'},
      {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'mick'},
      {id: 3, description: 'joseph can play the flute', votes: 0, author: 'mick'},
      {id: 4, description: 'joseph can swim through land', votes: 0, author: 'mick'}
    ]
  }

  const expectedState = {
    conspiracies: [
      {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick'},
      {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'mick'},
      {id: 4, description: 'joseph can swim through land', votes: 0, author: 'mick'}
    ]
  }
  freeze(state)
  // act
  const actual = reducer(state, {type: 'DELETE_CONSPIRACY', payload: 3})
  // assert
  t.deepEquals(actual, expectedState, 'the reducer deletes correctly')
  t.end()
})

test("Test that reducer can edit a conspiracy", function(t){
  // arrange
  const state = {
    conspiracies: [
      {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick'},
      {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'mick'},
      {id: 3, description: 'joseph can play the flute', votes: 0, author: 'mick'},
      {id: 4, description: 'joseph can swim through land', votes: 0, author: 'mick'}
    ]
  }

  const expectedState = {
    conspiracies: [
      {id: 1, description: 'joseph is a robot', votes: 0, author: 'mick'},
      {id: 2, description: 'joseph has 11 toes', votes: 0, author: 'mick'},
      {id: 3, description: 'joseph can play the flute', votes: 0, author: 'mick'},
      {id: 4, description: 'joseph once fought a tiger', votes: 0, author: 'mick'}
    ]
  }
  freeze(state)
  // act
  const actual = reducer(state, {type: 'EDIT_CONSPIRACY', payload: {id: 4, description: 'joseph once fought a tiger'}})
  // assert
  t.deepEquals(actual, expectedState, 'the reducer edits correctly')
  t.end()
})
