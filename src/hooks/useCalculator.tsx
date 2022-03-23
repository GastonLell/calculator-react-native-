import React, { useRef, useState } from 'react'
enum Operators {
    divide, multiply, subtract, add
}

export const useCalculator = () => {

    const [lastNumber, setLastNumber] = useState<string>('0');
    const [number, setNumber] = useState<string>('0');
    const [isPressSame, setIsPressSame] = useState<boolean>(false);
    const lastOperations = useRef<(Operators | null)>(null);
    const lastNumberRef = useRef<number>(0);

    // limpiar calculadora
    const clear = (): void => {
        setNumber('0');
        setLastNumber('0');
    }

    // invertir simbolos +/-
    const positivoNegativo = (): void => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    }

    // borrar ultimo caracter (del)
    const deleteLastCharacter = (): void => {
        (number.length === 1 || (number.length === 2 && number.includes('-')))
            ? setNumber('0')
            : setNumber(number.substring(0, number.length - 1))
    }

    // setear numeros para la cuenta
    const setCuenta = (numberAdd: string): void => {
        if (number.includes('.') && numberAdd === '.') return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberAdd === '.') {
                setNumber(number + numberAdd);
            } else if (numberAdd === '0' && number.includes('.')) {
                setNumber(number + numberAdd)
            } else if (numberAdd !== '0' && !number.includes('.')) {
                setNumber(numberAdd)
            } else if (numberAdd === '0' && !number.includes('.')) {
                setNumber(number)
            }
        } else {
            setNumber(number + numberAdd)
        }
    }


    // si ultimo numero termina con un punto sacarlo
    const changeLastNumber = (): void => {
        if (number.endsWith('.')) {
            setLastNumber(number.slice(0, -1));
        } else {
            setLastNumber(number);
        }
        setNumber('0')
    }

    // setear numero y seleccionar operacion a realizar
    const btnOperator = (operation: Operators): void => {
        changeLastNumber();
        lastOperations.current = operation;
        setIsPressSame(false)
    }

    // sacar cuenta con numeros seteados
    const calculate = (): void => {
        let num1 = Number(lastNumber);
        let num2 = Number(number);

        /* si ya se presiono el igual voy a realizar la misma 
            cuenta anterior al resultado
            5 + 5
            10 + 5
            15 + 5
            ETC...
         */
        if (isPressSame) {

            switch (lastOperations.current) {
                case Operators.divide:
                    setLastNumber(`${number} / ${lastNumberRef.current}`);
                    setNumber(`${Number(number) / lastNumberRef.current}`)
                    break;
                case Operators.multiply:
                    setLastNumber(`${number} * ${lastNumberRef.current}`);
                    setNumber(`${Number(number) * lastNumberRef.current}`)
                    break;
                case Operators.subtract:
                    setLastNumber(`${number} - ${lastNumberRef.current}`);
                    setNumber(`${Number(number) - lastNumberRef.current}`)
                    break;
                case Operators.add:
                    setLastNumber(`${number} + ${lastNumberRef.current}`);
                    setNumber(`${Number(number) + lastNumberRef.current}`)
                    break;
                default:
                    break;
            }
            return;
        }

        // si es la primera vez que toco = voy a guardar el segundo valor como ref
        lastNumberRef.current = num2;

        // si estan los dos operandos realizo la cuenta
        if (lastNumber !== '0' && number !== '0') {
            switch (lastOperations.current) {
                case Operators.divide:
                    setLastNumber(`${num1} / ${num2}`);
                    setNumber(`${num1 / num2}`)
                    break;
                case Operators.multiply:
                    setLastNumber(`${num1} * ${num2}`);
                    setNumber(`${num1 * num2}`)
                    break;
                case Operators.subtract:
                    setLastNumber(`${num1} - ${num2}`);
                    setNumber(`${num1 - num2}`)
                    break;
                case Operators.add:
                    setLastNumber(`${num1} + ${num2}`);
                    setNumber(`${num1 + num2}`)
                    break;
                default:
                    break;
            }

        }

        // seteo que ya realice por primera vez la cuenta
        setIsPressSame(true)
    }

    return { 
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
    }
}