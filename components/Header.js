import React from 'react'
import {View, Text, StyleSheet, Platform} from 'react-native'
import Colors from '../defaultConstants/colors'

const Header = (props) => {
	return (
		<View style = {styles.header}>
			<Text style = {styles.headerTitle}>
				{props.title}
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 100,
		backgroundColor: Platform.OS == 'android' ? Colors.primary : Colors.accent,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: Platform.OS === 'ios' ? 'transparent' : 'white',
		borderBottomWidth: 5
	},
	headerTitle: {
		color: '#fff',
		paddingTop: 20,
		fontSize: 25,
		fontFamily: 'nunito-bold'
	}
})

export default Header;