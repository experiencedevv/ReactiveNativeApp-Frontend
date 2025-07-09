import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  headerRow: {
    width: '90%',
    maxWidth: 800,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginTop: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cadastrarButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  cadastrarText: {
    color: '#000',
  },
  table: {
    width: '90%',
    maxWidth: 800,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    padding: 12,
  },
  tableHeaderCell: {
    flex: 2,
    fontWeight: 'bold',
  },
  tableHeaderCellAcoes: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  tableCell: {
    flex: 2,
    color: '#333',
  },
  acoes: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  acaoEditar: {
    color: '#007AFF',
    fontWeight: '600',
  },
  acaoExcluir: {
    color: '#FF3B30',
    fontWeight: '600',
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});

