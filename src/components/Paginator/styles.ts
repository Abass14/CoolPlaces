import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const styles = StyleSheet.create({
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: colors.deep_purple,
        marginHorizontal: 2
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})