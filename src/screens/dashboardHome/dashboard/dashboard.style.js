import {StyleSheet} from 'react-native';
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical:45,
    paddingHorizontal:12
      // padding: 20,
  },
  card: {
    backgroundColor: '#6200ea',
    width: '100%',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
    elevation: 5,
    marginTop:20
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emailCount: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ddd',
  },
  button: {
    backgroundColor: '#6200ea',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
    elevation: 2,
  },
  logoutButton: {
    backgroundColor: '#d32f2f',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default styles;
