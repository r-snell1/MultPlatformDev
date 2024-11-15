import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',  // Align content to the top
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',  // Align city and state inputs horizontally
        marginBottom: 10,
        width: '100%',
        marginTop: 50,  // Move the input fields further down from the title
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 10,
        marginRight: 10,
        fontSize: 16,
        flex: 1,  // Distribute available space equally
        borderRadius: 5,  // Round the corners for a more modern look
    },
    cityInput: {
        flex: 2, // City input gets more space
    },
    stateInput: {
        flex: 2, // State input gets less space
        justifyContent: 'center',  // Center the text inside the picker
    },
    weatherText: {
        fontSize: 24,  // Make the font size larger for weather info
        fontWeight: 'bold',
        marginBottom: 10,
    },
    temperatureText: {
        fontSize: 28,  // Larger font size for temperature
        fontWeight: 'bold',
        marginBottom: 10,
    },
    descriptionText: {
        fontSize: 20,  // Slightly smaller font size for description
        fontStyle: 'italic',
        marginBottom: 20,
    },
    picker: {
        height: 40,  // Match the height of the TextInput
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 10,
        marginRight: 10,
        fontSize: 16,
        flex: 2,
        borderRadius: 5,  // Same rounded corners as inputs
        justifyContent: 'center',  // Center the picker content
    },
    buttonContainer: {
        marginTop: 50,  // Move the button further down
        width: '100%',
        alignItems: 'center',
    },
});

export default styles;
