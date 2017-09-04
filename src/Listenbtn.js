import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * @description Button that leads to new page with 30 second song preview when clicked
 */
        class Listenbtn extends React.Component {
        	/**
        	 * @description render function that creates button allowing user to listen to song
        	 * @function
        	 * @return {string} string representation of html 
        	 */
        	render() {
        		return(
        		<a href={this.props.preview} className="btn btn-primary">Listen Now!</a>);
        	}
        }
        /**
         * @description PropType for Listenbtn
         * @type {Object}
         */
        Listenbtn.PropTypes = {
        	/**
        	 * @property {PropTypes.string} the url to the 30 second preview for the song
        	 */
        preview: PropTypes.string
    }
        export default Listenbtn;