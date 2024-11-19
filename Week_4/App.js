import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WeatherApp from './WeatherApp';
import styles from "./styles";

export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <StatusBar style="auto" />
                <WeatherApp />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
