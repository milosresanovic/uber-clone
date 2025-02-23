import {View} from "react-native";
import {Stack} from "expo-router";
import {useLocationStore} from "@/store";

const Layout = () => {

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="find-ride" options={{headerShown: false}} />
            <Stack.Screen name="confirm-ride" options={{headerShown: false}} />
            {/*<Stack.Screen name="book-ride" options={{headerShown: false}} />*/}
        </Stack>
    )

}

export default Layout;