import React, { Component } from 'react'

class IhelpGetRequest extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      description: ''
    }
  }

  handleChange(value) {
    this.setState({description: value})
  }

  render(){
    return (
      <div>
        <div style={{marginTop: '10px'}}>
          <div className="card">
            <div className="card-header">
              <div className="form-group">
              <label htmlFor="requestDescription">Describer You Help Request Here</label>
              <textarea className="form-control"
                  id="requestDescription" name="description"
                  rows="3" onChange={e => this.handleChange(e.target.value)}>
              </textarea>
              </div>
            </div>  
          </div>
        </div>
      </div>
    )
  }
}

export default IhelpGetRequest
