import React from "react";
import { Animated, Text, useWindowDimensions, View } from "react-native";
import { styles } from "./styles";

interface PaginatorProps {
    data: any[];
    scrollX: Animated.Value
}
const Paginator: React.FC<PaginatorProps> = ({data, scrollX}) : JSX.Element => {
    const { width } = useWindowDimensions();
    return (
        <View style={styles.container}>
            {data.map((data, index) => {
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 50, 10],
                    extrapolate: 'clamp'
                })
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp'
                })
                return <Animated.View key={index.toString()} style={[styles.dot, {width: dotWidth, opacity}]}></Animated.View>
            })}
        </View>
    )
}

export default Paginator;