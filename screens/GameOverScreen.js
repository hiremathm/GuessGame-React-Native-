import React from 'react'
import {View, Text, StyleSheet, Button, Alert, TouchableOpacity} from 'react-native'

import Card from './Card'
import Colors from '../defaultConstants/colors'
import MainButton from '../components/MainButton'

const GameOver = props => {
	return (
		<Card style = {styles.summaryContainer}>
			<View style = {styles.gameoverContainer}>
				<Text style = {styles.gameoverText}>
					Game Over!
				</Text>

				<Text style = {styles.numberOfRounds}>
					Number of Rounds : {props.guessRounds}
				</Text>

				<Text style = {styles.numberWas}>
					Number was : {props.choice}
				</Text>
				<View style = {styles.button}>
          <MainButton color = {Colors.primary} style = {styles.mainbutton} onPress = {props.restartGameHandler}>
            Start Game Again!
          </MainButton>
        </View>
			</View>
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
  		height: "30%"
  	},
  	gameoverText: {
  		fontFamily: 'nunito-bold',
  		fontSize: 30,
  		padding: 10
  	},
  	numberOfRounds: {
  		fontFamily: 'nunito-regular',
  		fontSize: 20,
  		padding: 10
  	},
  	numberWas: {
  		fontSize: 18,
  		fontFamily: 'nunito-bold'
  	},
  	button: {
  		padding: 20,
  	},
    mainbutton: {
      width: "100%"
    }


})

export default GameOver;