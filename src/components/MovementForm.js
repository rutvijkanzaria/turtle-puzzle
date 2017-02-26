'use strict';

import React, {Component} from 'react';

class MovementForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      formInput: '',
      showError: false
    };
  }

  handleChange = e => {
    let str = e.target.value;
    // let movements = this.state.movements.slice();
    switch(str[str.length -1]){
      case 'F':
      case 'f':
      case 'R':
      case 'r':
      case 'L':
      case 'l':
        this.setState({
          formInput: str,
          showError: false
        });
        break;

      case undefined: 
        this.setState({
          formInput: '',
          showError: false
        });
        break;

      default: this.setState({showError: true});
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.setMovements(this.state.formInput.toLowerCase().split(""));
    this.setState({
      formInput: '',
      showError: false,
    });
    // console.log(this.movements.value);
  }

	render(){
		return(
			<form className="mt-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input 
              value={this.state.formInput}
              onChange={this.handleChange}
              type="text" 
              id="movementinput" 
              className="form-control" 
              placeholder="Example - FRL" 
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">MOVE TURTLE</button>
            </span>
          </div>
          <small className="form-text text-muted">Instructions: F- Move Forward, R- Turn right, L- Turn left</small>
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