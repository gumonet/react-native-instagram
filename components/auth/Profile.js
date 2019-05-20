import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text> Profile Component </Text>
        <Button title="Comentarios"
        onPress={ () => { navigation.navigate('Comentarios') } }
      />
       <Button title="Regresar"
        onPress={ () => { navigation.goBack() } }
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
