import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  content: {
    width: '90%',
    maxWidth: 800,
    marginTop: 32,
    backgroundColor: '#f6f6f6',
    padding: 24,
    borderRadius: 12,
  },
  voltar: {
    color: '#000',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#000',
  },
  input: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  textarea: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    height: 150,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#000',
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});
