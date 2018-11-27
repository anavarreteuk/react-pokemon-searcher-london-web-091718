import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  

  render() { 
    return (
      <Card.Group itemsPerRow={6}>
        {
          this.props.pokemons.filter(pokemon => pokemon.name.toLowerCase()
          .includes(this.props.filter.toLowerCase()))
          .map(pokemon => <PokemonCard key= {pokemon.id} pokeinfo={pokemon} /> )
        
        }
        
      </Card.Group>
    )
  }
}

export default PokemonCollection
