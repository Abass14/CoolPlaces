import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FAVORITES_SCREEN } from "../../../constants/constants";
import Favorites from "../../../screens/Favorites";

type FavoritesParams = {
    FAVORITES_SCREEN: undefined,
}
const Stack = createStackNavigator<FavoritesParams>()

const FavoriteStack = (): JSX.Element => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,  //To remove all default toolbars on all Screens
                header: () => null
            }}
        >
            <Stack.Screen 
                name={FAVORITES_SCREEN}
                component={Favorites}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
        </Stack.Navigator>
    )
}

export default FavoriteStack;