import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';


const Item = ({ title }) => (
  <View style={{ flex: 4 }}>
    <Text style={styles.task}>{title}</Text>
  </View>
);

export default function App() {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );


  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const handleButtonPress = () => {
    setTasksList(tasksList => [...tasksList, task]);
  };

  const handleInput = (text) => {
    setTask({ id: Math.random().toString(), title: text });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={handleInput} style={styles.input} placeholder='Task...' />
        <Button
          onPress={handleButtonPress}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
      <FlatList
        data={tasksList}
        renderItem={({ item }) => (
          <Text style={styles.task}>{item.title}</Text>
        )}

        keyExtractor={(item, index) => item.id}
      />
      {/* <ScrollView style={{ flex: 4 }}>
        {
          tasksList.map((task, index) => (
            <Text style={styles.task} key={index} >{task}</Text>
          ))
        }
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  input: {
    color: '#000',
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 5,
    width: '60%'
  },
  task: {
    borderColor: '#cccccc',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  }
});
