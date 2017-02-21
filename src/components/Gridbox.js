'use strict';

import React, {Component} from 'react';

import Gridblock from './Gridblock';

class Gridbox extends Component {
	render(){
    let drawGrid = this.props.grid.slice(0).reverse().map((col, index) => {
      let drawCol = col.map((val, ind) => {
        return <Gridblock key={ind+1} column={val} />
      })

      return (
        <div key={this.props.grid.length - index} className="row grid-row">
          {drawCol}
        </div>
      )
    });

		return(
			<div className="grid-box">
        {drawGrid}
      </div>
		);
	}
}

export default Gridbox;