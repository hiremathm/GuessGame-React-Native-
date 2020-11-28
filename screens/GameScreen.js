import React, {useState, useRef, useEffect} from 'react'
import {View, Text, StyleSheet, Button, Alert, TouchableOpacity} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import NumberContainer  from '../components/NumberContainer'
import Card from './Card'
import Colors from '../defaultConstants/colors'
import MainButton from '../components/MainButton'

const generateRandomNumber = (min, max, exclude) => {
	min = Math.ceil(min)
	max = Math.floor(max)

	const randomNumber = Math.floor(Math.random() * (max - min)) + min

	if (randomNumber == exclude) {
		return generateRandomNumber(min, max, exclude)
	}else{
		return randomNumber
	}
}


const GameScreen = props => {
	const [currentGuess, setCurrentGuess] = useState(generateRandomNumber(1, 100, props.choice))
	const [rounds, setRounds] = useState(0)

	const currentLow = useRef(1)
	const currentHigh = useRef(100)

	const {choice, setGameOverHandler} = props;

	useEffect(() => {
		if(currentGuess === choice){
			setGameOverHandler(rounds)	
		}
	},[currentGuess, choice, setGameOverHandler])

	const nextGuessHandler = direction => {

		console.log("direction", direction)

		if((direction === 'lower' && currentGuess < props.choice) || (direction === 'greater' && currentGuess > props.choice)){
			Alert.alert('Don\'t lie', 'You know that this is wrong...',[{text: 'Sorry', style: 'cancel'}])
			return;
		}

		if(direction === 'lower'){
			currentHigh.current = currentGuess
		}else{
			currentLow.current = currentGuess
		}

		const nextNumber = generateRandomNumber(currentLow.current, currentHigh.current, currentGuess)
		
		setCurrentGuess(nextNumber)
		setRounds(currentRounds => currentRounds + 1)
	}

	return (
		<View style = {styles.screen}>
			<Text style = {styles.guessText}>
				Opponent's guess
			</Text>
			<NumberContainer selectedNumber = {currentGuess}/>
			<Card style = {styles.buttonContainer}>
				<MainButton onPress = {nextGuessHandler.bind(this, 'lower')} style = {{width: 60}}>
					<Ionicons name="ios-remove-circle-outline" size={40} color="black" />
				</MainButton>
				
				<MainButton onPress = {nextGuessHandler.bind(this, 'greater')} style = {{width: 60}}>
					<Ionicons name="ios-add-circle-outline" size={40} color="black" />
				</MainButton>
			</Card>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%'
	},
	guessText: {
		fontFamily: 'nunito-bold',
		fontSize: 20
	},
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
	  fontSize: 16

  }
})

export default GameScreen;