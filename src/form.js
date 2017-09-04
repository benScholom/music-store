import React, { Component } from 'react';

class Sform extends React.Component {
	render() {
		return(
                <div className="row text-center">
                <div className="col-xs-6 col-xs-offset-3">
                      <form onSubmit={this.props.submit}>
                          <div className="form-group">
                              <label htmlFor="searchFor">Search: </label>
                              <input name="searchFor" className="form-control" placeholder="search" onChange={this.props.change} value={this.props.value}/>
                        </div>
                              <input type="submit" className="btn btn-primary" value="Submit" />
                      </form>
                      </div>
                </div>)
            }
        }
    export default Sform;