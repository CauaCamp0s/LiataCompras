import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import AddItemForm from './components/AddItemForm';
import ItemList from './components/ItemList';
import EditItemDialog from './components/EditItemDialog';
import { styles } from './styles/styles';

export default function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: '' });
  const [editItem, setEditItem] = useState(null);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); // Estado para a senha

  // Função para adicionar item na lista
  const addItem = () => {
    if (newItem.name && newItem.quantity) {
      setItems([...items, { id: Date.now().toString(), ...newItem }]);
      setNewItem({ name: '', quantity: '' });
    }
  };

  // Função para editar item na lista
  const editItemInList = () => {
    setItems(items.map(item => (item.id === editItem.id ? editItem : item)));
    setEditItem(null);
    setIsDialogVisible(false);
  };

  // Função para excluir item
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Função para abrir o dialog de edição
  const openEditDialog = (item) => {
    setEditItem(item);
    setIsDialogVisible(true);
  };

  // Função de login (sem validação, apenas redireciona)
  const handleLogin = () => {
    if (username && password) { // Apenas para garantir que os campos não estão vazios
      setIsLoggedIn(true);
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        {!isLoggedIn ? (
          // Tela de Login
          <View style={styles.loginContainer}>
            <Text style={styles.title}>Tela de Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Button mode="contained" onPress={handleLogin} style={styles.loginButton}>
              Login
            </Button>
          </View>
        ) : (
          // Tela de Lista de Compras
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
            {/* Exibição do nome do usuário no canto inferior direito */}
            <Text style={styles.loggedInUser}>Bem-vindo, {username}</Text>
          </View>
        )}
      </View>
    </PaperProvider>
  );
}
