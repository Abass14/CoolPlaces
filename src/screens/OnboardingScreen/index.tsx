import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import OnboardingSwipe from "../../components/OboardingSwipe";
import { AUTH_STACK, HOME_SCREEN, HOME_STACK, LOGIN_SCREEN } from "../../constants/constants";
import { styles } from "./styles";

type OnboardingScreenProps = {
    navigation: NavigationProp<any, any>
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({navigation}) : JSX.Element => {
    const { navigate, reset } = navigation;
    const navigateToHome = () => {
        reset({index: 0, routes: [{name: LOGIN_SCREEN}]})
    }
    return (
        <View style={styles.container}>
            <OnboardingSwipe navigate={navigateToHome} />
        </View>
    )
}

export default OnboardingScreen;