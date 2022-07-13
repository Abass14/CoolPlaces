import React from "react";
import { StyleProp, Text, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../../assets/colors";
import CustomText from "../CustomText";
import IconView from "../IconView";
import Loader from "../RoundLoader";
import { styles } from "./styles";

interface ButtonProps {
    type?: "regular" | "circular",
    otherProps?: TouchableOpacityProps,
    btnText?: string,
    otherStyle?: StyleProp<ViewStyle>,
    onPress: () => void,
    loading?: boolean,
    disabled?: boolean,
    iconName?: string,
    iconColor?: string,
    iconSize?: number
}
const Button: React.FC<ButtonProps> = ({ 
    type = "regular", 
    otherProps, 
    btnText = "", 
    otherStyle, 
    onPress, 
    loading, 
    disabled,
    iconName,
    iconColor = colors.grey,
    iconSize = 30
}): JSX.Element => {
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
        <TouchableOpacity style={[styles.regular, {opacity: disabled ? 0.5 : 1}, otherStyle]} {...otherProps} onPress={onPress} disabled={disabled}>
            {loading ? (
                <View style={{width: 100}}>
                    <Loader type="square-dots" />
                </View>
            ) : (
                <View style={styles.btnRow}>
                    <View>
                        {iconName && <IconView color={iconColor} type="font-awesome" name={iconName} size={iconSize}/>}
                    </View>
                    <CustomText type="text" style={styles.btnTxt}>{btnText}</CustomText>
                    <View style={{width: iconName ? 30 : 0}}>
                        
                    </View>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default Button;