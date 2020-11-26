import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

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
		height: 80,
		backgroundColor: '#f7287b',
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerTitle: {
		color: 'black',
		paddingTop: 20,
		fontSize: 25,
		fontFamily: 'nunito-bold'
	}
})

export default Header;