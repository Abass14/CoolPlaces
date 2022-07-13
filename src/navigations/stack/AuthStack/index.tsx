import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FORGOT_PASSWORD, HOME_SCREEN, LOGIN_SCREEN, ONBOARDING, RESET_PASSWORD, SIGNUP_SCREEN } from "../../../constants/constants";
import OnboardingScreen from "../../../screens/OnboardingScreen";
import LoginScreen from "../../../screens/LoginScreen";
import SignUpScreen from "../../../screens/SignUpScreen";
import ForgotPasswordScreen from "../../../screens/ForgotPasswordScreen";
import ResetPassword from "../../../screens/ResetPasswordScreen";
import BottomTab from "../../bottom/BottomTap";

type AuthStackParams = {
    ONBOARDING: undefined,
    LOGIN_SCREEN: undefined,
    SIGNUP_SCREEN: undefined,
    FORGOT_PASSWORD: undefined,
    RESET_PASSWORD: undefined,
    HOME_SCREEN: undefined
}
const Stack = createStackNavigator<AuthStackParams>()

const AuthStack = (): JSX.Element => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,  //To remove all default toolbars on all Screens
                header: () => null
            }}
        >
            <Stack.Screen 
                name={ONBOARDING}
                component={OnboardingScreen}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
            <Stack.Screen 
                name={LOGIN_SCREEN}
                component={LoginScreen}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
            <Stack.Screen 
                name={SIGNUP_SCREEN}
                component={SignUpScreen}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
            <Stack.Screen 
                name={FORGOT_PASSWORD}
                component={ForgotPasswordScreen}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
             <Stack.Screen 
                name={RESET_PASSWORD}
                component={ResetPassword}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
            <Stack.Screen 
                name={HOME_SCREEN}
                component={BottomTab}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthStack;