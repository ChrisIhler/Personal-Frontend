export const GET_REQUESTS = 'GET_REQUESTS'
export const GET_OFFERS = 'GET_OFFERS'
export const ADD_QUEUE_REQUEST = 'ADD_QUEUE_REQUEST'
export const GET_QUEUES = 'GET_QUEUES'

export const getRequests = claim => ({
  type: GET_REQUESTS,
  payload: claim
})

export const getHelpOffers = claim => {
  return {
    type: GET_OFFERS,
    payload: claim
  }
}

export const addQueueRequest = claim => {
  return {
    type: ADD_QUEUE_REQUEST,
    payload: claim
  }
}

export const getQueues = claim => {
  return {
    type: GET_QUEUES,
    payload: claim
  }
}
