import {View, Text} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useLocationStore} from "@/store";
import RideLayout from "@/components/RideLayout";
import GoogleTextInput from "@/components/GoogleTextInput";
import {icons} from "@/constants";
import CustomButton from "@/components/CustomButton";
import {router} from "expo-router";

const FindRide = () => {

    const {
        userAddress,
        destinationAddress,
        setDestinationAddress,
        setUserLocation
    } = useLocationStore();

    return (
        <RideLayout title="Ride" snapPoints={["85%"]}>
            <View className="my-3">
                <Text className="text-lg font-JakartaSemiBold mb-3">From</Text>
                <GoogleTextInput
                    icon={icons.target}
                    initialLocation={userAddress}
                    containerStyle="bg-neutral-100"
                    textInputBackgroundColor="#f5f5f5"
                    handlePress={(location) => setUserLocation(location)}
                />
            </View>
            <View className="my-3">
                <Text className="text-lg font-JakartaSemiBold mb-3">To</Text>
                <GoogleTextInput
                    icon={icons.map}
                    initialLocation={destinationAddress}
                    containerStyle="bg-neutral-100"
                    textInputBackgroundColor="transparent"
                    handlePress={(location) => setDestinationAddress(location)}
                />
            </View>

            <CustomButton
                className="mt-5"
                title="Find now"
                onPress={() => router.push("/(root)/confirm-ride")}
            />
        </RideLayout>
    )
}

export default  FindRide;