import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 260,
        height: 70,
        borderRadius: 8,
        borderWidth: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.button2,
        borderColor: theme.colors.button,
        marginLeft: 50,
        
    },
    title: {
        flex: 1,
        color: theme.colors.button,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: theme.fonts.text400
    }
});