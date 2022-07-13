import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { CHATS_SCREEN } from "../../../constants/constants";
import HomeScreen from "../../../screens/HomeScreen";
import ChatScreen from "../../../screens/Chat";

type ChatStackParams = {
    CHAT_SCREEN: undefined,
}
const Stack = createStackNavigator<ChatStackParams>()

const ChatStack = (): JSX.Element => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,  //To remove all default toolbars on all Screens
                header: () => null
            }}
        >
            <Stack.Screen 
                name={CHATS_SCREEN}
                component={ChatScreen}
                options={{
                    headerShown: false,
                    header: () => null
                }}
            />
        </Stack.Navigator>
    )
}

export default ChatStack;