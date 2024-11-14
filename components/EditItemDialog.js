import React from 'react';
import { TextInput } from 'react-native';
import { Dialog, Portal, Button as PaperButton } from 'react-native-paper';
import { styles } from '../styles/styles';

const EditItemDialog = ({ isDialogVisible, setIsDialogVisible, editItem, setEditItem, editItemInList }) => {
  return (
    <Portal>
      <Dialog visible={isDialogVisible} onDismiss={() => setIsDialogVisible(false)}>
        <Dialog.Title>Editar Item</Dialog.Title>
        <Dialog.Content>
          <TextInput
            placeholder="Nome do item"
            style={styles.input}
            value={editItem?.name}
            onChangeText={(text) => setEditItem({ ...editItem, name: text })}
          />
          <TextInput
            placeholder="Quantidade"
            style={styles.input}
            value={editItem?.quantity}
            keyboardType="numeric"
            onChangeText={(text) => setEditItem({ ...editItem, quantity: text })}
          />
        </Dialog.Content>
        <Dialog.Actions>
          <PaperButton onPress={editItemInList}>Salvar</PaperButton>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default EditItemDialog;
