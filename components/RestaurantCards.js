import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const RestaurantCards = ({name, image}) => {
  return (
    <TouchableOpacity className="border-4 border-gray-300 mb-2 rounded-xl mx-4 ">
        <Image style={{
            alignSelf: 'center',
            height: 150,
            width: 150,
            marginTop: 10
        }} source= {image}/>
      <Text className="font-semibold text-xl p-3 font-mono">{name}</Text>
    </TouchableOpacity>
  )
}

export default RestaurantCards