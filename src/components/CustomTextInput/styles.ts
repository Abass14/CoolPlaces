import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginEnd: 20
    },
    inputMainView: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.grey,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        borderWidth: 0
    },
    eyeIcon: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})