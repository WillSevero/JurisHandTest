import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal: 30
    },
    title: {
        color: theme.colors.txtconfig,
        fontSize: 40,
        marginTop: 100,
        fontFamily: theme.fonts.title700,
        lineHeight: 50
    },
    buttonContainer: {
        marginTop: 40
    }
});