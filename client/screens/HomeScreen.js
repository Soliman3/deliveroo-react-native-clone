import { View, Text, SafeAreaView, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  },[])

  return (
    <SafeAreaView className="bg-white pt-5 h-20">
      <Text className="text-red-500">
        {/* header */}
        <View className="flex-row items-center pb-3 mx-4 space-x-2">
          <Image source={{ uri: "https://links.papareact.com/wru" }} className="h-7 w-7 bg-gray-300 p-4 ml-4 rounded-full" />
          <View className="flex-1">
            <Text className="font-bold text-gray-300 text-xs">Delivery Now</Text>
            <Text className="font-bold text-xl">Current Location
              <ChevronDownIcon size={20} />
            </Text>
          </View>
          <UserIcon size={35}/>
        </View>
      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen