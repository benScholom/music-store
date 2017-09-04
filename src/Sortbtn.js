import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * @description  buttons that sort in asc or desc order
 */
        class Sortbtn extends React.Component {
          /**
           * @description function passed as property determines when eithe rof these buttons are clicked and sorts accordingly
           * @return {string} string representation of html
           */
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