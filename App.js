import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RutasNoAutenticadas from './components/visitors/RutasNoAutenticadas'
import RutasAutenticadas from './components/auth/RutasAutenticadas'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {'nombre':'instagram-clone'}
  }
  render() {
    return (
      <View style={styles.container}>
         <RutasAutenticadas/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
