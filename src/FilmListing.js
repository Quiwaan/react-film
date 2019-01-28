import React, { Component } from 'react';
import FilmRow from './FilmRow'

class FilmListings extends Component {

  constructor() {
    super()
    this.state = {
      filter: "all",
      faves: []
    }
  }



handleFaveToggle = (film) =>{
  console.log("handle fave toggle")
  const newFaves = this.state.faves.slice()
  const filmIndex = this.state.faves.indexOf(film)

  if(filmIndex===-1) {
  newFaves.push
} else { 
  newFaves.splice(filmIndex, 1)
  } 
  this.setState({faves: newFaves})

}

// if(film.title <= faves) {
//   newFaves.splice()

// } else {
//   newFaves.push()

// }


handleFilterClick= (filter) => {
  this.setState({
    filter: filter
  })      
}


  render() {
    const filmsToDisplay = this.state.filter==="all" ? this.props.films : this.state.faves
    const allFilms = filmsToDisplay.map((film, i) => {
      return (
        <FilmRow key={i} film={film} onFaveToggle={this.handleFaveToggle}
        isFave={this.state.faves.includes(film)}
        handleDetailsClick={this.props.handleDetailsClick} />
        )
    })
    
    
    return (
    
      <div className="film-list">
          <h1 className="section-title">Films</h1>
          <div className="film-list-filters">
            <div className={`film-list-filter${this.state.filter==="all" ? "is-active" : ""}`} onClick={() => this.handleFilterClick("all")}>
              ALL
              <span className="section-count">{this.props.films.length}</span>
            </div>
            <div className="film-list-filter" onClick={() => this.handleFilterClick("faves")}>
              FAVES
              <span className="section-count">{this.state.faves.length}</span>
            </div>
          </div>

          {allFilms}
      </div>
        
    );
  }
}

export default FilmListings;
