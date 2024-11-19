import React, {useEffect, useState} from "react";
import {_retrieveData, _storeData} from "./AsyncDataStorage";
import axios from "axios";
import {ActivityIndicator, Button, Text, TextInput, View} from "react-native";
import styles from "./styles";
import {Picker} from "@react-native-picker/picker";
import stateNames from "./stateNames";

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isCelsius, setIsCelsius] = useState(true);
    const API_KEY = 'f47e851a84336835cb599f08fb2fa334';

    // loads last city and state used
    useEffect(() => {
        const fetchLastLocation = async () => {
            const lastLocation = await _retrieveData();
            if (lastLocation) {
                setCity(lastLocation.city);
                setState(lastLocation.state);
                fetchWeather(lastLocation.city, lastLocation.state);
            }
        };
        fetchLastLocation();
    }, []);

    // search for weather using a user-defined location
    const fetchWeather = async (cityName, stateName) => {
        if (!cityName) {
            alert('Please enter a city name');
            return;
        }
        const location = `${cityName}${stateName ? ',' + stateName : ''}`; // Use both city and state (optional)
        setLoading(true);
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
            );
            setWeather(response.data);
            await _storeData({ city: cityName, state: stateName });  // Store both city and state
        } catch (error) {
            console.error(error);
            alert('City not found or network error!');
        } finally {
            setLoading(false);
        }
    };

    // Convert Celsius to Fahrenheit
    const convertToFahrenheit = (celsius) => {
        return (celsius * 9) / 5 + 32;
    };

    // Toggle temperature units between Celsius and Fahrenheit
    const toggleTemperatureUnit = () => {
        setIsCelsius(!isCelsius);
    };

    // Clear input fields
    const clearInputs = () => {
        setCity('');
        setState('');
        setWeather(null);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Weather App</Text>

            {/* Container for city and state inputs */}
            <View style={styles.inputContainer}>
                {/* City TextInput */}
                <TextInput
                    style={[styles.input, styles.cityInput]}
                    placeholder="Enter city name"
                    value={city}
                    onChangeText={setCity}
                />

                {/* State Picker (Inside the same input field container) */}
                <Picker
                    selectedValue={state}
                    onValueChange={setState}
                    style={[styles.input, styles.stateInput]}
                >
                    <Picker.Item label="Select a state" value="" />
                    {stateNames.map((fullName) => (
                        <Picker.Item key={fullName} label={fullName} value={fullName} />
                    ))}
                </Picker>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Get Weather" onPress={() => fetchWeather(city, state)} />
            </View>

            <Button title="Clear" onPress={clearInputs} color="red" />
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {weather && !loading && (
                <View style={styles.weatherInfo}>
                    <Text style={styles.weatherText}>City: {weather.name}</Text>
                    <Text style={styles.temperatureText}>
                        Temperature: {isCelsius ? weather.main.temp : convertToFahrenheit(weather.main.temp).toFixed(1)}°{isCelsius ? 'C' : 'F'}
                    </Text>
                    <Text style={styles.descriptionText}>Weather: {weather.weather[0].description}</Text>
                    <Button title={`Switch to ${isCelsius ? 'Fahrenheit' : 'Celsius'}`} onPress={toggleTemperatureUnit} />
                </View>
            )}
        </View>
    );
};

export default WeatherApp