import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    iconWrapper: {
        width: 25,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 20,
        height: 20,
    },
    title: {
        flex: 1,
        color: theme.colors.txtconfig,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: theme.fonts.text400
    },
    disabledTitle: {
        flex: 1,
        color: theme.colors.button,
        fontSize: 15,
        textAlign: 'center',
        fontFamily: theme.fonts.text400
    }
});