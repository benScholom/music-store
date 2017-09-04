import React, { Component } from 'react';
        class Title extends React.Component {
          render() {
            return(<h2 className="text-center">Showing songs by: {this.props.artist}</h2>);
          }
        }
export default Title;