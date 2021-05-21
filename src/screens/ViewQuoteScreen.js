import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, StatusBar, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { Context as AuthContext } from '../context/AuthContext';
import { Context as CompaniesContext } from '../context/CompaniesContext';
import { Context as FormsContext } from '../context/FormsContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ViewQuoteScreen = ({ navigation }) => {
    const { setRoute } = useContext(AuthContext);
    const { state, } = useContext(CompaniesContext);
    const { state: { loading }, chooseQuote } = useContext(FormsContext);
    return (
        <View style={styles.topContainerStyles}>
            <StatusBar
                backgroundColor="#09666B" />
            <View style={styles.firstContainerStyles}>
                <Text style={styles.headingTextStyle}>View Quotes </Text>
                <View style={styles.fourthContainerStyle}>
                    <Text style={styles.descriptionTextStyle}>Your Current Effective Rate Is = {state.effective_rate}%</Text>
                </View>
                <View style={styles.secondContainerStyle}>
                    <Text style={styles.descriptionTextStyle}>Based on your information, we were able to find some processors willing to offer you affordable processing rates.</Text>
                </View>
            </View>
            <View style={styles.thirdContainerStyle}>

                <FlatList
                    data={state.calculatedList}
                    style={{}}
                    renderItem={({ item, }) =>
                        <View style={styles.listItemStyle}>
                            <View style={styles.logoContainerStyle}>
                                <Image source={require('../assets/logo.png')} resizeMode='contain' style={styles.logoStyles} />
                                <Text style={styles.logoTextStyle}>{item.name}</Text>
                            </View>
                            <View style={styles.inlineContainerStyle}>
                                <Text style={styles.labelTextStyle}>Effective Rate:</Text>
                                <Text style={styles.valueTextStyle}>{item.effective_rate}%</Text>
                            </View>
                            <View style={styles.inlineContainerStyle}>
                                <Text numberOfLines={2} style={styles.labelTextStyle}>Estimated Monthly Processing Fee:</Text>
                                <Text style={styles.valueTextStyle}>${item.monthly_volume}</Text>
                            </View>
                            <Text style={styles.textStyle}>Your final pricing may defer based on additonal information asked by the payment processor.</Text>

                            <View>
                                <View style={{ paddingHorizontal: 5 }}>
                                    <FlatList
                                        data={item.list}
                                        numColumns={2}
                                        style={{}}
                                        renderItem={({ item, }) =>
                                            <View style={{ flexDirection: 'row', width: '50%' }}>
                                                <Ionicons style={{ color: '#09666B', }} size={25} name={'checkmark-sharp'} />
                                                <Text style={styles.offerTextStyle}>{item}</Text>
                                            </View>
                                        }
                                    />
                                </View>
                            </View>
                            <View style={styles.separatorStyle} />
                            <View style={styles.savingsTopContainerStyle}>
                                <View style={styles.savingsInnerContainerStyle}>
                                    <Text style={styles.text1Style}>Your Monthly{'\n'}Savings</Text>
                                    <Text style={styles.amountStyle}>$ {item.monthly_savings}</Text>
                                </View>
                                <View style={styles.savingsInnerContainerStyle}>
                                    <Text style={styles.text1Style}>Your 1 Year{'\n'} Savings</Text>
                                    <Text style={styles.amountStyle}>$ {item.yearly_saving}</Text>
                                </View>
                            </View>
                            <View style={styles.savingsTopContainerStyle}>
                                <View style={styles.savingsInnerContainerStyle}>
                                    <Text style={styles.text1Style}>Your 2 Year{'\n'}Savings</Text>
                                    <Text style={styles.amountStyle}>$ {item.year2saving}</Text>
                                </View>
                                <View style={styles.savingsInnerContainerStyle}>
                                    <Text style={styles.text1Style}>Your 3 Year{'\n'}Savings</Text>
                                    <Text style={styles.amountStyle}>$ {item.year3saving}</Text>
                                </View>
                            </View>
                            <Text style={styles.textStyle}>I'm Interested</Text>
                            <Button
                                disabled={loading == '3' ? true : false}
                                loading={loading == '3' ? true : false}
                                style={styles.buttonStyle} mode="contained" onPress={() => {
                                    { loading == '3' ? null : chooseQuote(item.name, () => setRoute('thanksflow')) }
                                }}>
                                CHOOSE THE QUOTE
                            </Button>
                        </View>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
}

export default ViewQuoteScreen;

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
        marginBottom: 30
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
        elevation: 3,
        marginBottom: 10
    },
    descriptionTextStyle: {
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
        alignSelf: 'center'
    },
    thirdContainerStyle: {
        marginBottom: 230
    },
    fourthContainerStyle: {
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: 'center'
    },
    listItemStyle: {
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: '#fff',
        marginBottom: 15,
        marginTop: 5
    },
    logoContainerStyle: {
        alignSelf: 'center',
        alignItems: 'center'
    },
    logoTextStyle: {
         
        fontSize: 18,
        borderRadius: 15,
        fontWeight: 'bold',
        marginBottom: 10
    },
    logoStyles: {
        height: 100,
        width: 100
    },
    inlineContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    labelTextStyle: {
        fontWeight: 'bold',
        fontSize: 15,
        width: '70%',
    },
    valueTextStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        width: '30%',
        textAlign: 'right',
    },
    textStyle: {
        textAlign: 'center',
        marginVertical: 10,
        fontStyle: 'italic'
    },
    separatorStyle: {
        backgroundColor: '#09666B',
        height: 2,
        marginVertical: 15
    },
    savingsTopContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 15
    },
    savingsInnerContainerStyle: {
        alignItems: 'center'
    },
    text1Style: {
        textAlign: 'center',
        fontSize: 14
    },
    offerTextStyle: {
        fontSize: 15,
    },
    amountStyle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonStyle: {
        backgroundColor: '#09666B',
        borderRadius: 15,
        marginVertical: 5,
        marginHorizontal: 10
    },
});