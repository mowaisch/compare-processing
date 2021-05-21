import React, { useState, useContext, useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { TextInput, Button, RadioButton } from 'react-native-paper';
import { Context as CompaniesContext } from '../context/CompaniesContext';
import { Context as FormsContext } from '../context/FormsContext';

const BusinessDetailScreen = ({ navigation }) => {
    const { state: { companiesList },  setCalculation } = useContext(CompaniesContext);
    const { state, saveFormTwo } = useContext(FormsContext);
    const [businessName, setBusinessName] = useState('');
    const [industryName, setIndustryName] = useState('');
    const [stateName, setStateName] = useState('');
    const [averageTicket, setAverageTicket] = useState('');
    const [lastMonthVolume, setLastMonthVolume] = useState('');
    const [feePaying, setFeePaying] = useState('');
    const [acceptPersonCard, setAcceptPersonCard] = useState('no');
    const [acceptOnlineCard, setAcceptOnlineCard] = useState('no');
    

    return (
        <ScrollView style={styles.topContainerStyles}>
            <StatusBar
                backgroundColor="#09666B" />
            <View style={styles.firstContainerStyles}>
                <Text style={styles.headingTextStyle}>Business Details  </Text>
                <View style={styles.secondContainerStyle}>
                    <Text style={styles.descriptionTextStyle}>We would like to know a little about yourself. All your information is held securely and we never give your details to 3rd parties.</Text>
                </View>
            </View>
            <View style={styles.thirdContainerStyle}>
                <TextInput
                    mode='outlined'
                    theme={{ colors: { primary: '#09666B', underlineColor: 'transparent', } }}
                    label="Business Name"
                    value={businessName}
                    style={styles.inputStyle}
                    onChangeText={text => setBusinessName(text)}
                />
                <TextInput
                    mode='outlined'
                    theme={{ colors: { primary: '#09666B', underlineColor: 'transparent', } }}
                    label="Industry Name"
                    value={industryName}
                    style={styles.inputStyle}
                    onChangeText={text => setIndustryName(text)}
                />
                <TextInput
                    mode='outlined'
                    theme={{ colors: { primary: '#09666B', underlineColor: 'transparent', } }}
                    label="Enter State"
                    value={stateName}
                    style={styles.inputStyle}
                    onChangeText={text => setStateName(text)}
                />
                <TextInput
                    mode='outlined'
                    theme={{ colors: { primary: '#09666B', underlineColor: 'transparent', } }}
                    label="Enter Average Ticket Sale ($)"
                    keyboardType='numeric'
                    value={averageTicket}
                    style={styles.inputStyle}
                    onChangeText={text => setAverageTicket(text)}
                />
                <TextInput
                    mode='outlined'
                    theme={{ colors: { primary: '#09666B', underlineColor: 'transparent', } }}
                    label="Enter Last Month's  Volume ($)"
                    keyboardType='numeric'
                    value={lastMonthVolume}
                    style={styles.inputStyle}
                    onChangeText={text => setLastMonthVolume(text)}
                />
                <TextInput
                    mode='outlined'
                    theme={{ colors: { primary: '#09666B', underlineColor: 'transparent', } }}
                    label="Enter How Much Fee You're Paying ($)"
                    keyboardType='numeric'
                    value={feePaying}
                    style={styles.inputStyle}
                    onChangeText={text => setFeePaying(text)}
                />
                <View style={styles.fifthContainerStyle}>
                    <Text>Do you accept cards in Person?</Text>
                    <View style={styles.inlineContainerStyle}>
                        <RadioButton
                            value="first"
                            status={acceptPersonCard === 'yes' ? 'checked' : 'unchecked'}
                            onPress={() => setAcceptPersonCard('yes')}
                        />
                        <Text>Yes</Text>
                        <RadioButton
                            value="first"
                            status={acceptPersonCard === 'no' ? 'checked' : 'unchecked'}
                            onPress={() => setAcceptPersonCard('no')}
                        />
                        <Text>No</Text>
                    </View>
                </View>
                <View style={styles.fifthContainerStyle}>
                    <Text>Do you accept cards online?</Text>
                    <View style={styles.inlineContainerStyle}>
                        <RadioButton
                            value="first"
                            status={acceptOnlineCard === 'yes' ? 'checked' : 'unchecked'}
                            onPress={() => setAcceptOnlineCard('yes')}
                        />
                        <Text>Yes</Text>
                        <RadioButton
                            value="first"
                            status={acceptOnlineCard === 'no' ? 'checked' : 'unchecked'}
                            onPress={() => setAcceptOnlineCard('no')}
                        />
                        <Text>No</Text>
                    </View>
                </View>
                <View style={styles.fourthContainerStyle} >
                    <Button style={styles.buttonStyle} mode="contained" onPress={() => navigation.goBack()}>
                        Previous
                    </Button>
                    <Button
                        disabled={state.loading == '2' ? true : false}
                        loading={state.loading == '2' ? true : false}
                        style={styles.buttonStyle} mode="contained" onPress={() => {
                            if (businessName.trim() === '' || industryName.trim() === '' || stateName.trim() === '' || averageTicket.trim() === '' || lastMonthVolume.trim() === '' || feePaying.trim() === '') {
                                alert('Please enter all the values');
                            } else {
                                saveFormTwo(businessName, industryName, stateName, averageTicket, lastMonthVolume, feePaying, () => navigation.navigate('ViewQuoteScreen'))
                                setCalculation(companiesList, feePaying, lastMonthVolume)
                            }
                        }}>
                        Get Fee Quote Now
                    </Button>
                </View>
            </View>
        </ScrollView>
    );
}

export default BusinessDetailScreen;

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
        marginVertical: 10,
        marginHorizontal: 30,
        backgroundColor: '#fff'
    },
    buttonStyle: {
        backgroundColor: '#09666B',
        borderRadius: 30,
    },
    fourthContainerStyle: {
        marginTop: 50,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    fifthContainerStyle: {
        marginHorizontal: 30
    },
    inlineContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

