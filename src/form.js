import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sform extends React.Component {
	      constructor(props) {
	      	super(props);
	      	// this.state = {
	      	// 	term:""
	      	// };
	      	this.change = this.change.bind(this);
	      }

	      change(event) {
                const target = event.target;
                const value = target.value;
                this.props.search(value);
                //this.props.search(this.state.term)
                // this.setState({
                //   term: value
                // }, function callback() {this.props.search(this.state.term)});
                //console.log(this.state.term);
               
              }
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
Sform.propTypes = {
  change: PropTypes.func,
  value: PropTypes.string,
  submit: PropTypes.func
}
    export default Sform;

