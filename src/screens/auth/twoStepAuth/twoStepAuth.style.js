import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f4f4f4'},
  header: {padding: 20, backgroundColor: 'black', alignItems: 'center'},
  title: {fontSize: 22, fontWeight: 'bold', color: '#fff', marginBottom: 5},
  subtitle: {fontSize: 14, color: '#cce4ff', textAlign: 'center'},
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
    lineHeight: 22,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {color: '#fff', fontSize: 16, fontWeight: '600'},
  modalContainer: {flex: 1, backgroundColor: '#fff'},
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -15}, {translateY: -15}],
  },
  closeButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
    position: 'absolute',
    bottom: 5,
    width: '90%',
    alignSelf: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  closeButtonText: {color: '#fff', fontSize: 17, fontWeight: 'bold'},
});

export default styles;
