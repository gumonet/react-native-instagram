import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createStackNavigator, createAppContainer  } from 'react-navigation';

const SignIn = (props) => {
  //console.log(props);
  const { navigation } = props;

  return ( 
    
    <View style={{flex:1, justifyContent:"center"}}>
      <Text>Componente SignIn()</Text>
      <Button title="SignUP"
        onPress={()=>{ navigation.navigate('SignUp')}}
       />
    </View>
  );
} 
const SignUp = (props) => {
  const { navigation } = props; //Toma de props el objeto navigation y lo convierte en una costante
  return (
    <View style={{ flex:1, justifyContent:"center"}}>
      <Text>Componente SingUp() </Text>
      <Button title="SingIn"
        onPress={ () => { navigation.goBack() } }
      />
    </View>
  );
};

const RutasNoAutenticadas = createStackNavigator({
  SignIn: {
    screen: SignIn, 
    /*navigationOptions:{
      header:null,
      headerTitle:'titulo login'
    }*/
  },
  SignUp: {
    screen: SignUp  
  },
  
},{
  headerMode:'none'
  /*defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },*/
}
);

export default  createAppContainer(RutasNoAutenticadas);