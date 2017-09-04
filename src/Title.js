import React, { Component } from 'react';
import PropTypes from 'prop-types';
/** 
 * @description creates search title base don inputted artist's name
 */
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
    	 * @description the name of the artist
    	 * @property {PropTypes.string}
    	 */
        artist: PropTypes.string
    }
export default Title;