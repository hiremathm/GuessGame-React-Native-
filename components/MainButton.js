import React from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'

import Colors from '../defaultConstants/colors'

const MainButton = (props) => {

	return(
		<TouchableOpacity activeOpacity = {0.5 } onPress = {props.onPress}>
			<View style = {{...styles.button, ...props.style}}><Text style = {styles.textStyle}>{props.children}</Text></View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		width: 100,
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderColor: '#eee',
	    backgroundColor:Colors.primary,
	    borderRadius: 10,
	    justifyContent: 'center',
	    borderWidth: 1,
	    alignItems: 'center'
	},
	textStyle:{
      color:'#fff',
      textAlign:'center',
	  fontFamily: 'nunito-bold',
	  fontSize: 16,
    }
})

export default MainButton;