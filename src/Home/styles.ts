import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
  },
  scroll: {
    paddingBottom: 150
  },
  picture: {

    borderRadius: 10,
    margin: 24,
    padding: 5,
    borderColor: '#fff',
    borderWidth: 4,
  },
  camera: {
    width: Dimensions.get("screen").width - 66,
    height: 300
  },
  player: {
    backgroundColor: '#fff',
    width: '100%',
    height: 56,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 22,
    fontWeight: '900',
    color: '#000',
    textTransform: 'uppercase',
  },
  stiker: {
    backgroundColor: '#9370db',
  },
  retry: {
   flexDirection: 'row',
  }
});