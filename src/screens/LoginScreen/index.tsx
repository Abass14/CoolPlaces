import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { colors } from "../../assets/colors";
import Button from "../../components/Button/Button";
import Container from "../../components/Container";
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomTextInput";
import IconView from "../../components/IconView";
import { HOME_SCREEN, SIGNUP_SCREEN } from "../../constants/constants";
import { styles } from "./styles";
type Errors = {
    email?: string,
    password?: string,
    others?: string
}
type LoginScreenProps = {
    navigation: NavigationProp<any, any>
}
const LoginScreen: React.FC<LoginScreenProps> = ({
    navigation
}): JSX.Element => {
    const { navigate, reset } = navigation;
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<Errors>({})

    return (
        <Container>
            <View style={styles.backBtnView}>
                <IconView
                    name="chevron-left"
                    color={colors.black}
                    onPress={() => { }}
                    style={styles.backBtn}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
                            <CustomText style={styles.loginText}>
                                Login
                            </CustomText>
                            <View style={{ backgroundColor: colors.light_red, borderRadius: 10, padding: 15 }}>
                                <CustomText type="hyperlink" onPress={() => { navigate(SIGNUP_SCREEN) }} style={styles.signUpTxt}>
                                    Sign Up
                                </CustomText>
                            </View>
                        </View>
                        <CustomTextInput
                            value={password}
                            onChangeText={(text) => { }}
                            rightIcon={"at"}
                            placeholder={"Email"}
                            containerStyle={styles.inputStyles}
                        />
                        <CustomTextInput
                            value={password}
                            onChangeText={(text) => { console.log(text, "<==password"); setPassword(text) }}
                            rightIcon={"lock"}
                            password={true}
                            placeholder={"Password"}
                            containerStyle={styles.inputStyles}
                        />
                        <View style={{ alignItems: 'flex-end', marginBottom: 20 }}>
                            <CustomText type="hyperlink" onPress={() => { }}>
                                Forgot Password?
                            </CustomText>
                        </View>
                        <Button
                            btnText="Login"
                            otherStyle={{ backgroundColor: colors.deep_blue, height: 50, marginBottom: 10 }}
                            onPress={() => { reset({
                                index: 0,
                                routes: [{name: HOME_SCREEN}]
                            }) }}
                        />
                        <CustomText style={{ alignSelf: 'center', marginBottom: 10 }}>OR</CustomText>
                    </View>
                    <View>
                        <Button
                            btnText="Login with Google"
                            otherStyle={{ backgroundColor: colors.light_blue, height: 50, marginBottom: 10 }}
                            onPress={() => { }}
                            iconName="google"
                            iconColor={colors.red}
                        />
                        <Button
                            btnText="Login with Facebook"
                            otherStyle={{ backgroundColor: colors.light_blue, height: 50, marginBottom: 10 }}
                            onPress={() => { }}
                            iconName="facebook"
                            iconColor={colors.deep_blue}
                        />
                        <Button
                            btnText="Login with Apple"
                            otherStyle={{ backgroundColor: colors.light_blue, height: 50, marginBottom: 10 }}
                            onPress={() => { }}
                            iconName="apple"
                            iconColor={colors.black}
                        />
                    </View>
                </View>
            </View>
        </Container>
    )
}

export default LoginScreen;