import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export const MyButton = (props) => { 
return (
  <View>
     <Button title = {props.title} onPress = {props.onPress}/>
  </View>
)
}

const styles = StyleSheet.create ({
button: {
}
})  