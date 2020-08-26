import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    },
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        marginBottom: 8,
        backgroundColor: '#343434',
        color: '#f2f2f2',
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: (Dimensions.get('window').width / 4) / 2,
    },
    operationButton: {
        color: '#fff6b7',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4 ) * 2,        
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4 ) * 3,
        backgroundColor: '#a7a6a7',
        color: '#040404'
    },
    buttonText: {
        textAlign: 'left',        
    }
})

export default props => {

    // Estilo padrão
    const stylesButton = [styles.button]

    if (props.double) stylesButton.push([styles.buttonDouble, styles.buttonText])
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight style={styles.container} onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}