import {View, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Redirect} from "expo-router";

const Home = () => {
    return <Redirect href="/(auth)/welcome" />

    // return(
    //     <SafeAreaView style={{backgroundColor: "black"}}>
    //         <Text style={{color: "white"}}>HOME</Text>
    //     </SafeAreaView>
    // )
}

export default Home;