import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AddTodo from "./src/components/AddTodo";
import TodoItem from "./src/components/TodoItem";
import type { Todo } from "./src/types/todo";

const STORAGE_KEY = "week4_todos";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (data) {
        setTodos(JSON.parse(data));
      }
    };

    loadTodos();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);


  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text, done: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Week 4 Todo</Text>
      <AddTodo onAdd={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} onToggle={toggleTodo} />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20, fontWeight: "bold", padding: 10,
  },
  empty: {
    padding: 10, opacity: 1.0,
  },
});
