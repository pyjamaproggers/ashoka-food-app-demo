import { View, Text } from 'react-native'
import React from 'react'

const CategoryCard = ({image, name}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default CategoryCard