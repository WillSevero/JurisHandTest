import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: 24,
    marginTop: 60,
  },
  greybox: {
    backgroundColor: theme.colors.background2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
    borderRadius: 8,
    flexDirection: 'column',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '98%',
    marginTop: 60,
    marginLeft: 30
  },
  jobs: {
    margin: 50,
    alignSelf: 'center'
  },
  buttonsign: {
    marginVertical: 24,
  },
  upgrade: {
    color: theme.colors.txtheader,
    fontSize: 25,
    textAlign: 'center',
    marginTop: 15
  },
  sign: {
    color: theme.colors.txtheader,
    fontSize: 20,
    textAlign: 'center',
  },
  footer: {
    color: theme.colors.footer,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    textAlign: 'center',
  },

})