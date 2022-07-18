import React from "react";

import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

function App() {
  const [text, setText] = React.useState("");
  const [list, setList] = React.useState(["as", "asdd"]);

  const handleAddTask = () => {
    if (text.length > 0) {
      setList([...list, text]);

      setText("");
    } else {
      alert("Please enter a task");
    }
  };

  const deleteAll = () => {
    setList([]);
  };

  const handleDeleteTask = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  return (
    <SafeAreaView style={{ marginTop: 20 }}>
      <View style={style.container}>
        <Text style={style.h1}>To Do List</Text>
        <TextInput
          value={text}
          onChangeText={(value) => setText(value)}
          style={style.input}
          placeholder="Enter a task"
        />
        <Text>Press "Add" button to Add Task</Text>
        <TouchableOpacity onPress={handleAddTask} style={style.button}>
          <Text style={style.buttonText}>Add</Text>
        </TouchableOpacity>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "black",
            marginTop: 20,
            width: "100%",
          }}
        />

        <FlatList
          data={list}
          keyExtractor={(item) => item + Date.now() + Math.random()}
          renderItem={({ item, index }) => (
            <View style={style.list}>
              <Text style={style.task}>{item}</Text>
              <TouchableOpacity 
              onPress={() => handleDeleteTask(index)}
              
              style={style.deleteContainer}>
                <Text style={style.delete}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {list && list.length > 0 && (
          <TouchableOpacity onPress={deleteAll} style={style.buttonDeleteAll}>
            <Text style={style.buttonText}>Delete All</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

export default App;

const style = StyleSheet.create({
  h1: {
    fontSize: 30,
  },
  container: {
    margin: 20,
  },
  input: {
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    borderColor: "black",
  },

  button: {
    marginTop: 10,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  buttonDeleteAll: {
    marginTop: 30,
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },

  list: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 5,
    borderColor: "black",
    borderWidth: 2,
    alignContent: "center",
    alignItems: "center",
  },
  delete: {
    fontSize: 15,

    padding: 5,
    borderRadius: 8,
    color: "white",
  },

  deleteContainer: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 50,
  },
  task: {
    marginStart: 10,
    fontSize: 16,
  },
});
