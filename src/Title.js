import React, { Component } from 'react';
import PropTypes from 'prop-types';
/** creates search title base don inputted artist's name*/
        class Title extends React.Component {
          render() {
            return(<h2 className="text-center">Showing songs by: {this.props.artist}</h2>);
          }
        }
    Title.PropTypes = {
        artist: PropTypes.string
    }
export default Title;