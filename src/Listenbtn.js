import React, { Component } from 'react';
        class Listenbtn extends React.Component {
        	render() {
        		return(
        		<a href={this.props.preview} className="btn btn-primary">Listen Now!</a>);
        	}
        }
        export default Listenbtn;