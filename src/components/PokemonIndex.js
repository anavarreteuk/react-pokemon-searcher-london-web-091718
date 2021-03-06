import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    filter: ''
  }

  updateFilter = newFilter => {
    this.setState({ filter: newFilter })
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(response => response.json())
      .then(data => {
        this.setState({
          pokemons: data
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={event => this.updateFilter(event.target.value)} showNoResults={false} />
        <br />
        <PokemonForm />
        <br />
        <PokemonCollection filter = {this.state.filter} pokemons={this.state.pokemons}/>
        
        
      </div>
    )
  }
}

export default PokemonPage
