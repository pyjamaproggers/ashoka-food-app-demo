import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import AshokaLogo from '../assets/ASHOKAWHITELOGO.png';
import Categories from './Categories';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline" 
import Restaurants from './Restaurants';

const HomeScreen = () => {

const navigation = useNavigation();

useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown: false,
    })
}, [])
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={AshokaLogo}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* search */}
      <View className="flex-row item-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Where would you like to order from?"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/* Body */}

      <ScrollView className="bg-white"
      contentContainerStyle={{
        paddingBottom:100,
      }}>
      
      <Categories/>
      <Restaurants/>
      </ScrollView>
  </SafeAreaView>
  )
}
export default HomeScreen