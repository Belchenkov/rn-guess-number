import React from 'react';
import { View, StyleSheet } from 'react-native';

import TitleText from "./TitleText";

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <TitleText style={{
                color: 'white',
                fontSize: 23
            }}>{ title }</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: '#4829f7',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    }
});

export default Header;
