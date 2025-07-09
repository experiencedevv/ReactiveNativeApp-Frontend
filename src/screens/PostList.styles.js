import { Dimensions, StyleSheet } from 'react-native';

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
  banner: {
    width: width,
    height: width / 3, // altura proporcional para 1440x480
  },
  content: {
    width: '90%',
    maxWidth: 800,
    marginTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});
