import React from "react";
import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native";
import { Icon } from "react-native-elements";
import CustomText from "../CustomText";
import { styles } from "./styles";

interface ButtonProps {
    type?: "regular" | "circular",
    otherProps?: TouchableOpacityProps,
    btnText?: string,
    otherStyle?: StyleProp<ViewStyle>,
    onPress: () => void
}
const Button: React.FC<ButtonProps> = ({ type = "regular", otherProps, btnText = "", otherStyle, onPress }): JSX.Element => {
    if (type === "circular") {
        return (
            <TouchableOpacity
                style={[styles.circular, otherStyle]} onPress={onPress} {...otherProps}>
                <View style={styles.roundView}>
                    <Icon
                        type="material"
                        name="chevron-right"
                        size={30}
                        tvParallaxProperties
                    />
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <TouchableOpacity style={styles.regular} {...otherProps} onPress={onPress}>
            <CustomText type="text" style={styles.btnTxt}>{btnText}</CustomText>
        </TouchableOpacity>
    )
}

export default Button;