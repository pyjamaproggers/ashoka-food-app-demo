import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCards from './RestaurantCards'
import THC from '../assets/THC.jpg'
import SubwayIcon from '../assets/subwayicon.png'
import ChicagoPizzaIcon from '../assets/chicagopizzaicon.jpg'
import Dosai from '../assets/dosai.jpg'
import Dhaba from '../assets/dhaba.png'
const Restaurants = () => {
  return (
    <ScrollView>
      <Text className="font-bold text-2xl text-black p-2 pb-3">Restaurants</Text>
      <RestaurantCards name="The Hunger Cycle" image={THC}/>
      <RestaurantCards name="Chicago Pizza" image={ChicagoPizzaIcon}/>
      <RestaurantCards name="Subway" image={SubwayIcon}/>
      <RestaurantCards name="Dosai" image={Dosai}/>
      <RestaurantCards name="Dhaba" image={Dhaba}/>
    </ScrollView>
  )
}

export default Restaurants