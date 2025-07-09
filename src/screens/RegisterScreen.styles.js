import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  logo: {
    width: 160,
    height: 40,
    marginBottom: 40,
  },
  card: {
    width: width * 0.9,
    maxWidth: 400,
    backgroundColor: '#f6f6f6',
    borderRadius: 12,
    padding: 24,
    alignItems: 'stretch',
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 24,
    color: '#000',
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#000',
  },
  input: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 16,
    fontSize: 16,
  },
  pickerWrapper: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    marginBottom: 16,
  },
  picker: {
    height: 44,
    width: '100%',
    color: '#000',
  },
  secondaryButton: {
    alignSelf: 'center',
    borderColor: '#000',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 20,
  },
  secondaryButtonText: {
    color: '#000',
    fontWeight: '600',
  },
  footer: {
    marginTop: 40,
    fontSize: 12,
    color: '#888',
  },
});
