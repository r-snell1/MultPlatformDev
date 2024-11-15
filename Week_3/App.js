import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, FlatList, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from "./styles";
import { _storeData, _retrieveData, _clearData } from "./DataStorage";

// Adding item to list and removing items
const AddListItem = () => {
    const [items, setItems] = useState([]);
    const [inputText, setInputText] = useState('');

    // Retrieve saved items on load
    useEffect(() => {
        const loadItems = async () => {
            const savedItems = await _retrieveData();
            if (savedItems) {
                setItems(savedItems);
            }
        };
        loadItems();
    }, []);

    // Add a new item to the list
    const addItem = async () => {
        if (inputText.trim()) {
            const newItem = { id: Date.now().toString(), value: inputText };
            const updatedItems = [...items, newItem];
            setItems(updatedItems);
            setInputText('');
            await _storeData(updatedItems);
        }
    };

    // Remove an item from the list
    const removeItem = async (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
        await _storeData(updatedItems);
    };

    // Clear all items from the list
    const clearAllItems = async () => {
        setItems([]);
        await _clearData();
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.containerListItem}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter item"
                    value={inputText}
                    onChangeText={(text) => setInputText(text)}
                />
                <Button title="Add Item" onPress={addItem} />
                <Button title="Clear All" onPress={clearAllItems} color="red" />
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemList}>{item.value}</Text>
                            <TouchableOpacity onPress={() => removeItem(item.id)}>
                                <Text style={styles.removeItemText}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

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
