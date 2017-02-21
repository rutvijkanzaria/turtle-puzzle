'use strict';

import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/App.css';


// Components
import GridForm from '../components/GridForm';
import MovementForm from '../components/MovementForm';
import Movements from '../components/Movements';
import Gridbox from '../components/Gridbox';

const INITIAL_STATE = [
  [
    {
      "turtle" : ["true", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": true
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    }
  ],
  [
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": true
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    }
  ],
  [
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": true
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    }
  ],
  [
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": true
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    }
  ],
  [
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": true
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    },
    {
      "turtle" : ["false", "north"],
      "obstacle": false
    }
  ]
]

class Turtle extends Component {
  constructor(props){
    super(props);
    this.state = {
      gridArray: INITIAL_STATE
    }
  }
  render() {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-md-5">
            <GridForm />
            <MovementForm />
            <Movements />
          </div>
          <div className="col-md-7">
            <Gridbox grid={this.state.gridArray} />
          </div>
        </div>
      </div>
    );
  }
};

export default Turtle;