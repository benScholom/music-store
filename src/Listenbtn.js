import React, { Component } from 'react';
import PropTypes from 'prop-types';

        class Listenbtn extends React.Component {
        	/**
        	 * @description render function that creates button allowing user to listen to song
        	 * @return {string} string representation of html 
        	 */
        	render() {
        		return(
        		<a href={this.props.preview} className="btn btn-primary">Listen Now!</a>);
        	}
        }

        Listenbtn.PropTypes = {
        	/**
        	 * @property {PropTypes.string} preview - the url to the 30 second preview for the song
        	 */
        preview: PropTypes.string
    }
        export default Listenbtn;