import {View, Text, ScrollView, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {icons, images} from "@/constants";
import InputField from "@/components/InputField";
import {useState} from "react";
import CustomButton from "@/components/CustomButton";
import {Link} from "expo-router";
import OAuth from "@/components/OAuth";
import {isLoaded} from "expo-font";

const SignUp = () => {

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [verification, setVerification] = useState({
        state: "default",
        error: "",
        code: ""
    });
    const onSignUpPress = async () => {
        if(!isLoaded) return;

    };

    return (
        <ScrollView className="flex-1 bg-white">
            <View className='flex-1 bg-white'>
                <View className="relative w-full h-[250px]">
                      <Image source={images.signUpCar} className="z-0 w-full h-[250px]"/>
                      <Text className="text-2xl text-black font-JakartaBold absolute bottom-5 left-5 ">
                          Create your account
                      </Text>
                </View>

                <View className="p-5">
                    <InputField
                        label="Name"
                        placeholder="Enter name"
                        icon={icons.person}
                        value={form.name}
                        onChangeText={(value) => setForm({ ...form, name: value })}
                    />

                    <InputField
                        label="Email"
                        placeholder="Enter your email"
                        icon={icons.email}
                        value={form.email}
                        onChangeText={(value) => setForm({ ...form, email: value })}
                    />

                    <InputField
                        label="Password"
                        placeholder="Enter your password"
                        icon={icons.lock}
                        secureTextEntry={true}
                        value={form.password}
                        onChangeText={(value) => setForm({ ...form, password: value })}
                    />

                    <CustomButton
                        title="Sign Up"
                        onPress={onSignUpPress}
                        className="mt-6"
                    />

                    <OAuth />

                    <Link href="/sign-in" className="text-lg text-center text-general-200 mt-10">
                        <Text>Already have an account? </Text>
                        <Text className="text-primary-500">
                            Log In
                        </Text>
                    </Link>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUp;
