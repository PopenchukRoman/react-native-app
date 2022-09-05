import React, {useState} from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export const AddTodo = ({onSubmit}) => {
     const [ value, setValue]= useState(0) 


    const pressHandrer = () => {
      onSubmit('Test todo')
    }

    return (
        <View style = {styles.block}>
          <TextInput 
          style = {styles.input}
          onChangeText={setValue}
          value={value}
          placeholder="Введите название дела..."
          />
          <Button title ='Добавить' onPress={pressHandrer} />
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
