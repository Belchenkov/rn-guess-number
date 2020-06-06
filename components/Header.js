import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import TitleText from "./TitleText";
import colors from "../constants/colors";

const Header = ({ title }) => {
    return (
        <View style={{
            ...styles.headerBase,
            ...Platform.select({
                ios: styles.headerIOS,
                android: styles.headerAndroid
            })
        }}>
            <TitleText style={styles.title}>{ title }</TitleText>
        </View>
    );
};

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: '#4829f7'
    },
    title: {
        color: Platform.OS === 'ios' ? colors.primary : 'white',
        fontSize: 23
    }
});

export default Header;
