import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import TypeWriter from 'react-native-typewriter';
import { Context as AuthContext } from '../context/AuthContext';

const FirstTextScreen = ({ navigation }) => {
    const [isDone, setIsDone] = useState(false);
    const { state, setRoute } = useContext(AuthContext);
    return (
        <View style={styles.topContainerStyles}>
            <StatusBar
                backgroundColor="#fff" />
            <TypeWriter style={styles.textStyle} typing={1}
                onTypingEnd={() => setIsDone(true)}
            >Let Get Started!</TypeWriter>
            {isDone ? <TypeWriter style={styles.text2Style} typing={1}
                onTypingEnd={() => {
                    let timer = setInterval(() => {
                        setRoute('forms');
                        clearInterval(timer)
                    }, 1000);
                }}
            >Get your quote.</TypeWriter> : null}
        </View>
    );
}

export default FirstTextScreen;

const styles = StyleSheet.create({
    topContainerStyles: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '45%',
        paddingLeft: 10
    },
    textStyle: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    text2Style: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});