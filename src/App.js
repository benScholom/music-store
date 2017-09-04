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

/** 
 * @description App component that renders list of songs and contains search form for user to search an artist
 */
class App extends Component {
  /**
   * @description creating states to determine which direction songs will sort  and what songs will appear, as well as the search term used
   * @constructor
  */
              constructor(props){
                super(props);
                /**
                 * [state description]
                 * @type {Object}
                 */
                this.state = {
                  asort: true,
                  data: this.props.songlist,
                  term:"",
                  artist: this.props.songlist[0].artistName
                }

                this.sort = this.sort.bind(this);
                this.submit = this.submit.bind(this);
                this.searchterm = this.searchterm.bind(this);
              }
/**
 * @description a function that determines how to sort the songs when rendered. The render method below will sort the songs asc or desc accordingly
 * @function
 * @param {requestCallBack} event - the process of clicking a button 
 */
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
 * @function
 * @param {string} word - the word entered into the text field of the form component
 */
              searchterm(word) {
                this.setState({
                  term:word
                }, function(){console.log(this.state.term)});
              }

/**
 * @description submit function which occurs when the form is submitted. Takes the search term from the state and makes a GET request to itumes API using ajax. Returns a json that rendered on the screen.
 * @function
 * @param {requestCallBack} click = the clicking of the submit button on the form "Sform"
 */
              submit(event) {
                event.preventDefault();
                /** 
                 * @descriptionsearch variable takes search input from term state
                 * @type {String}
                 */
                var search = this.state.term;
                /** 
                 * @description url for itunes song library - "search" variable inserted for use in GET request
                 * @type {String}
                 */
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
             * @type {object[]}
             */
               var sortlist =  this.state.data;
               /** 
                * @description if statement performs sort method on sortlist array in order based on state asort value
                * @param  {Object[]}
                * @return {Object[]}
                */
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
              * @function
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
    * @property {PropTypes.arrayOf(PropTypes.object)} songlist - The array of song instances containing all releavnt fields of information
    */
  songlist: PropTypes.arrayOf(PropTypes.object)
 
}

export default App;
