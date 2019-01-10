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
      <div className="film__content">
        <p>Title: <span>{this.state.filmInfo.title}</span></p>
        <p>Release Date: <span>{this.state.filmInfo.release_date}</span></p>
        <p>Director: <span>{this.state.filmInfo.director}</span></p>
        <p>Producer: <span>{this.state.filmInfo.producer}</span></p>
        <p>Synopsis: <span>{this.state.filmInfo.opening_crawl}</span></p>
       
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