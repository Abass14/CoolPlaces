import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { HOME_SCREEN, POST_DETAILS, POST_UPLOAD } from "../../../constants/constants";
import HomeScreen from "../../../screens/HomeScreen";
import PostDetails from "../../../screens/PostDetails";
import PostUpload from "../../../screens/PostUploadScreen";

type HomeStackParams = {
    HOME_SCREEN: undefined,
    POST_DETAILS: undefined,
    POST_UPLOAD: undefined,
}
const Stack = createStackNavigator<HomeStackParams>()

const HomeStack = (): JSX.Element => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,  //To remove all default toolbars on all Screens
                header: () => null
            }}
        >
            <Stack.Screen 
                name={HOME_SCREEN}
                component={HomeScreen}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
            <Stack.Screen 
                name={POST_DETAILS}
                component={PostDetails}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
            <Stack.Screen 
                name={POST_UPLOAD}
                component={PostUpload}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
            {/* <Stack.Screen 
                name={HOME_SCREEN}
                component={HomeScreen}
            /> */}
        </Stack.Navigator>
    )
}

export default HomeStack;