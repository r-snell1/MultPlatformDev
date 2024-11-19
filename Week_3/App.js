import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import React from 'react';
import styles from "./styles";
import AddListItem from "./AddListItem";

// Main app component
export default function App() {
    return (
        <View style={styles.containerList}>
            <Text style={styles.title}>Project List</Text>
            <StatusBar style="auto" />
            <AddListItem />
        </View>
    );
}
