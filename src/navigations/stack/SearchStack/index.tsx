import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { POST_DETAILS, PROFILE, SEARCH } from "../../../constants/constants";
import PostDetails from "../../../screens/PostDetails";
import Search from "../../../screens/Search";
import ProfileScreen from "../../../screens/ProfileScreen";

type SearchParams = {
    SEARCH: undefined,
    PROFILE: undefined,
    POST_DETAILS: undefined,
}
const Stack = createStackNavigator<SearchParams>()

const SearchStack = (): JSX.Element => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,  //To remove all default toolbars on all Screens
                header: () => null
            }}
        >
            <Stack.Screen 
                name={SEARCH}
                component={Search}
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
                name={PROFILE}
                component={ProfileScreen}
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

export default SearchStack;