import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 16,
        paddingTop: 100,
        backgroundColor: "black",
    },
    listItem: {
        backgroundColor: "red",
        borderWidth: 1,
        borderColor: "black",
        padding: 25,
    },
    innerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "black",
    },
    outerText: {
        fontSize: 26,
        fontStyle: "italic",
        fontWeight: "bold",
        textAlign: "center",
        textDecorationLine: "underline",
        color: "white",
    }
});

export default styles;
