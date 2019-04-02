import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.cardStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    cardStyle: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 2,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5
    }
};

export { Card };
