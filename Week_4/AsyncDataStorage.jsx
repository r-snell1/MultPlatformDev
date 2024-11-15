import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = '@TASKS';

const _storeData = async (items) => {
    try {
        await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(items));
    } catch (error) {
        console.error('Error saving data', error);
    }
};

const _retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem(TASKS_KEY);
        return value ? JSON.parse(value) : [];
    } catch (error) {
        console.error('Error retrieving data', error);
        return [];
    }
};

export { _storeData, _retrieveData };