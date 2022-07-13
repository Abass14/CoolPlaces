import React from "react";
import { KeyboardAvoidingView, StyleProp, Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";

interface ContainerProps {
    children: React.ReactNode,
    style?: StyleProp<ViewStyle>
}

const Container: React.FC<ContainerProps> = ({children, style}) : JSX.Element => {
    return (
        <KeyboardAvoidingView behavior="padding" style={[styles.container, style]}>
            <>{children}</>
        </KeyboardAvoidingView>
    )
}

export default Container;