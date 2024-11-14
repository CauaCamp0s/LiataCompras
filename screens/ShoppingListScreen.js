import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import AddItemForm from '../components/AddItemForm';
import ItemList from '../components/ItemList';
import EditItemDialog from '../components/EditItemDialog';
import { styles } from '../styles/styles';

export default function ShoppingListScreen() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: '' });
  const [editItem, setEditItem] = useState(null);
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const addItem = () => {
    if (newItem.name && newItem.quantity) {
      setItems([...items, { id: Date.now().toString(), ...newItem }]);
      setNewItem({ name: '', quantity: '' });
    }
  };

  const editItemInList = () => {
    setItems(items.map(item => (item.id === editItem.id ? editItem : item)));
    setEditItem(null);
    setIsDialogVisible(false);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const openEditDialog = (item) => {
    setEditItem(item);
    setIsDialogVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <AddItemForm newItem={newItem} setNewItem={setNewItem} addItem={addItem} />
      <ItemList items={items} openEditDialog={openEditDialog} deleteItem={deleteItem} />
      <EditItemDialog
        isDialogVisible={isDialogVisible}
        setIsDialogVisible={setIsDialogVisible}
        editItem={editItem}
        setEditItem={setEditItem}
        editItemInList={editItemInList}
      />
    </View>
  );
}
