import { View, Text, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import AshokaLogo from '../assets/ASHOKAWHITELOGO.png';
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
} from "react-native-heroicons/outline" 
import {AdjustmentsIcon} from "react-native-heroicons/outline"
const HomeScreen = () => {

const navigation = useNavigation();

useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown: false,
    })
}, [])
  return (
    <SafeAreaView className="bg-white pt-5">
      <Text className="text-red-500">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image 
        source ={AshokaLogo} className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>

            <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color="black"/>
            </Text>
            </View>

        <UserIcon size={35} color = "#00CCBB" />
      </View>
      <View>
        <View>

        </View>
        
      </View>
    </Text>
  </SafeAreaView>
  )
}
export default HomeScreen