/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import MovieList from './components/MovieList';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header textHeader={'API TMDB'} />
        <MovieList />
      </View>
    );
  }
}
