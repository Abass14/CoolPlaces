
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { colors } from "../../assets/colors";
import IconView from "../../components/IconView";
import { CHAT_STACK, FAVORITES_STACK, HOME_STACK, PROFILE_STACK, SEARCH_STACK } from "../../constants/constants";
import ChatStack from "../stack/ChatStack";
import FavoriteStack from "../stack/FavoriteStack";
import HomeStack from "../stack/HomeStack";
import SearchStack from "../stack/SearchStack";


const Tab = createBottomTabNavigator()
const BottomTab = (): JSX.Element => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    focused ? color = colors.black : colors.grey
                    focused ? size = 35 : 30
                    if (route.name === HOME_STACK) {
                        return <IconView name="home" color={color} size={size}/>
                    } else if (route.name === SEARCH_STACK) {
                        return <IconView name="magnify" color={color} size={size}/>
                    } else if (route.name === FAVORITES_STACK) {
                        return <IconView name="heart-outline" color={color} size={size}/>
                    } else if (route.name === CHAT_STACK) {
                        return <IconView name="chat-processing-outline" color={color} size={size}/>
                    } else {
                        return <IconView name="account-circle-outline" color={color} size={size}/>
                    }
                }
            })}
        >
            <Tab.Screen 
                name={HOME_STACK}
                component={HomeStack}
                options={{
                    header: () => null,
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen 
                name={SEARCH_STACK}
                component={SearchStack}
                options={{
                    header: () => null,
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen 
                name={FAVORITES_STACK}
                component={FavoriteStack}
                options={{
                    header: () => null,
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen 
                name={CHAT_STACK}
                component={ChatStack}
                options={{
                    header: () => null,
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen 
                name={PROFILE_STACK}
                component={HomeStack}
                options={{
                    header: () => null,
                    tabBarShowLabel: false
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTab;