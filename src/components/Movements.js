'use strict';

import React, {Component} from 'react';

class Movements extends Component {
	render(){
		return(
			<div className="row movement">
        <div className="col-md-2 p-3 forward">F</div>
        <div className="col-md-2 p-3 forward">F</div>
        <div className="col-md-2 p-3 forward">F</div>
        <div className="col-md-2 p-3 right">R</div>
        <div className="col-md-2 p-3 right">R</div>
        <div className="col-md-2 p-3 forward">F</div>
        <div className="col-md-2 p-3 fail">L</div>
        <div className="col-md-2 p-3 forward">F</div>
      </div>
		);
	}
}

export default Movements;