import React from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface ContainerProps {
    children: React.ReactNode,
    style?: StyleProp<ViewStyle>
}

const Container: React.FC<ContainerProps> = ({children, style}) : JSX.Element => {
    return (
        <View style={[styles.container, style]}>
            <>{children}</>
        </View>
    )
}

export default Container;