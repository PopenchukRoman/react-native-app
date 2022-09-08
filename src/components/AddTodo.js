import React, {useState} from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { MyButton } from "./UI/Buttons/MyButton";

export const AddTodo = ({onSubmit}) => {
     const [ value, setValue]= useState('') 


    const pressHandrer = () => {
      if (value.trim()){
        onSubmit(value)
        setValue('')
      }else{
        Alert.alert('Ввведите название дела')
      }
      
    }

    return (
        <View style = {styles.block}>
          <TextInput 
          style = {styles.input}
          onChangeText={setValue}
          value={value}
          placeholder="Введите название дела..."
          autoCorrect = {false}
          autoCapitalize = 'none'
          />
        <MyButton title ='Добавить' onPress={pressHandrer} />
        </View>
    )

}

const styles = StyleSheet.create ({
block: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 15
  
},
input: {
  width: '70%',
  padding: 5,
  borderStyle: 'solid',
  borderBottomWidth: 2,
  borderBottomColor: '#3949ab'
}



})
