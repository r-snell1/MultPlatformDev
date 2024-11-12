import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, FlatList, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from "./styles";
import _storeData from "./DataStorage";
import _retrieveData from "./DataStorage";

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

    //add list item
    const addItem = async () => {
        if (inputText.trim()) {
            const newItem = { id: items.length.toString(), value: inputText };
            const updatedItems = [...items, newItem];
            setItems(updatedItems);
            setInputText('');
            await _storeData(updatedItems); // Store the updated list
        }
    };

    //remove list item
    const removeItem = async (id) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
        await _storeData(updatedItems); // Store the updated list
    };

    return (
        <View style={styles.containerListItem}>
            <TextInput
                style={styles.input}
                placeholder="Enter item"
                value={inputText}
                onChangeText={(text) => setInputText(text)}
            />
            <Button title="Add Item" onPress={addItem} />
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <Text style={styles.itemList}>{item.value}</Text>
                        <TouchableOpacity onPress={() => removeItem(item.id)}>
                            <Text style={styles.removeItemText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
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
