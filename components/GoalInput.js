import {View, Text, Button, TextInput, StyleSheet, Modal, Image } from 'react-native';
import { useState } from 'react';


export default GoalInput = (props) => {

    const [ enteredGoalText, setEnteredGoalText ] = useState('');

    const goalInputHandler = (text) => {
        setEnteredGoalText(text);  
    };

    const onAddGoalHandler = () => {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/goal.png')} />
                <TextInput style={styles.textInput} 
                    placeholder="Your course goal" 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={onAddGoalHandler} color='#5e0acc'/>
                    </View>
                    <View style={styles.button} >
                        <Button title='Cancel' onPress={props.onCancel} color='#f31282'/>
                    </View>
                </View>                
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,        
        justifyContent: 'center',
        alignItems: 'center',        
        padding: 16,        
        backgroundColor: '#311b6b'
      },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
        color: '#120438',
        width: '100%',
        marginRight: 8,
        padding: 16
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
})