import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CButton = (props) => {
    return (
        <TouchableOpacity 
            style={styles.btnStyle}
            onPress={props.onPress}
        >
            <Text style={styles.textStyle}>{props.textButton}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    btnStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#2196F3',
        borderWidth: 1,
        borderRadius: 2
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 16,
        fontColor: '#2196F3'
    }
};

export { CButton };
