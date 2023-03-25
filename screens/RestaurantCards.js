import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const RestaurantCards = ({name, image}) => {
  return (
    <TouchableOpacity>
        <Image style={{
            alignSelf: 'center',
            height: 150,
            width: 150,
            borderWidth: 1,
        }} source= {image}/>
      <Text className="font-semibold text-xl p-3 font-mono">{name}</Text>
    </TouchableOpacity>
  )
}

export default RestaurantCards