import React, { Component } from 'react';
import PropTypes from 'prop-types';

        class Title extends React.Component {
          render() {
            return(<h2 className="text-center">Showing songs by: {this.props.artist}</h2>);
          }
        }
/** 
 * @description test whether artist value recieved is a string
 * @type {Object}
 */
    Title.PropTypes = {
    	/**
    	 *  @property {PropTypes.string} artist - the name of the artist to display
    	 */
        artist: PropTypes.string
    }
export default Title;