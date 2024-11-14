import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: 30, // Adiciona margem superior para afastar o conteúdo
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center', // Centraliza o título
  },
  input: {
    borderWidth: 1,
    borderColor: '#007AFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#f9f9f9',
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  editButton: {
    color: '#007AFF',
    marginRight: 10,
  },
  deleteButton: {
    color: 'red',
  },
});
