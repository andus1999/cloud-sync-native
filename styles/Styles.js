import {
  StyleSheet,
} from 'react-native'

import Colors from './Colors';

const borderRadius = 10;
const borderWidth = 4;

const Styles = StyleSheet.create({
  card: {
    borderRadius,
    elevation: 1,
    margin: 5,
    padding: 15,
  },

  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    margin: 20,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.black,
  },

  subtitle: {
    margin: 15,
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
  },

  sectionTitle: {
    marginLeft: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.black,
  },

  text: {
    color: Colors.gray,
    fontSize: 16,
  },

  input: {
    fontSize: 16,
    margin: 10,
    borderColor: Colors.primaryLight,
    borderWidth: 4,
    borderRadius,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  button: {
    backgroundColor: Colors.primary,
    borderRadius,
    margin: 10,
  },
  buttonOutlined: {
    borderColor: Colors.primaryLight,
    borderRadius,
    borderWidth,
    margin: 10,
  },

  progress: {
    margin: 10,
  },

  buttonText: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },

  buttonTextOutlined: {
    color: Colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 6,
  },

  iconButton: {
    margin: 5,
    alignItems: 'center',
  },

  bottomNavContainer: {
    flexDirection: 'row',
    height: 90,
    flex: 1,
    borderTopColor: Colors.primary,
    borderTopWidth: 1,
  },
});

export default Styles;