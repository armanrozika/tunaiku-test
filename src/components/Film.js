import React, { Component } from 'react';

class Film extends Component {
  state = {
    filmInfo: ''
  }

  componentDidMount(){
    let fetchFilm = async()=>{
      let fetchSingleFilm = await fetch('https://swapi.co/api/films/' + this.props.match.params.id + '?format=json');
      let singleData = await fetchSingleFilm.json();

      this.setState({
        filmInfo : singleData
      })
    }
    fetchFilm()
  }

  render() {
    //console.log(this.state.filmInfo)
    let singleFilm = this.state.filmInfo ? (
      <div>
        <p>Title: {this.state.filmInfo.title}</p>
        <p>Quote: {this.state.filmInfo.opening_crawl}</p>
        <p>Year: {this.state.filmInfo.release_date}</p>
      </div>
        
    ):(
      <p>loading...</p>
    )
    return (
      <div className="film">
        {singleFilm}
      </div>
    );
  }
}

export default Film;