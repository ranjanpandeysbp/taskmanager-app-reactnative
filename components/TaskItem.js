import { StyleSheet, View, Text, Pressable } from "react-native";

function TaskItem(props) {
    return (
        <View style={styles.taskItemStyle}>
            <Pressable android_ripple={{ color: '#000000' }} onPress={props.onDeleteTask.bind(this, props.item.id)}>
                <Text style={styles.taskItemTextStyle}>{props.index + 1}: {props.item.text}</Text>
                <Text style={styles.taskItemTextStyle}>{props.item.id}</Text>
            </Pressable>
        </View>
    )
}

export default TaskItem;

const styles = StyleSheet.create({
    taskItemStyle: {
        margin: 6,
        borderRadius: 10,
        backgroundColor: '#5f1aca'
    },
    taskItemTextStyle: {
        padding: 10,
        color: "#ffffff"
    }
})