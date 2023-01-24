import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Sections from '../components/Sections';
import FeatureRow from '../components/FeatureRow';

const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  },[])

  return (
    <SafeAreaView className="bg-white pt-5 ">
      <View className="text-red-500">
        {/* header */}
        <View className="flex-row items-center pb-3 mx-4 space-x-2">
          <Image source={{ uri: "https://links.papareact.com/wru" }} className="h-7 w-7 bg-gray-300 p-4  rounded-full" />
          <View className="flex-1">
            <Text className="font-bold text-gray-300 text-xs">Delivery Now</Text>
            <Text className="font-bold text-xl">Current Location
              <ChevronDownIcon size={20} />
            </Text>
          </View>
          <UserIcon size={35}/>
        </View>
        {/* searchBar */}
        <View className="flex-row pb-2 space-x-2 mx-4 items-center">
          <View className="flex-row bg-gray-200 p-3 space-x-2 flex-1">
            <MagnifyingGlassIcon size={20} color="gray"/>
            <TextInput placeholder='Find your dish' keyboardType='default'/>
          </View>
          <AdjustmentsVerticalIcon />
          
        </View>
        {/* scrollable Body */}
        <ScrollView className="bg-gray-100" contentContainerStyle={{ paddingBottom: 240 }}>

          {/* Sections */}
          <Sections/>
          {/* Feature row */}
          <FeatureRow
            id="1"
            title="Featured"
            description="Paid placement for our partner"
            featuredCategory="Featured"
          />
          <FeatureRow
            id="2"
            title="Tasty Discounts"
            description="Everyone has been enjoing these juicy discounts"
            featuredCategory="discounts"
          />
          <FeatureRow
            id="3"
            title="Offers near you!"
            description="Why not support your local restaurant today!!"
            featuredCategory="offers  "
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen