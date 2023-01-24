import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { MapPinIcon } from 'react-native-heroicons/outline'

const ShopCard = ({
    id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat 
}) => {
  return (
    <TouchableOpacity className="bg-white shadow-sm mr-3">
          <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
          <View className="pb-4 px-3">
              <Text className="font-bold text-lg pt-2">{title}</Text>
              <View className="flex-row items-center space-x-1">
                  <StarIcon color="green" size={22} opacity={0.5} />
                  <StarIcon color="green" size={22} opacity={0.5} />
                  <StarIcon color="green" size={22} opacity={0.5} />
                  <Text className="text-gray-500 text-xs">
                      <Text className="text-green-500">{rating}</Text>
                      . {genre}
                  </Text>
              </View>
              <View className="flex-row space-x-1 items-center">
                  <MapPinIcon color="gray" size={22} opacity={0.4} />
                  <Text className="text-xs text-gray-500">nearby . {address}</Text>
              </View>
          </View>
    </TouchableOpacity>
  )
}

export default ShopCard