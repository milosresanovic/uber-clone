import {View, Text, Image, TouchableOpacity} from "react-native";
import {DriverCardProps} from "@/types/type";
import {icons} from "@/constants";
import {formatTime} from "jest-util";

const DriverCard = (
    {
        item,
        selected,
        setSelected
    } : DriverCardProps
) => {
    return (
        <TouchableOpacity
            onPress={setSelected}
            className={`${
                selected === item.id ? "bg-general-600" : "bg-blue-100"
            } flex flex-row items-center justify-between py-5 px-3 rounded-xl mt-2`}
        >
            <Image
                source={{ uri: item.profile_image_url }}
                className="w-14 h-14 rounded-full"
            />

            <View className="flex-1 flex flex-col items-start justify-center mx-3">
                <View className="flex flex-row items-center justify-start mb-1">
                    <Text className="text-lg font-JakartaRegular">{item.title}</Text>

                    <View className="flex flex-row items-center space-x-1 ml-2">
                        <Image source={icons.star} className="w-3.5 h-3.5" />
                        <Text className="text-sm font-JakartaRegular">4</Text>
                    </View>
                </View>

                <View className="flex flex-row items-center justify-start">
                    <View className="flex flex-row items-center">
                        <Image source={icons.dollar} className="w-4 h-4" />
                        <Text className="text-sm font-JakartaRegular ml-1">
                            ${item.price}
                        </Text>
                    </View>

                    <Text className="text-sm font-JakartaRegular text-general-800 mx-1">
                        |
                    </Text>

                    <Text className="text-sm font-JakartaRegular text-general-800">
                        {/*{formatTime(item.time!)}*/} LMAO
                    </Text>

                    <Text className="text-sm font-JakartaRegular text-general-800 mx-1">
                        |
                    </Text>

                    <Text className="text-sm font-JakartaRegular text-general-800">
                        {item.car_seats} seats
                    </Text>
                </View>
            </View>

            <Image
                source={{ uri: item.car_image_url }}
                className="h-14 w-14"
                resizeMode="contain"
            />
        </TouchableOpacity>
    );
}

export default DriverCard;