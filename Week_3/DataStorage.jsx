import AsyncStorage from '@react-native-async-storage/async-storage';

const _storeData = async (items) => {
    try {
        // Convert items array to JSON string before saving
        await AsyncStorage.setItem('@TASKS', JSON.stringify(items));
    } catch (error) {
        console.error('Error saving data', error);
    }
};

const _retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('@TASKS');
        if (value !== null) {
            // Parse JSON string back into an array
            return JSON.parse(value);
        }
        return []; // Return an empty array if no data is found
    } catch (error) {
        console.error('Error retrieving data', error);
        return []; // Return an empty array in case of error
    }
};

export { _storeData, _retrieveData };
