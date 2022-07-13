import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { colors } from "../../assets/colors";
import Button from "../../components/Button/Button";
import Container from "../../components/Container";
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomTextInput";
import IconView from "../../components/IconView";
import { styles } from "./styles";

type Errors = {
    email?: string,
    password?: string,
    name?: string,
    others?: string
}

type SignUpScreenProps = {
    navigation: NavigationProp<any, any>
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({
    navigation
}): JSX.Element => {

    const { navigate, reset, goBack } = navigation;
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState<Errors>({})
    return (
        <Container>
            <View style={styles.backBtnView}>
                    <IconView
                        name="chevron-left"
                        color={colors.black}
                        onPress={() => { goBack() }}
                        style={styles.backBtn}
                    />
                </View>
            <View style={styles.container}>
                
                <View style={styles.inputView}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
                        <CustomText style={styles.loginText}>
                            Sign Up
                        </CustomText>
                    </View>
                    <CustomTextInput
                        value={name}
                        onChangeText={(text) => { setName(text) }}
                        rightIcon={"user"}
                        placeholder={"Name"}
                        containerStyle={styles.inputStyles}
                        error={errors.name}
                    />
                    <CustomTextInput
                        value={email}
                        onChangeText={(text) => { setEmail(text) }}
                        rightIcon={"at"}
                        placeholder={"Email"}
                        containerStyle={styles.inputStyles}
                        error={errors.email}
                    />
                    <CustomTextInput
                        value={password}
                        onChangeText={(text) => { setPassword(text) }}
                        rightIcon={"lock"}
                        password={true}
                        placeholder={"Password"}
                        containerStyle={styles.inputStyles}
                        error={errors.password}
                    />
                    <View style={{ marginBottom: 30 }}>
                        <CustomText style={{alignSelf: 'center', textAlign: 'center'}} type="hyperlink" onPress={() => { }}>
                            By signing up, you are agreeing to our
                            <CustomText
                                type="hyperlink"
                                onPress={() => {}}
                                style={{color: colors.deep_blue, fontWeight: '700', marginLeft: 10, textAlign: 'center'}}
                            >
                                Terms & Conditions and Privacy Policy
                            </CustomText>
                        </CustomText>
                    </View>
                    <Button
                        btnText="Sign Up"
                        otherStyle={{ backgroundColor: colors.deep_blue, height: 50, marginBottom: 10 }}
                        onPress={() => { console.log(password, "<==final password") }}
                    />
                    <CustomText style={{ alignSelf: 'flex-end', marginBottom: 10 }}>
                        Got an account? 
                        <CustomText 
                            type="hyperlink"
                            onPress={() => { goBack() }}
                            style={{color: colors.deep_blue, fontWeight: '700', marginLeft: 10}}
                        >
                            Login
                        </CustomText>
                    </CustomText>
                </View>
            </View>
        </Container>
    )
}

export default SignUpScreen;