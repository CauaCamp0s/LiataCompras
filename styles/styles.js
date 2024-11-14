import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#007AFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    color: '#007AFF',
    marginRight: 10,
    fontSize: 16,
    paddingVertical: 5,
  },
  deleteButton: {
    color: 'red',
    fontSize: 16,
    paddingVertical: 5,
  },
  addButton: {
    marginVertical: 20,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  loggedInUser: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: 'bold',
  },
});
