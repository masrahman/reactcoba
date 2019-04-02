import React from 'react';
import { View, Text } from 'react-native';

const TextHor12 = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.lblStyle}>{props.label}</Text>
            <Text style={styles.valStyle}>{props.value}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        flexDirection: 'column',
        flex: 1,
        marginBottom: 5
    },
    lblStyle: {
        flex: 1,
        fontWeight: 'bold'
    },
    valStyle: {
        flex: 2
    }
};

export { TextHor12 };
