import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SectionCard = ({imgUrl, title}) => {
  return (
      <TouchableOpacity className="relative mr-2">
          <Image source={{uri: imgUrl}} className="h-20 w-20 rounded mb-2"/>
       <Text className="absolute bottom-3 left-2 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default SectionCard