import React from "react";
import { StyleProp, Text, TextStyle, TouchableOpacity, View } from "react-native";

interface CustomTextProps {
    children: string | React.ReactNode,
    style?: StyleProp<TextStyle>,
    type?: "text" | "hyperlink",
    onPress?: () => void
}
const CustomText: React.FC<CustomTextProps> = ({children, style, type="text", onPress}) : JSX.Element => {
    if (type === "hyperlink") {
        return (
            <TouchableOpacity onPress={onPress}>
                <Text style={style}>{children}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <Text style={style}>{children}</Text>
    )
}

export default CustomText;