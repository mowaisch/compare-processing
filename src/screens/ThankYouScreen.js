import React, {useContext} from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import TypeWriter from 'react-native-typewriter';
import { Context as AuthContext } from '../context/AuthContext';

const ThankYouScreen = ({ navigation }) => {
    const { state, setRoute } = useContext(AuthContext);
    return (
        <View style={styles.topContainerStyles}>
            <StatusBar
                backgroundColor="#fff" />
            <TypeWriter style={styles.textStyle} typing={1}
                onTypingEnd={() => {
                    let timer = setInterval(() => {
                        setRoute('forms');
                        clearInterval(timer)
                    }, 1000);
                }}
            >Thank You! We have recieved your quote.  </TypeWriter>
        </View>
    );
}

export default ThankYouScreen;

const styles = StyleSheet.create({
    topContainerStyles: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    textStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 150
    },
});