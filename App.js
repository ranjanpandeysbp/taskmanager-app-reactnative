import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import AddTask from './components/AddTask';
import TaskItem from './components/TaskItem';

export default function App() {

  const [showModal, setShowModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  function showModalHandler() {
    setShowModal(true);
  }
  function hideModalHandler() {
    setShowModal(false);
  }
  function addNewTask(newTask) {
    setTaskList((currentTaskList) =>
      [
        ...currentTaskList,
        { text: newTask, id: Math.random().toString() }
      ]
    );
    hideModalHandler();
  }

  function deleteTask(id) {
    setTaskList((currentTaskList) => {
      return currentTaskList.filter((task) => task.id !== id) //false condn item gets removed
    })
  }

  return (
    <View style={styles.mainContainer}>
      <Button title='Add New Task' color={'#5f1aca'} onPress={showModalHandler} />
      <AddTask addNewTask={addNewTask} visible={showModal} hideModal={hideModalHandler} />
      <View style={styles.taskListSection}>
        {taskList.length > 0 ? <Text style={styles.taskOverviewTitle}>Your Tasks!</Text> :
          <Text></Text>}
        <FlatList
          data={taskList}
          renderItem={({ item, index }) => {
            return <TaskItem item={item} index={index} onDeleteTask={deleteTask} />
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />
        {/*<ScrollView>
          {
            taskList.map((taskItem, index) => {
              return (
                <View style={styles.taskItemStyle} key={index}>
                  <Text style={styles.taskItemTextStyle}>{index + 1}: {taskItem}</Text>
                </View>
              )
            })
          }
        </ScrollView>*/}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 45,
    paddingHorizontal: 15,
    backgroundColor: "#f0ee95"
  },
  taskListSection: {
    flex: 6
  },
  taskOverviewTitle: {
    fontSize: 22,
    fontWeight: 'bold'
  }
});
