import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/App.css';

const Turtle = React.createClass({
  render: function() {
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-md-5">

            <form>
              <div className="form-group">
                <label htmlFor="gridinput">Enter grid size</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="gridinput" placeholder="Enter grid size..." />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">GENERATE</button>
                  </span>
                </div>
              </div>
            </form>

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
          </div>
          <div className="col-md-7">
            <div className="grid-box">
              <div className="row grid-row">
                <div className="col grid-column"></div>
                <div className="col grid-column"></div>
                <div className="col grid-column"></div>
                <div className="col grid-column"></div>
                <div className="col grid-column">
                <img src="./images/obstacle.svg" className="obstacle" alt="Turtle"/></div>
              </div>
              <div className="row grid-row">
                <div className="col grid-column"></div>
                <div className="col grid-column"></div>
                <div className="col grid-column"></div>
                <div className="col grid-column">
                <img src="./images/obstacle.svg" className="obstacle" alt="Turtle"/></div>
                <div className="col grid-column"></div>
              </div>
              <div className="row grid-row">
                <div className="col grid-column">
                  <img src="./images/obstacle.svg" className="obstacle" alt="Turtle"/>
                </div>
                <div className="col grid-column"></div>
                <div className="col grid-column"></div>
                <div className="col grid-column"></div>
                <div className="col grid-column"></div>
              </div>
              <div className="row grid-row">
                <div className="col grid-column"></div>
                <div className="col grid-column"></div>
                <div className="col grid-column"></div>
                <div className="col grid-column"></div>
                <div className="col grid-column">
                  <img src="./images/obstacle.svg" className="obstacle" alt="Turtle"/>
                </div>
              </div>
              <div className="row grid-row">
                <div className="col grid-column">
                  <img src="./images/turtle.svg" className="turtle-img north" alt="Turtle"/>
                </div>
                <div className="col grid-column"></div>
                <div className="col grid-column"></div>
                <div className="col grid-column">
                  <img src="./images/obstacle.svg" className="obstacle" alt="Turtle"/>
                </div>
                <div className="col grid-column"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Turtle;