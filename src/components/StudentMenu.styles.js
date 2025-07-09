import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 60,
    height: 40,
  },
  links: {
    flexDirection: 'row',
    gap: 24,
  },
  link: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 8,
  },
  menuIcon: {
    fontSize: 28,
    color: '#fff',
    padding: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalMenu: {
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  modalItem: {
    paddingVertical: 12,
  },
  modalText: {
    fontSize: 18,
    color: '#000',
  },
});
