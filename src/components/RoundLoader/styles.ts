import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors";

export const styles = StyleSheet.create({
    square_dots: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        width: 30
    },
    dots: {
        height: 7,
        width: 7,
        backgroundColor: colors.white
    }
})