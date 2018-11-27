import React from 'react'
import { Card } from 'semantic-ui-react'


class PokemonCard extends React.Component {

  handleClick = (event) => {
    
    event.target.src =
      event.target.src === this.props.pokeinfo.sprites.front ?
         this.props.pokeinfo.sprites.back :
         this.props.pokeinfo.sprites.front
    
  }
 
  
  render() {
    const hpValue = this.props.pokeinfo.stats.find(stat => stat.name === 'hp').value
    
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={event => this.handleClick(event)} src={this.props.pokeinfo.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokeinfo.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hpValue}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}


export default PokemonCard