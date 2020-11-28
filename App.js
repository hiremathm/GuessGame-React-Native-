import { StatusBar } from 'expo-status-bar';
import React, {useState}from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'


const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'nunito-light': require('./assets/fonts/Nunito-Light.ttf')
})

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [fontsloaded, setFontsLoaded] = useState(false);

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

  // return (
  //   <View style={styles.root}>
  //     <Header title = "Guess Game"/>
  //     {content}
  //   </View>
  // );

  if(fontsloaded){
    return (
    <SafeAreaView style={styles.root}>
      <Header title = "Guess a Number"/>
      {content}
    </SafeAreaView>
    );
  }else{
    return (
    <AppLoading 
      startAsync = {getFonts}
      onFinish = {() => setFontsLoaded(true)}
    />
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});