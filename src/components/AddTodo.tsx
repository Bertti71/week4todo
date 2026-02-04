import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";


type Props = {
  onAdd: (text: string) => void;
};


export default function AddTodo({ onAdd }: Props) {
  const [text, setText] = useState<string>("");

  const handleAdd = () => {
    const t = text.trim();
    if (t.length === 0) return; 
    onAdd(t);
    setText("");
  };


  return (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        placeholder="Write task"
        value={text}
        onChangeText={setText}
        onSubmitEditing={handleAdd}
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
}


const styles = StyleSheet.create({
  row: {flexDirection: "row", padding: 10, gap: 10, alignItems: "center",
  },
  input: {flex: 1, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 8, borderRadius: 5,
  },
});
