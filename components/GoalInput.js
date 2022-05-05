import React, {useState} from 'react';
import {View, Button, StyleSheet, TextInput, Modal, Image} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
      <Image style={styles.imageStyle} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={{flexDirection: 'row', marginTop: 16}}>
          <View style={{width: 100, marginHorizontal: 8}}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc"/>
          </View>
          <View style={{width: 100, marginHorizontal: 8}}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:'#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius:6,
    backgroundColor:'#e4d0ff',
    color:'#120438',
    width: '100%',
    //marginRight: 8,
    padding: 16,
  },
  imageStyle: {
    width:100,
    height:100,
    margin:20,

  }
});
