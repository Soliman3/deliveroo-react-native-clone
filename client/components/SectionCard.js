import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SectionCard = ({imgUrl, title}) => {
  return (
      <TouchableOpacity >
          <Image source={{uri: imgUrl}} className="h-20 w-20 rounded mb-2"/>
       <Text>{title}</Text>
    </TouchableOpacity>
  )
}

export default SectionCard