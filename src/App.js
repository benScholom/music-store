import React, { Component } from 'react';
import './App.css';
import Song from './Song';
import Title from './Title';
import Sortbtn from './Sortbtn';
import Sform from './form';
import $ from 'jquery';
import './vendor/bootstrap/css/bootstrap.css';
import './css/heroic-features.css';
import PropTypes from 'prop-types';


class App extends Component {
              constructor(props){
                super(props);
                this.state = {
                  /**
                   * @description determines an asc sort if true and a desc sort if false
                   * @type {Boolean}
                   */
                  asort: true,
                  /**
                   * @description the songs selected form a search
                   * @type {object[]} an array of song objects
                   */
                  data: this.props.songlist,
                  /**
                   * @description The search term
                   * @type {String} will take string from search form
                   */
                  term:"",
                  /**
                   * @description artists's name
                   * @type {string} pulls the artists name form the first song of the search
                   */
                  artist: this.props.songlist[0].artistName
                }

                this.sort = this.sort.bind(this);
                this.submit = this.submit.bind(this);
                this.searchterm = this.searchterm.bind(this);
              }

              sort(event) {
                const target = event.target;
                const id = target.id;
                if (id == 'd'){
                this.setState({
                    asort: false
                });
              } else {
                this.setState({
                  asort: true
                });
              }
              }
/**
 * @description a function to change the value of the term state - the state which indicates what search term the ajax query will us in its GET request
 * @param {string} word - the word entered into the text field of the form component
 */
              searchterm(word) {
                this.setState({
                  term:word
                }, function(){console.log(this.state.term)});
              }

              submit(event) {
                event.preventDefault();
                var search = this.state.term;
                var url = "https://itunes.apple.com/search?term=<"+search+">&limit=8&entity=song"
                $.ajax({
                  url: url,
                  dataType: 'json',
                  cache: false,
                  success: function(data) {
                    this.setState({
                        data: data.results,
                        artist: data.results[0].artistName
                        });
                  }.bind(this),
                  error: function(error) {
                    alert(error);
                  }.bind(this)
                });
              }
          render() {
            /**
             * @description The sortlist array of objects takes the list of songs for sorting
             * @type {object[]} a list of song objects
             */
               var sortlist =  this.state.data;
               if (this.state.asort){
               sortlist.sort(function(a,b){
                  var textA = a.trackName.toLowerCase();
                  var textB = b.trackName.toLowerCase();
                  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
               });
             } else{
                  sortlist.sort(function(a,b){
                  var textA = a.trackName.toLowerCase();
                  var textB = b.trackName.toLowerCase();
                  return (textB < textA) ? -1 : (textB > textA) ? 1 : 0;
                  });
             }
             /** 
              * @description sortlist array is mapped out and each element is called a "song" - relevant song keys are then inputed into the Song component as properties
              * @param  {Object} songs - songs represent a an object with all the information for a song
              * @return {String} - HTML markup for component
              */
               var list = sortlist.map(function(songs) {
                return <Song key={songs.trackId} title={songs.trackName} artist={songs.artistName}
                           price={songs.trackPrice} url={songs.artworkUrl100} preview={songs.previewUrl}/>;
               })
              return (<div className="container">
                <Title artist={this.state.artist}/>
                <Sortbtn function={this.sort} />
                <Sform submit={this.submit} search={this.searchterm}/>
                <div className="row text-center">{list}</div>
                </div>);
          }
}
/** 
 * @description  proptypes for App component
 * @type {Object}
 */
App.propTypes = {
   /**
    * @property {PropTypes.object[]} songlist - The array of song instances containing all releavnt fields of information
    */
  songlist: PropTypes.arrayOf(PropTypes.object)
 
}

export default App;
