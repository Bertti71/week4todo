import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

type Props = {
  onAdd: (text: string) => void;
};

export default function AddTodo({ onAdd }: Props) {
  const [text, setText] = useState<string>("");

  const handleAdd = () => {
    const value = text.trim();
    if (!value) return;

    onAdd(value);
    setText("");
  };

  return (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        placeholder="Add task..."
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAdd}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row", padding: 10, gap: 10,
  },
  input: {
    flex: 1, borderWidth: 1, borderRadius: 5, paddingHorizontal: 8,
  },
});
