import React from 'react';
import { TextInput, Button } from 'react-native';
import { styles } from '../styles/styles';

const AddItemForm = ({ newItem, setNewItem, addItem }) => {
  return (
    <>
      <TextInput
        placeholder="Nome do item"
        style={styles.input}
        value={newItem.name}
        onChangeText={(text) => setNewItem({ ...newItem, name: text })}
      />
      <TextInput
        placeholder="Quantidade"
        style={styles.input}
        value={newItem.quantity}
        keyboardType="numeric"
        onChangeText={(text) => setNewItem({ ...newItem, quantity: text })}
      />
      <Button title="Adicionar Item" onPress={addItem} color="#007AFF" />
    </>
  );
};

export default AddItemForm;
