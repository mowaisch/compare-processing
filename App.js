import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
import FirstTextScreen from './src/screens/FirstTextScreen';
import SplashScreen from './src/screens/SplashScreen';
import BasicInfoScreen from './src/screens/BasicInfoScreen';
import BusinessDetailScreen from './src/screens/BusinessDetailScreen';
import ViewQuoteScreen from './src/screens/ViewQuoteScreen';
import ThankYouScreen from './src/screens/ThankYouScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as CompaniesProvider } from './src/context/CompaniesContext';
import { Provider as FormsProvider } from './src/context/FormsContext';

import { Context as AuthContext } from './src/context/AuthContext';
import { Context as CompaniesContext } from './src/context/CompaniesContext';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const FormsStack = createStackNavigator();

function formsStackFlow() {
  return (
    <FormsStack.Navigator
      screenOptions={{ headerShown: false }}>
      <FormsStack.Screen name="BasicInfoScreen" component={BasicInfoScreen} />
      <FormsStack.Screen name="BusinessDetailScreen" component={BusinessDetailScreen} />
      <FormsStack.Screen name="ViewQuoteScreen" component={ViewQuoteScreen} />
    </FormsStack.Navigator>
  );
}

const Stack = createStackNavigator();
const App = () => {
  const { state, } = useContext(AuthContext);
  const { getCompanies, } = useContext(CompaniesContext);
  useEffect(() => {
    getCompanies();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash" screenOptions={{ headerShown: false }}>
        {state.routeFlow === '' ?
          <Stack.Screen name="splash" component={SplashScreen} /> :
          state.routeFlow === 'firstText' ?
            <Stack.Screen name="FirstTextScreen" component={FirstTextScreen} /> :
            state.routeFlow === 'forms' ?
              <Stack.Screen name="formsFlow" component={formsStackFlow} /> :
              state.routeFlow === 'thanksflow' ?
                <Stack.Screen name="ThankYouScreen" component={ThankYouScreen} /> :
                null
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <FormsProvider>
      <CompaniesProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CompaniesProvider>
    </FormsProvider>
  );
};



