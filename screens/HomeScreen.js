import React,{ useState, useEffect } from 'react'
import {View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView} from 'react-native'

import Card from './Card'
import colors from '../defaultConstants/colors'
import NumberContainer from '../components/NumberContainer'
import MainButton from '../components/MainButton'

const HomeScreen = (props) => {

  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber , setSelectedNumber] = useState()
  const [buttonWidth, setButtonWidth] = useState((Dimensions.get('window').width / 5))
  
  const numberInputHandler = (value) => {
    setEnteredValue(value.replace(/[^0-9]/g,''))
  }

  const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const confirmInput = () => {
    const choosenNumber = parseInt(enteredValue)
    if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99){
      Alert.alert('Invalid number', 'Number has to be a number between 1 and 99.', [{text: 'understood', style: 'destructive', onPress: resetInputHandler}])
      return;
    }

    setConfirmed(true)
    setSelectedNumber(parseInt(enteredValue))
    setEnteredValue('')
    Keyboard.dismiss()
  }


  let confirmedOutput;

  if(confirmed){
    confirmedOutput = (
      <Card style = {styles.summaryContainer}>
        <Text>You Entered Number</Text> 
        <NumberContainer selectedNumber = {selectedNumber}/>
        <MainButton onPress = {() => props.setStartGameHandler(selectedNumber)}>Start Game</MainButton>
      </Card>
    )
  }

  useEffect(() => {
    const updateLayout = () => {
      let width = Dimensions.get('window').width
      console.log("width", width)
      width = ( width > 750 ? (width / 11) : (width / 6))
      console.log("setwidth", width)
       
      setButtonWidth(width)
    }

    Dimensions.addEventListener('change', updateLayout)

    return () => {
      Dimensions.removeEventListener('change', updateLayout)
    }
  })

	return (
    <ScrollView>
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset = {100}>
        <TouchableWithoutFeedback onPress = {() => {
          Keyboard.dismiss()
        }}>
      		<View style = {styles.screen}>
      			<Text style = {styles.title}>Start a New Game!</Text>
      			<Card style = {styles.inputContainer}>
      				<Text styles = {styles.enterInput}>Enter a Number!</Text>
      				<TextInput style = {styles.input} blurOnSubmit autoCapitalize='none' autoCorrect = {false} keyboardType = 'number-pad' maxLength = {2} onChangeText = {numberInputHandler} value = {enteredValue}/>

      				<View style = {styles.buttonContainer}>
      					<View style = {{width: buttonWidth}}>
      						<Button  title = "Reset" onPress = {resetInputHandler} color = {colors.accent} />
      					</View>
      					<View style = {{width: buttonWidth}}>
      						<Button  title = "Confirm" onPress = {confirmInput} color = {colors.primary} />
      					</View>
      				</View>
      			</Card>
            <View>
              {confirmedOutput}
            </View>
      		</View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
	)
}

const styles = StyleSheet.create({
  enterInput: {fontFamily: 'nunito-regular'},
  screen: {
  	flex: 1,
  	padding: 10,
  	alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  // button: {
  //   // width: 100 
  //   width: Dimensions.get('window').width > 600 ? (Dimensions.get('window').width/8) : (Dimensions.get('window').width/5)
  // },
  inputContainer: {
  	width: 300,
  	maxWidth:'80%',
  	alignItems: 'center',
  },
  title: {
  	fontSize: 20,
  	marginVertical: 10,
    fontFamily: 'nunito-light'
  },
  input: {
    width: '20%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    textAlign: 'center'
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomeScreen;