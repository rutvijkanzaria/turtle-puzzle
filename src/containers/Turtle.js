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
      gridSize: size,
      XPosition: 0,
      YPosition: 0,
      movements: []
    });
  }

  setMovements = movements => {
    const localState = this.state;
    movements.forEach((move, index) => {
      switch(move){
        case 'r': 
        case 'l': 
          localState.grid = this.turnTurtle(move, localState);
          localState.movements.push({
            action: move,
            isExecuted: true
          });
          break;

        default: 
          let someVar =  this.moveTurtle(localState);
          localState.XPosition = someVar.XPosition;
          localState.YPosition = someVar.YPosition;
          localState.gridArray = someVar.gridArray;
      }
    });
    this.setState(localState);
  }

  turnTurtle = (move, localState) => {
    let grid = localState.gridArray;
    let direction = grid[this.state.XPosition][this.state.YPosition].turtle[1];
    switch(direction){
      case 'north': 
        (move === 'r') 
        ?
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'east'
        :
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'west';
        

        break;

      case 'east': 
        (move === 'r') 
        ?
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'south'
        :
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'north';
        break;

      case 'south':
        (move === 'r') 
        ?
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'west'
        :
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'east';
        break;

      default: 
        (move === 'r') 
        ?
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'north'
        :
          grid[this.state.XPosition][this.state.YPosition].turtle[1] = 'south';
    }

    return grid;
  }

  moveTurtle = localState =>{
    let grid = localState.gridArray;
    let row = localState.XPosition;
    let col = localState.YPosition;
    let movements = localState.movements;
    let direction = grid[row][col].turtle[1];
    switch(direction){
      case 'north':
        if(row != (localState.gridSize - 1) && !grid[row+1][col].obstacle){
          grid[row][col].turtle = "false";
          row++;
          grid[row][col].turtle = ["true", "north"];
          movements.push({
            action: 'f',
            isExecuted: true
          });
        } else {
          movements.push({
            action: 'f',
            isExecuted: false
          });
        }

        return({
          gridArray: grid,
          XPosition: row,
          YPosition: col,
          movements
        });

        break;

      case 'east':
        if(col != (localState.gridSize - 1) && !grid[row][col + 1].obstacle){
          grid[row][col].turtle[0] = "false";
          col++;
          grid[row][col].turtle = ["true", "east"];
          movements.push({
            action: 'f',
            isExecuted: true
          });
        } else {
          movements.push({
            action: 'f',
            isExecuted: false
          });
        }

        return({
          gridArray: grid,
          XPosition: row,
          YPosition: col,
          movements
        });
        break;

      case 'south':
        if(row != 0 && !grid[row-1][col].obstacle){
          grid[row][col].turtle[0] = "false";
          row--;
          grid[row][col].turtle = ["true", "south"];
          movements.push({
            action: 'f',
            isExecuted: true
          });
        } else {
          movements.push({
            action: 'f',
            isExecuted: false
          });
        }

        return({
          gridArray: grid,
          XPosition: row,
          YPosition: col,
          movements
        });
        break;

      default :
        if(col != 0 && !grid[row][col-1].obstacle){
          grid[row][col].turtle[0] = "false";
          col--;
          grid[row][col].turtle = ["true", "west"];
          movements.push({
            action: 'f',
            isExecuted: true
          });
        } else {
          movements.push({
            action: 'f',
            isExecuted: false
          });
        }

        return({
          gridArray: grid,
          XPosition: row,
          YPosition: col,
          movements
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
            {
              (this.state.movements.length > 0) 
              ? 
                <Movements movements={this.state.movements}/>
              : 
                <p></p>}
          </div>
          <div className="col-md-7">
            <Gridbox grid={this.state.gridArray} />
            <img src="./images/compass.svg" className="obstacle mb-3" alt="Turtle"/>
            {
              (this.state.movements.length > 0) 
              ?
                <h5 className="text-center">
                  Final Position: 
                   {' ' + (this.state.YPosition + 1)},
                   {' ' + (this.state.XPosition + 1)} 
                   {' ' + this.state.gridArray[this.state.XPosition][this.state.YPosition].turtle[1]}
                </h5>
              :
              <p></p>
            }
          </div>
        </div>
      </div>
    );
  }
};

export default Turtle;