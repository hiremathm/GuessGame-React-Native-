import React, {useState, useRef, useEffect} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'

import NumberContainer  from '../components/NumberContainer'
import Card from './Card'

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
			<Text>
				Opponent's guess
			</Text>
			<NumberContainer selectedNumber = {currentGuess}/>
			<Card style = {styles.buttonContainer}>
				<Button title = "LOWER" onPress = {nextGuessHandler.bind(this, 'lower')} />
				<Button title = "GREATER" onPress = {nextGuessHandler.bind(this, 'greater')} />
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
	}
})

export default GameScreen;