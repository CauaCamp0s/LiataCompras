import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/styles';  // Supondo que você tenha um arquivo de estilos

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Apenas navega para a próxima tela (sem validação)
    navigation.navigate('ShoppingList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo para logar"
        value={username}
        onChangeText={setUsername}
      />
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
    </View>
  );
}
