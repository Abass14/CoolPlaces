import React from "react";
import { ImageBackground, View } from "react-native";
import CustomText from "../CustomText";
import { styles } from "./styles";
import { onboardingData } from "../../utils/OnboardingData";

interface OnboardingViewProps {
    imageUrl?: string,
    title?: string,
    details?: string,
}
const OnboardingView: React.FC<OnboardingViewProps> = ({
    imageUrl = onboardingData[0].imageUrl,
    title = "",
    details = "",
}): JSX.Element => {
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.viewOne} />
            <View style={styles.viewTwo}>
                <View style={styles.details}>
                    <CustomText type="text" style={styles.title}>{title}</CustomText>
                    <CustomText type="text" style={styles.detailsTxt}>{details}</CustomText>
                </View>
            </View>
        </View>
    )
}

export default OnboardingView;