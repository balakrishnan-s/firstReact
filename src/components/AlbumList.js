import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    console.log('componentWillMount in AlbumList');
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    console.log('renderAlbums renderAlbums renderAlbums renderAlbums');
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log('render render render render render render render render render render render');
    console.log(this.state);

    return (
      <ScrollView>
        {this.renderAlbums() }
      </ScrollView>
    );
  }
}


export default AlbumList;
