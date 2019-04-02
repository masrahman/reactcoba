import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={styles.sectionStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    sectionStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        padding: 5,
        borderColor: '#ddd',
        borderWidth: 1,
        borderBottomWidth: 0,
        borderRadius: 2
    }
};

export { CardSection };
