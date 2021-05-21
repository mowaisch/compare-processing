import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Context as FormsContext } from '../context/FormsContext';

const BasicInfoScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const { state, saveFormOne } = useContext(FormsContext);
    return (
        <ScrollView style={styles.topContainerStyles}>
            <StatusBar
                backgroundColor="#09666B" />
            <View style={styles.firstContainerStyles}>
                <Text style={styles.headingTextStyle}>Basic Info</Text>
                <View style={styles.secondContainerStyle}>
                    <Text style={styles.descriptionTextStyle}>We would like to know a little about yourself. All your information is held securely and we never give your details to 3rd parties.</Text>
                </View>
            </View>
            <View style={styles.thirdContainerStyle}>
                <TextInput
                    mode='outlined'
                    theme={{ colors: { primary: '#09666B', underlineColor: 'transparent', } }}
                    label="Name"
                    value={name}
                    style={styles.inputStyle}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    mode='outlined'
                    theme={{ colors: { primary: '#09666B', underlineColor: 'transparent', } }}
                    label="Email"
                    value={email}
                    style={styles.inputStyle}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    mode='outlined'
                    theme={{ colors: { primary: '#09666B', underlineColor: 'transparent', } }}
                    label="Number"
                    keyboardType='phone-pad'
                    value={number}
                    style={styles.inputStyle}
                    onChangeText={text => setNumber(text)}
                />
                <View style={styles.fourthContainerStyle} >
                    <Button
                        disabled={state.loading == '1' ? true : false}
                        loading={state.loading == '1' ? true : false}
                        style={styles.buttonStyle} mode="contained" onPress={() => {
                            if (name.trim() == '' || email.trim() == '' || number.trim() == '') {
                                alert('Enter all the values');
                            } else {
                                saveFormOne(name, email, number, () => navigation.navigate('BusinessDetailScreen'));
                            }
                            // navigation.navigate('BusinessDetailScreen')
                        }}>
                        Next
                </Button>
                </View>
            </View>
        </ScrollView>
    );
}

export default BasicInfoScreen;

const styles = StyleSheet.create({
    topContainerStyles: {
        flex: 1,
        backgroundColor: '#fff'
    },
    firstContainerStyles: {
        backgroundColor: '#09666B',
        height: 200,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35,
        paddingTop: 25,
        marginBottom: 70
    },
    headingTextStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        alignItems: 'center',
        alignSelf: 'center'
    },
    secondContainerStyle: {
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: -30,
        left: 30,
        right: 30,
        padding: 5,
        borderRadius: 15,
        elevation: 3
    },
    descriptionTextStyle: {
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
        alignSelf: 'center'
    },
    thirdContainerStyle: {

    },
    inputStyle: {
        marginVertical: 20,
        marginHorizontal: 30,
        backgroundColor: '#fff'
    },
    buttonStyle: {
        backgroundColor: '#09666B',
        width: 150,
        borderRadius: 30,
        marginRight: 10
    },
    fourthContainerStyle: {
        marginTop: 50,
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        marginBottom: 20
    }
});

