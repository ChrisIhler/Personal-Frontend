import React, { Component } from 'react'

class SessionConnectionProfiles extends Component {

  render(){
    return (
      <div>
          <div className="card" style={{marginBottom: '10px'}}>
          <div className="card-body">
          <h5 className="card-title">User that made Request </h5>
          <p className="card-text">add profile props, acctivity status, Q #, Name, location, Message button</p>
          <button type="button" className="btn btn-primary">Queue</button>
          </div>
          </div>
          <div className="card">
          <div className="card-body">
          <h5 className="card-title">User that is Offering help</h5>
          <p className="card-text">add profile props, acctivity status, Q #, Name, location, Message button</p>
          <button type="button" className="btn btn-primary">Queue</button>
          </div>
          </div >
      </div>
    )
  }
}


export default SessionConnectionProfiles
