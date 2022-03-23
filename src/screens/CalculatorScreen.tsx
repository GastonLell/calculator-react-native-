import React from 'react'
import { Text, View } from 'react-native';
import { ButtonCalculator } from '../components/ButtonCalculator';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../theme/appTheme';


export const CalculatorScreen = (): JSX.Element => {
    const {
        number,
        lastNumber,
        Operators,
        clear,
        positivoNegativo,
        calculate,
        setCuenta,
        changeLastNumber,
        btnOperator,
        deleteLastCharacter
    } = useCalculator();

    return (
        <View style={styles.calculatorContainer}>
            {
                (lastNumber !== '0') && <Text style={styles.resultSmall}>{lastNumber}</Text>
            }

            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit
            >{number}</Text>

            <View style={styles.rows}>
                <ButtonCalculator text="C" color="#9B9B9B" action={clear} />
                <ButtonCalculator text="+/-" color="#9B9B9B" action={positivoNegativo} />
                <ButtonCalculator text="del" color="#9B9B9B" action={deleteLastCharacter} />
                <ButtonCalculator text="÷" color="#FF9427" action={() => btnOperator(Operators.divide)} />
            </View>

            <View style={styles.rows}>
                <ButtonCalculator text="7" action={setCuenta} />
                <ButtonCalculator text="8" action={setCuenta} />
                <ButtonCalculator text="9" action={setCuenta} />
                <ButtonCalculator text="x" action={() => btnOperator(Operators.multiply)} color="#FF9427" />
            </View>

            <View style={styles.rows}>
                <ButtonCalculator text="4" action={setCuenta} />
                <ButtonCalculator text="5" action={setCuenta} />
                <ButtonCalculator text="6" action={setCuenta} />
                <ButtonCalculator text="-" color="#FF9427" action={() => btnOperator(Operators.subtract)} />
            </View>

            <View style={styles.rows}>
                <ButtonCalculator text="1" action={setCuenta} />
                <ButtonCalculator text="2" action={setCuenta} />
                <ButtonCalculator text="3" action={setCuenta} />
                <ButtonCalculator text="+" color="#FF9427" action={() => btnOperator(Operators.add)} />
            </View>

            <View style={styles.rows}>
                <ButtonCalculator text="0" action={setCuenta} ancho />
                <ButtonCalculator text="." action={setCuenta} />
                <ButtonCalculator text="=" color="#FF9427" action={calculate} />
            </View>
        </View>
    )
}
