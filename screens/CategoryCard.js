import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({image, name}) => {
  return (
    <TouchableOpacity>
        <Image source={image} className="h-20 w-20 rounded bg-white"/>
      <Text>{name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard