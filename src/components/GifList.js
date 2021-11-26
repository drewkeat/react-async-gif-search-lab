import React, { Component } from "react";
class GifList extends Component {
  generateItems = () => {
    return this.props.gifs.map((gif) => {
      return (
        <div className="col"><img src={gif.images.original.url} alt="" className="w-100"/></div>
        );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.generateItems()}</div>
      </div>
    );
  }
}

export default GifList;
