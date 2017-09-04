import React, { Component } from 'react';
import './App.css';
import Song from './Song';
import Title from './Title';
import Sortbtn from './Sortbtn';
import Sform from './form';
import $ from 'jquery';
import './vendor/bootstrap/css/bootstrap.css';
import './css/heroic-features.css';


class App extends Component {
              constructor(props){
                super(props);
                this.state = {
                  asort: true,
                  term:"",
                  data: this.props.songlist,
                  artist: this.props.songlist[0].artistName
                }
                this.sort = this.sort.bind(this);
                this.change = this.change.bind(this);
                this.submit = this.submit.bind(this);
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

              change(event) {
                const target = event.target;
                const value = target.value;
                this.setState({
                  term: value
                });

              }

              submit(event) {
                event.preventDefault();
                var search = this.state.term;
                var url = "https://itunes.apple.com/search?term=<"+search+">&limit=8&entity=song"
                console.log(url);
                $.ajax({
                  url: url,
                  dataType: 'json',
                  cache: false,
                  success: function(data) {
                    this.setState({
                      data: data.results,
                      artist: data.results[0].artistName
                    });
                    console.log(data.results);
                    console.log(this.state.data);
                  }.bind(this),
                  error: function(error) {
                    alert(error);
                  }.bind(this)
                });
              }
          render() {
               var sortlist =  this.state.data;
               console.log(sortlist);
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
                <Sform submit={this.submit} change={this.change} value={this.state.term}/>
                <div className="row text-center">{list}</div>
                </div>);
          }
}

export default App;
