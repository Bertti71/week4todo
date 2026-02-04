import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import type { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
};

export default function TodoItem({ todo, onToggle }: Props) {
  return (
    <Pressable style={styles.item} onPress={() => onToggle(todo.id)}>
      <Text
        style={[
          styles.text, todo.done ? styles.done : null 
        ]}
      >
        {todo.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12, borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
  },
  done: {
    textDecorationLine: "line-through",  opacity: 0.5,
  },
});
