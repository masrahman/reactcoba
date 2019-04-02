import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.textStyle}>{props.textHeader}</Text>
        </View>
    );
};

const styles = {
    headerStyle: {
        backgroundColor: '#fff',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 2
    },
    textStyle: {
        fontSize: 20
    }
};

export { Header };
