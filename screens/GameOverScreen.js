import React from 'react';
import { View, StyleSheet, Image, Text, Button } from 'react-native';

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import { Colors } from "react-native/Libraries/NewAppScreen";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    // source={{uri: 'https://images.com'}}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View styles={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{ roundsNumber }</Text>
                    rounds to guess the number <Text style={styles.highlight}>{ userNumber }</Text>
                </BodyText>
            </View>
            <BodyText>Number was: { userNumber }</BodyText>
            <Button title="NEW GAME" onPress={onRestart}  />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOverScreen;
