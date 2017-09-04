import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @description class for search form, user enters artist's name and submits to start search
 */
class Sform extends React.Component {
	/**
	 * @description  constructor which bings change function to form - allowing user to input a name
	 * @constructor
	 */
	      constructor(props) {
	      	super(props);
	      	this.change = this.change.bind(this);
	      }
/**
 * @description takes value of input box and returns it back to parent as input through function in properties
 * @function
 * @param  {requestCallBack} - gets input from change in input box
 * @return {string}
 */
	      change(event) {
                const target = event.target;
                const value = target.value;
                this.props.search(value);
              }
/**
 * @description renders the form with submit button and input box
 * @return {String} string representation of HTML
 */
	render() {
		return(
                <div className="row text-center">
                <div className="col-xs-6 col-xs-offset-3">
                      <form onSubmit={this.props.submit}>
                          <div className="form-group">
                              <label htmlFor="searchFor">Search: </label>
                              <input name="searchFor" className="form-control" placeholder="search" onChange={this.change}/>
                        </div>
                              <input type="submit" className="btn btn-primary" value="Submit" />
                      </form>
                      </div>
                </div>)
            }
        }
        /**
         * @description submit function, and the value that is submitted/edited
         * @type {Object}
         */
Sform.propTypes = {
	/**
	 * @property {PropTypes.func} search is a function that is passed to Sform as a property, it takes a string and returns it to the App component for use
	 */ 
  search: PropTypes.func,
  /**
   * @property {PropTypes.func} submit is the function that initiates the search with the inputted keyword
   */
  submit: PropTypes.func
}
    export default Sform;

