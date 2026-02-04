import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import type { Todo } from "../types/todo";


type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
};


export default function TodoItem({ todo, onToggle }: Props) {
  return (
    <Pressable onPress={() => onToggle(todo.id)} style={styles.item}>
      <View style={styles.textWrap}>
        <Text style={[styles.text, todo.done ? styles.done : null]}>
          {todo.text}
        </Text>
      </View>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  item: {padding: 12, borderBottomWidth: 1,
  },
  textWrap: {flexDirection: "row", alignItems: "center",
  },
  text: {fontSize: 16,
  },
  done: {textDecorationLine: "line-through", opacity: 0.5,
  },
});
