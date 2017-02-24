'use strict';

import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/App.css';


// Components
import GridForm from '../components/GridForm';
import MovementForm from '../components/MovementForm';
import Movements from '../components/Movements';
import Gridbox from '../components/Gridbox';

class Turtle extends Component {
  constructor(props){
    super(props);
    this.state = {
      gridSize: 5,
      gridArray: [],
      XPosition: 0,
      YPosition: 0,
      movements: []
    }
  }

  componentDidMount() {
    this.constructGrid(this.state.gridSize);
  }
  
  createGrid = value => {
    this.constructGrid(value);
  }

  constructGrid = (size) => {
    const grid = [];
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
    this.setState({
      gridArray: grid,
      gridSize: size
    });
  }

  setMovements = movements => {
    console.log('movements', movements);
    movements.forEach((move, index) => {
      switch(move){
        case 'r': 
        case 'l': 
          setTimeout(() => {
          this.turnTurtle(move);
        }, 0);
          break;

        default: 
          setTimeout(() => {
            this.moveTurtle();
          }, 0);

      }
    });
  }

  turnTurtle = move => {
    let grid = this.state.gridArray;
    let direction = grid[this.state.XPosition][this.state.YPosition].turtle[1];
    switch(direction){
      case 'north': 
        (move === 'r') 
        ?
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'east'
        :
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'west';
        this.setState({
          gridArray: grid
        })

        break;

      case 'east': 
        (move === 'r') 
        ?
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'south'
        :
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'north';
        this.setState({
          gridArray: grid
        })
        break;

      case 'south':
        (move === 'r') 
        ?
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'west'
        :
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'east';
        this.setState({
          gridArray: grid
        })
        break;

      default: 
        (move === 'r') 
        ?
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'north'
        :
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'south';
        this.setState({
          gridArray: grid
        })

    }
  }

  moveTurtle(){
    let grid = this.state.gridArray;
    let row = this.state.XPosition;
    let col = this.state.YPosition;
    let direction = grid[row][col].turtle[1];
    switch(direction){
      case 'north':
        if(row != (this.state.gridSize - 1) && !grid[row+1][col].obstacle){
          grid[row][col].turtle = "false";
          row++;
          grid[row][col].turtle = ["true", "north"];
        }

        this.setState({
          gridArray: grid,
          XPosition: row,
          YPosition: col
        });

        break;

      case 'east':
        if(col != (this.state.gridSize - 1) && !grid[row][col + 1].obstacle){
          grid[row][col].turtle[0] = "false";
          col++;
          grid[row][col].turtle = ["true", "east"];
        }

        this.setState({
          gridArray: grid,
          XPosition: row,
          YPosition: col
        });
        break;

      case 'south':
        if(row != 0 && !grid[row-1][col].obstacle){
          grid[row][col].turtle[0] = "false";
          row--;
          grid[row][col].turtle = ["true", "south"];
        }

        this.setState({
          gridArray: grid,
          XPosition: row,
          YPosition: col
        });
        break;

      default :
        if(col != 0 && !grid[row][col-1].obstacle){
          grid[row][col].turtle[0] = "false";
          col--;
          grid[row][col].turtle = ["true", "west"];
        }

        this.setState({
          gridArray: grid,
          XPosition: row,
          YPosition: col
        });

    }
  }

  render() {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-md-5">
            <GridForm createGrid={this.createGrid} />
            <MovementForm setMovements={this.setMovements} />
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