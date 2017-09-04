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

/** App component that renders list of songs and contains search form for user to search an artist*/
class App extends Component {
  /**
  *creating states to determine which direction songs ill sort and what songs will appear, as well as the search term used
  *@constructor
  */
              constructor(props){
                super(props);
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
              searchterm(word) {
                this.setState({
                  term:word
                }, function(){console.log(this.state.term)});
              }

              submit(event) {
                event.preventDefault();
                var search = this.state.term;
                console.log(search);
                var url = "https://itunes.apple.com/search?term=<"+search+">&limit=8&entity=song"
                //var url = 'https://raw.githubusercontent.com/odedre/jsonHost/master/books.json';
                $.ajax({
                  url: url,
                  dataType: 'json',
                  cache: false,
                  success: function(data) {
                    this.setState({
                        data: data.results,
                        artist: data.results[0].artistName
                        });
                    // console.log(data.results);
                    //console.log(data.books[search]);
                    // console.log(this.state.data);
                  }.bind(this),
                  error: function(error) {
                    alert(error);
                  }.bind(this)
                });
              }
          render() {
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
               var list = sortlist.map(function(songs) {
                return <Song key={songs.trackId} title={songs.trackName} artist={songs.artistName}
                           price={songs.trackPrice} url={songs.artworkUrl100} preview={songs.previewUrl}/>;
               })

               /**
                list = this.props.songlist.map(function(songs) { 
                  return <Song title={songs.trackName} artist={songs.artistName}
                           price={songs.trackPrice} url={songs.artworkUrl100} preview={songs.previewUrl}/>;
               });*/

              return (<div className="container">
                <Title artist={this.state.artist}/>
                <Sortbtn function={this.sort} />
                <Sform submit={this.submit} search={this.searchterm}/>
                <div className="row text-center">{list}</div>
                </div>);
          }
}
/** ensure that songlist property is an array of objects*/
App.propTypes = {
  songlist: PropTypes.arrayOf(PropTypes.object)
}

export default App;
