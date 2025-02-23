import {View, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Redirect} from "expo-router";
import 'react-native-get-random-values';

const Home = () => {
    return <Redirect href="(root)/(tabs)/home" />

    // return(
    //     <SafeAreaView style={{backgroundColor: "black"}}>
    //         <Text style={{color: "white"}}>HOME</Text>
    //     </SafeAreaView>
    // )
}

export default Home;