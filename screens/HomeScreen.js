import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {

const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text classname="text-red-500">Ira Thamman is GORGEOUS!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
export default HomeScreen