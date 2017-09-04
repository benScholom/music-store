import React, { Component } from 'react';
import PropTypes from 'prop-types';
        class Listenbtn extends React.Component {
        	render() {
        		return(
        		<a href={this.props.preview} className="btn btn-primary">Listen Now!</a>);
        	}
        }
        Listenbtn.PropTypes = {
        preview: PropTypes.string
    }
        export default Listenbtn;