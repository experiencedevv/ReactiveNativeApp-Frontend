import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    paddingBottom: 40,
    marginTop: 32,
  },
  card: {
    width: '90%',
    maxWidth: 600,
    backgroundColor: '#f6f6f6',
    padding: 24,
    borderRadius: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
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
  button: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
  },
});
