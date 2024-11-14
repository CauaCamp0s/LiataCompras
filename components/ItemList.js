import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../styles/styles';

const ItemList = ({ items, openEditDialog, deleteItem }) => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.itemText}>Qtd: {item.quantity}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => openEditDialog(item)}>
              <Text style={styles.editButton}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteItem(item.id)}>
              <Text style={styles.deleteButton}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default ItemList;
