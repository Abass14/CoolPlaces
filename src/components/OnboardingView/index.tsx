import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import { styles } from "./styles";
import { Icon } from "react-native-elements"

interface OnboardingViewProps {
    imageUrl?: string,
    title?: string,
    details?: string,
    btnText?: string,
    isLastPage?: boolean
}
const OnboardingView: React.FC<OnboardingViewProps> = ({
    imageUrl,
    title = "",
    details = "",
    btnText = "",
    isLastPage = false
}): JSX.Element => {
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: imageUrl }} style={styles.viewOne} />
            <View style={styles.viewTwo}>
                <View style={styles.details}>
                    <CustomText type="text" style={styles.title}>{title}</CustomText>
                    <CustomText type="text" style={styles.detailsTxt}>{details}</CustomText>
                </View>
                <View style={styles.buttonView}>
                    {!isLastPage ? (
                        <TouchableOpacity style={styles.getStartedBtn}>
                            <CustomText type="text" style={styles.btnTxt}>{btnText}</CustomText>
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.rowView}>
                            <CustomText
                                type="hyperlink"
                                onPress={() => { }}
                            >
                                {btnText}
                            </CustomText>
                            <TouchableOpacity
                                style={styles.nextBtn}>
                                <View style={styles.roundView}>
                                    <Icon
                                        type="material"
                                        name="chevron-right"
                                        size={30}
                                        tvParallaxProperties
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        </View>
    )
}

export default OnboardingView;