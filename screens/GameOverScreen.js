import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
    ScrollView
} from 'react-native';

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import { Colors } from "react-native/Libraries/NewAppScreen";
import MainButton from "../components/MainButton";

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
    return (
        <ScrollView>
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
                        Your phone needed <Text style={styles.highlight}>{ roundsNumber }</Text>{' '}
                        rounds to guess the number <Text style={styles.highlight}>{ userNumber }</Text>
                    </BodyText>
                </View>
                <BodyText style={styles.resultText}>Number was: { userNumber }</BodyText>
                <MainButton onPress={onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 20
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
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        marginVertical: 5,
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
});

export default GameOverScreen;
