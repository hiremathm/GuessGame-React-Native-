import React from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'

import Card from './Card'

const GameOver = props => {
	return (
		<Card style = {styles.summaryContainer}>
			<View style = {styles.gameoverContainer}>
				<Text>
					Game Over!
				</Text>

				<Text>
					Number of Rounds : {props.guessRounds}
				</Text>

				<Text>
					Number was : {props.choice}
				</Text>

			</View>
			<Button title = "Start Game Again!" onPress = {props.restartGameHandler}/>
		</Card>
	)
}

const styles = StyleSheet.create({
	gameoverContainer: {
		flex: 1, 
		alignItems: 'center',
		justifyContent: 'center'

	},
  	summaryContainer: {
    	width: "70%",
  		maxWidth:'80%',
  		alignItems: 'center',
  		justifyContent: 'center',
  		margin: 60,
  		height: "20%"
  	}

})

export default GameOver;