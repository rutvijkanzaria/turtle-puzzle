'use strict';

import React, {Component} from 'react';

class Gridblock extends Component {
	render(){
    if(this.props.column.obstacle){
      return (
        <div className="col grid-column">
          <img src="./images/obstacle.svg" className="obstacle" alt="Turtle"/>
        </div>
      )
    } else {
      if(this.props.column.turtle[0] === "true"){
        return (
          <div className="col grid-column">
            <img src="./images/turtle.svg" className={`turtle-img ${this.props.column.turtle[1]}`} alt="Turtle"/>
          </div>
        )

      } else {
        return (
          <div className="col grid-column"></div>
        )
      }
    }
	}
}

export default Gridblock;