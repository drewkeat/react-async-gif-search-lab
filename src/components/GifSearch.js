import React, { Component } from 'react'

class GifSearch extends Component {
constructor(props) {
  super(props)

  this.state = {
     query: ""
  }
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  })
}

handleSubmit = (e) => {
  e.preventDefault()
  // FIXME: Adjust console log to pass as props
  this.props.handleSearch(this.state.query)
}


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="query">What do you want to see?</label>
          <input type="text" name="query" className="form-control" onChange={this.handleChange}/>
          <input type="submit" className="btn btn-primary" value="Get The GIFs" />
        </form>
      </div>
    )
  }
}

export default GifSearch
