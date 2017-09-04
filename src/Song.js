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
  /**
   * @description render function that returns string representation of HTML and passes preview property to Listenbtn component
   * @return {String}
   */
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
              /**
               * @property {PropTypes.string} song - the song's name
               */
                  title: PropTypes.string,
                /**
                 * @property {PropTypes.string} url - the url of the song's cover image
                 */
                  url: PropTypes.string,
                  /**
                   * @property {PropTypes.string} artist - the artist's name
                   */
                  artists: PropTypes.string,
                  /**
                   * @property {PropTypes.string} url - the url link to the 30 second song preview
                   */
                  preview: PropTypes.string,
                  /**
                   * @property {PropTypes.number} price - the price of the song
                   */
                  price: PropTypes.number
}
        export default Song;