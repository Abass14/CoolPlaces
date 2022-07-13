import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { Icon } from "react-native-elements";
import { colors } from "../../assets/colors";

type IconViewProps = {
    type?: string,
    name: string,
    size?: number,
    style?: ViewStyle,
    onPress?: () => void,
    color?: string
}
const IconView: React.FC<IconViewProps> = ({
    type="material-community", 
    name,
    size=30,
    style,
    onPress,
    color=colors.grey
}) : JSX.Element => {
    return (
        <Icon 
            type={type}
            name={name}
            size={size}
            style={style}
            onPress={onPress}
            color={color}
            tvParallaxProperties
        />
    )
}

export default IconView;