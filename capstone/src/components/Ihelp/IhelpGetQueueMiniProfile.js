import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getHelpOffers, addQueueRequest } from '../../actions/ihelp'
import request from '../../utils/request'

class IhelpGetQueueMiniProfile extends Component {

  componentDidMount() {
    request('/users','get')
    .then(response => {
      this.props.getHelpOffers(response)
    })  
  }

  handleQueue(id) {
    console.log(this.props.authentication.user.id)
    //send to queue
  }

  render() {
    return this.props.offers.map((offer, index) => {
      return <div key={index}>
      <div className="card" style={{marginBottom: '10px'}}>
        <div className="card-body">
          <h5 className="card-title">Student Information</h5>
          <p className="card-text">{offer.first_name} {offer.last_name} </p>
          <button type="button" className="btn btn-primary" onClick={() => this.handleQueue(offer.id)}>Queue</button>
        </div>
      </div>
    </div>
    })
  }
}

const mapStateToProps = state => {
  const offers = state.ihelp.offers.filter(offer => {
    return offer.id !== state.authentication.user.id
  })
  return {
    offers: offers,
    ...state
  }
}
const mapDispatchToProps = dispatch => 
  bindActionCreators({
    getHelpOffers,
    addQueueRequest
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(IhelpGetQueueMiniProfile)
