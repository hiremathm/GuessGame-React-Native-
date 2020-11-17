import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const restartGameHandler = value => {
  	setGuessRounds(0)
  	setSelectedNumber(null)
  }

  const setStartGameHandler = value => {
  	setSelectedNumber(value)
  }

  const setGameOverHandler = value => {
  	setGuessRounds(value)
  }

  let content = <HomeScreen setStartGameHandler = {setStartGameHandler}/>;

  console.log("guess rounds", guessRounds)

  if(selectedNumber && guessRounds <= 0){
  	content = <GameScreen choice = {selectedNumber} setGameOverHandler = {setGameOverHandler} />
  }else if(guessRounds > 0){
  	content = <GameOverScreen guessRounds = {guessRounds} choice = {selectedNumber} restartGameHandler = {restartGameHandler}/>
  }

  return (
    <View style={styles.root}>
      <Header title = "Guess Game"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});