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
];

class Turtle extends Component {
  constructor(props){
    super(props);
    this.state = {
      gridSize: 5,
      gridArray: []
    }
  }

  componentDidMount() {
    this.constructGrid(this.state.gridSize);
  }

  createGrid = value => {
    this.setState({gridSize: value});
    this.constructGrid(value);
  }

  constructGrid = (size) => {
    let grid = [];
    for(let i = 0; i < size; i++){
      let row = [];
      for(let j = 0; j < size; j++){
        let block = {};
        if(i === 0 && j === 0){
          block = {
            turtle: ["true", "north"],
            obstacle: false
          }
        } else {
          block = {
            turtle: ["false", "north"],
            obstacle: false
          }
        }
        row.push(block);
      }
      grid.push(row);
    }
    let obst = 0;
    while(obst < size){
      let i = Math.floor((Math.random() * size) + 0);
      let j = Math.floor((Math.random() * size) + 0);
      if(i !== 0 && j !==0 && !grid[i][j].obstacle){
        grid[i][j].obstacle = true;
        obst++;
      }
    }
    this.setState({gridArray: grid});
  }

  render() {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-md-5">
            <GridForm createGrid={this.createGrid} />
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