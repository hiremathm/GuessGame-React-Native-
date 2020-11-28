import React,{ useState } from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import Colors from '../defaultConstants/colors'
const NumberContainer = (props) => {
	return (
		<View style = {styles.numberConainter}>
          <Text style = {styles.number}>{props.selectedNumber}</Text>
        </View>
	)
}

const styles = StyleSheet.create({
  numberConainter: {
    alignItems: 'center',
    justifyContent: 'center',
  	borderColor: Colors.accent,
  	borderWidth: 2, 
  	padding: 10,
  	borderRadius: 10,
  	marginVertical: 10,
    width: 60
  },
  number: {
  	fontSize: 22,
  	color: Colors.accent
  }
})
export default NumberContainer;