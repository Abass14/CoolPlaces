import React from "react";
import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native";
import { Icon } from "react-native-elements";
import CustomText from "../CustomText";
import Loader from "../RoundLoader";
import { styles } from "./styles";

interface ButtonProps {
    type?: "regular" | "circular",
    otherProps?: TouchableOpacityProps,
    btnText?: string,
    otherStyle?: StyleProp<ViewStyle>,
    onPress: () => void,
    loading?: boolean,
    disabled?: boolean
}
const Button: React.FC<ButtonProps> = ({ type = "regular", otherProps, btnText = "", otherStyle, onPress, loading, disabled }): JSX.Element => {
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
        <TouchableOpacity style={[styles.regular, {opacity: disabled ? 0.5 : 1}]} {...otherProps} onPress={onPress} disabled={disabled}>
            {loading ? (
                <View style={{width: 100}}>
                    <Loader type="square-dots" />
                </View>
            ) : (
                <CustomText type="text" style={styles.btnTxt}>{btnText}</CustomText>
            )}
        </TouchableOpacity>
    )
}

export default Button;