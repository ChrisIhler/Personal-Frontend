import { SET_AUTHENTICATION } from '../actions/authentication'
import { GET_REQUESTS, GET_OFFERS, ADD_QUEUE_REQUEST, GET_QUEUES } from '../actions/ihelp'

export const posts = (state=[], action) => {
  switch(action.type){
    default:
      return state
  }
} 

const AUTHENTICATION_INITIAL_STATE = {
  user: null,
  pending: true
}

export const authentication = (state = AUTHENTICATION_INITIAL_STATE, action) => {
  switch(action.type){
    case SET_AUTHENTICATION: 
      return {user: action.payload, pending: false}
    default:
      return state
  }
}

const IHELP_INITIAL_STATE = {
  request: {},
  offers: [],
  queues: []
}

export const ihelp = (state = IHELP_INITIAL_STATE, action) => {
  console.log('action', action)
  switch(action.type){
    case GET_REQUESTS:
      return state
    case GET_OFFERS:
      return {offers: action.payload.data}
    case ADD_QUEUE_REQUEST:
      return state
    case GET_QUEUES:
      return {queues: action.payload.data}
    default:
      return state
  }
}