'use strict';

import React, {Component} from 'react';

class MovementForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      formInput: '',
      movements: [],
      showError: false
    };
  }

  handleChange = e => {
    let str = e.target.value;
    let movements = this.state.movements.slice();
    switch(str[str.length -1]){
      case 'F':
      case 'f':
      case 'R':
      case 'r':
      case 'L':
      case 'l':
        movements.push(str[str.length - 1].toLowerCase());
        this.setState({
          formInput: str,
          movements: movements,
          showError: false
        });
        break;

      case undefined: this.setState({
          formInput: '',
          movements: [],
          showError: false
        });
        break;

      default: this.setState({showError: true});
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.setMovements(this.state.movements);
    this.setState({
      formInput: '',
      movements: [],
      showError: false,
    });
    // console.log(this.movements.value);
  }

	render(){
		return(
			<form className="mt-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="movementinput">movement instructions</label>
          <div className="input-group">
            <input 
              value={this.state.formInput}
              onChange={this.handleChange}
              type="text" 
              id="movementinput" 
              className="form-control" 
              placeholder="Enter movements..." 
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">MOVE TURTLE</button>
            </span>
          </div>
          {
            (this.state.showError) 
            ?
            <small className="form-text text-muted error">Please enter valid movement</small>
            :
            ''
          }
        </div>
      </form>
		);
	}
}

export default MovementForm;