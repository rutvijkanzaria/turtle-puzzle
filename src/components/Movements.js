'use strict';

import React, {Component} from 'react';

class Movements extends Component {
	render(){
    let addMoveClass = function(value){
      switch(value.action){
        case 'f': 
          if(value.isExecuted){
            return 'forward';
          }else{
            return 'fail';
          } 
          break;
        case 'r': case 'l': return 'turn'; break;

      }
    }

    let displayMovements = this.props.movements.map((val, index) => {
      return <div key={index} className={`col-md-2 p-3 ${addMoveClass(val)}`}>{val.action}</div>
    })

		return(
      <div className="row movement">
        {displayMovements}
      </div>
		);
	}
}

export default Movements;