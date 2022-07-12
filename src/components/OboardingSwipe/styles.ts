import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    paginator: {
        width: 100,
        position: "absolute",
        bottom: 100,
        alignSelf: 'center'
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 20,
        width: '100%',
        alignItems: 'center'
    }
})