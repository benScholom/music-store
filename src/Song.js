import React, { Component } from 'react';
import Listenbtn from './Listenbtn';
import PropTypes from 'prop-types';
class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: this.props.preview
    };
  }
          render() {
            return (
              <div className="col-lg-3 col-md-6 mb-4">
                      <div className="card">
                        <img className="card-img-top" src={this.props.url} alt="image"/>
                        <div className="card-body">
                          <h4 className="card-title">{this.props.title}</h4>
                          <p className="card-text">Now for: $<span>{this.props.price}</span></p>
                          <p className="card-text">{this.props.artist}</p>
                      </div>

                      <div className="card-footer">
                        <Listenbtn preview={this.state.preview} />
                      </div>

                    </div>
                    </div>
                    );

          } 
        }
            Song.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  artists: PropTypes.string,
  preview: PropTypes.string,
  price: PropTypes.number
}
        export default Song;