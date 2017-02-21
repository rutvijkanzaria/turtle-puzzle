'use strict';

import React, {Component} from 'react';

class MovementForm extends Component {
	render(){
		return(
			<form className="mt-5">
        <div className="form-group">
          <label htmlFor="movementinput">movement instructions</label>
          <div className="input-group">
            <input type="text" id="movementinput" className="form-control" placeholder="Enter movements..." />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">MOVE TURTLE</button>
            </span>
          </div>
        </div>
      </form>
		);
	}
}

export default MovementForm;