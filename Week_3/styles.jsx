import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerList: {
        padding: 20,
    },
    containerListItem: {
        backgroundColor:'black',
        color: 'white',
        fontSize: 25,
        paddingTop: 10,
    },
    input: {
        borderBottomWidth: 5,
        borderColor: 'White',
        marginBottom: 10,
        padding: 8,
        color: 'white',
    },
    itemList: {
        padding: 15,
        marginTop: 10,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 5,
        fontSize: '40',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        color: 'white',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    scrollView: {
        flex: 1,
    },
    title: {
      fontSize: '50px',
      backgroundColor: 'blue',
      color: 'black',
    },
    removeItemText:{
      color: 'black',
      fontSize: '20px',
      backgroundColor: 'red',
    },
});

export default styles;