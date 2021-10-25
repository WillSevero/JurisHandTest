import React from 'react';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { StatusBar, View } from 'react-native';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';
import DatabaseInit from './src/database/database-init';

import store from './src/store/store';
import { Provider } from 'react-redux';

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Rajdhani_500Medium,
        Rajdhani_700Bold,
    });

    console.log("initialize database")
    const db = new DatabaseInit

    if (!fontsLoaded || !db) return <AppLoading />

    return (
        <Provider store={store}>
            <Background>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="transparent"
                    translucent
                />
                <Routes />
            </Background>
        </Provider>
    );
}
