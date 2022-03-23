import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right'
    },
    resultSmall: {
        color: 'rgba(255, 255, 255, 0.5)',
        textAlign: 'right',
        fontSize: 30
    },
    rows: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
    },

})