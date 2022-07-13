import React, { useRef, useState } from "react";
import { Animated, FlatList, useWindowDimensions, View, ViewToken } from "react-native";
import { styles } from "./styles";
import { onboardingData } from '../../utils/OnboardingData'
import OnboardingView from "../OnboardingView";
import { OnboardingModel } from "../../models/OnboadingModel";
import Paginator from "../Paginator";
import CustomText from "../CustomText";
import Button from "../Button/Button";
import { colors } from "../../assets/colors";

type ViewItems = {
    viewableItems: Array<ViewToken>,
    changed?: Array<ViewToken>
}
type OnboardingSwipeProps = {
    navigate: () => void
}
const OnboardingSwipe: React.FC<OnboardingSwipeProps> = ({navigate}): JSX.Element => {

    const { height, width } = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current //horizonatl scroll position
    const [currentViewedIndex, setCurrentViewedIndex] = useState<number | null>(0)
    const [currentItem, setCurrentItem] = useState<OnboardingModel | null>(null)
    const viewableItemsChanged = useRef<(info: ViewItems) => void | null | undefined>(({ viewableItems }) => {
        setCurrentViewedIndex(viewableItems[0]?.index);
        setCurrentItem(viewableItems[0].item)
    }).current
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
    const slideRef = useRef<FlatList<OnboardingModel>>(null)

    const renderItem = (item: OnboardingModel) => {
        return (
            <View style={{ flex: 1, height: height, width: width }}>
                <OnboardingView
                    imageUrl={item.imageUrl}
                    title={item.title}
                    details={item.description}
                />
            </View>
        )
    }

    const scrollTo = () => {
        if (currentViewedIndex!! > 1) {
            navigate();
        } else {
            slideRef.current?.scrollToIndex({ index: currentViewedIndex!! + 1 })
        }
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={onboardingData}
                renderItem={(item) => renderItem(item.item)}
                keyExtractor={item => item.title}
                horizontal
                pagingEnabled
                bounces={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false
                })}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slideRef}
            />

            <View style={styles.paginator}>
                <Paginator data={onboardingData} scrollX={scrollX} />
            </View>

            {currentViewedIndex === 2 ? (
                <View style={styles.buttonView}>
                    <Button onPress={scrollTo} btnText={`${currentItem?.buttonText}`} />
                </View>
            ) : (
                <View style={styles.buttonView}>
                    <View>
                        <CustomText style={{ fontSize: 20, color: colors.deep_purple }} type="text">{`${currentItem?.buttonText}`}</CustomText>
                    </View>
                    <View>
                        <Button
                            type="circular"
                            onPress={scrollTo}
                        />
                    </View>
                </View>
            )}
        </View>
    )
}

export default OnboardingSwipe;