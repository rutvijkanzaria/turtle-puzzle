'use strict';

import React, {Component} from 'react';

class GridForm extends Component {
  handleSubmit = e =>{
    e.preventDefault();
    this.props.createGrid(this.size.value);
  }

	render(){
		return(
			<form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="gridinput">Enter grid size</label>
          <div className="input-group">
            <input 
              type="number" 
              ref={(input) =>this.size = input}
              className="form-control" 
              id="gridinput" 
              placeholder="Enter grid size..." 
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">GENERATE</button>
            </span>
          </div>
        </div>
      </form>
		);
	}
}

export default GridForm;