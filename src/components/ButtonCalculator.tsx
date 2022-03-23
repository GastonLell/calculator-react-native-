import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    text: string;
    color?: string;
    ancho?: boolean;
    action: ( numberText: string) => void
}

export const ButtonCalculator = ({ text, color = '#2D2D2D', ancho = false, action }: Props) => {

    return (
        <TouchableOpacity onPress={ () => action(text)}>
            <View style={{
                ...styles.button, backgroundColor: color, width: (ancho) ? 180 : 80
            }}>

                <Text style={{
                    ...styles.buttonText,
                    color: (color === '#9B9B9B' ? 'black' : 'white')
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 30,
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontWeight: '300'
    },
});