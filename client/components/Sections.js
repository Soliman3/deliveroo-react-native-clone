import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SectionCard from './SectionCard'

const Sections = () => {
  return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10,}}>
          <SectionCard imgUrl='https://links.papareact.com/wru' title='test img1'/>
        <SectionCard imgUrl='https://links.papareact.com/wru' title='test img2'/>
        <SectionCard imgUrl='https://links.papareact.com/wru' title='test img3'/>
        <SectionCard imgUrl='https://links.papareact.com/wru' title='test img4'/>
        <SectionCard imgUrl='https://links.papareact.com/wru' title='test img5'/>
        <SectionCard imgUrl='https://links.papareact.com/wru' title='test img6'/>
    </ScrollView>
  )
}

export default Sections