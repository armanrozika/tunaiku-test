import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Index extends Component {
  state = {
    films : ''
  }
  componentDidMount(){
    let fetchFilms = async () => {
      let getFilms = await fetch('https://swapi.co/api/films?format=json')
      let dataFilms = await getFilms.json()
    
      this.setState({
        films: dataFilms
      })
    }

    fetchFilms()
  }

  render() {
    //console.log(this.state.films.results)
    let filmList = this.state.films.results ? (
      this.state.films.results.map(data => {
        let paramsId = data.url.slice(27);
        return (
          <Link className="index__link" to={`/film/`+ paramsId} key={data.episode_id}>{data.title}</Link>
        )
      })
    ) : (
      <p>loading...</p>
    ) 
    
    return (
        <div className="index">
          {filmList}
        </div>
    );
  }
}

export default Index;