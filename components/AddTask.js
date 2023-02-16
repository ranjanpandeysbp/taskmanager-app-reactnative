import { StyleSheet, View, TextInput, Button, Alert, Modal, Image } from "react-native";
import { useState } from 'react';

function AddTask(props) {

    const [task, setTask] = useState("");

    function taskInputHandler(inputTask) {
        setTask(inputTask);
    }

    function addTask() {
        if (task) {
            props.addNewTask(task);
            setTask('');
        } else {
            Alert.alert("This field cannot be empty!");
        }
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.imageStyle} source={require('../assets/icon.png')} />
                <TextInput
                    value={task}
                    onChangeText={taskInputHandler}
                    style={styles.inputBox}
                    placeholder='Enter task details' />

                <View style={styles.buttonGroup}>
                    <View style={styles.buttonStyle}>
                        <Button title='Add Task' onPress={addTask} />
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button title='Cancel' onPress={props.hideModal} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default AddTask;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#f5ce42'
    },
    inputBox: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#000',
        padding: 5,
        borderRadius: 15
    },
    buttonGroup: {
        flexDirection: 'row',
        marginTop: 15
    },
    buttonStyle: {
        width: '35%',
        marginHorizontal: 10
    },
    imageStyle: {
        width: 100,
        height: 100,
        margin: 20
    }
})