import React, { useState } from "react";
import { StyleProp, Text, TextInput, TextInputAndroidProps, TextInputIOSProps, View, ViewStyle } from "react-native";
import { colors } from "../../assets/colors";
import CustomText from "../CustomText";
import IconView from "../IconView";
import { styles } from "./styles";

type CustomTextInputProps = {
    rightIcon?: string,
    placeholder?: string,
    password?: boolean,
    onChangeText: (text: string) => void,
    value: string,
    textInputProps?: TextInputAndroidProps | TextInputIOSProps,
    error?: string | undefined,
    containerStyle?: StyleProp<ViewStyle>
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
    rightIcon = "",
    placeholder = "",
    password,
    onChangeText,
    value = "",
    textInputProps,
    error,
    containerStyle
}): JSX.Element => {
    const [valueText, setValueText] = useState(value)
    const [isPassword, setIsPassword] = useState(password)
    const [eyeIcon, setEyeIcon] = useState<"eye-slash" | "eye">("eye")

    const onChange = (text: string) => {
        onChangeText(text)
        setValueText(text)
    }

    const onEyePressed = () => {
        setIsPassword(prev => !prev)
        if (isPassword) {
            setEyeIcon("eye-slash")
        } else {
            setEyeIcon("eye")
        }
    }

    return (
        <View style={[{height: 50, width: '100%'}, containerStyle]}>
            <View style={styles.container}>
                {rightIcon.length ? (
                    <View style={styles.icon}>
                        <IconView
                            type="font-awesome"
                            name={rightIcon}
                            size={25}
                        />
                    </View>
                ) : null}
                <View style={styles.inputMainView}>
                    <TextInput
                        style={styles.input}
                        placeholder={placeholder}
                        secureTextEntry={isPassword}
                        onChangeText={onChange}
                        value={valueText}
                        {...textInputProps}
                    />
                    {(password !== undefined && password !== null) && (
                        <View style={styles.eyeIcon}>
                            <IconView
                                type="font-awesome"
                                name={eyeIcon}
                                onPress={onEyePressed}
                                size={25}
                            />
                        </View>
                    )}
                </View>
            </View>
            {error && <CustomText style={{color: colors.red, fontSize: 12}}>{error}</CustomText>}
        </View>
    )
}

export default CustomTextInput;