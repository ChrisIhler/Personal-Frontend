import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getQueues } from '../../actions/ihelp'
import request from '../../utils/request'

class IhelpOfferQueueMiniProfile extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    request(`/queues/${this.props.authentication.user.id}`,'get')
    .then(response => {
      console.log(response)
      this.props.getQueues(response)
    })  
  }

  render(){
    return this.props.queues.map((queue, index) => {
      return <div key={index}>
        <div className="card" style={{marginBottom: '10px'}}>
          <div className="card-body">
          <h5 className="card-title">Student Information</h5>
          <p className="card-text">{queue.first_name} {queue.last_name}</p>
          </div>
        </div>
      </div>
    })
  }
}

const mapStateToProps = state => {
  console.log('queue: ', state)
  return {
    queues: state.ihelp.queues,
    ...state
  }
}
const mapDispatchToProps = dispatch => 
  bindActionCreators({
    getQueues
  }, dispatch)

  export default connect(mapStateToProps, mapDispatchToProps)(IhelpOfferQueueMiniProfile)
