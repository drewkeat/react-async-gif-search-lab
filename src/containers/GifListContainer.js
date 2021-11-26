import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      urlPreQuery: 'https://api.giphy.com/v1/gifs/search?api_key=WyzlKzcMhHyFw7CETUOkhajNb9qpoSYO&q=',
      urlPostQuery: '&limit=3&offset=0&rating=g&lang=en',
      gifData: [],
    }
  }

  handleSearch = (query) => {
    console.log(this.state.urlPreQuery + query + this.state.urlPostQuery)
    fetch(this.state.urlPreQuery+query+this.state.urlPostQuery).then(resp => resp.json()).then(data => this.setState({gifData: data.data}))
  }

  render() {
    return (
      <div>
        <GifSearch handleSearch={this.handleSearch}/>
        <GifList gifs={this.state.gifData}/>
      </div>
    )
  }
}