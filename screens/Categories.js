import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import THC from '../assets/THC.jpg'
const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop:10,
    }}>
      <CategoryCard image={THC} name = "The Hunger Cycle"/>
      <CategoryCard image={THC} name = "Chicago Pizza"/>
      <CategoryCard image={THC} name = "Roti Boti"/>
      <CategoryCard image={THC} name = "Subway"/>
      <CategoryCard image={THC} name = "Rassananda"/>
    </ScrollView>
  )
}

export default Categories