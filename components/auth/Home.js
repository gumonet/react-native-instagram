import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text> Home - component </Text>
        <Button title="Autor"
        onPress={()=>{ navigation.navigate('Autor')}}
       />
       <Button title="Publicación"
        onPress={()=>{ navigation.navigate('Publicacion')}}
       />
       <Button title="Comentarios"
        onPress={()=>{ navigation.navigate('Comentarios')}}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#2c3e50',
  }
});
