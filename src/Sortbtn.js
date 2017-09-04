import React, { Component } from 'react';
import PropTypes from 'prop-types';
        class Sortbtn extends React.Component {
          render() {
            return(<div className="row">
              <div className="col-md-6 text-center">
              <button id="a" className="btn btn-primary" onClick={this.props.function}>Sort A-Z</button>
              </div>
              <div className="col-md-6 text-center">
              <button id="d" className="btn btn-primary" onClick={this.props.function}>Sort Z-A</button>
              </div>
              </div>)
          }
        }
      export default Sortbtn;