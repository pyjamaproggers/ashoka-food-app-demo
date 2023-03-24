import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useLayoutEffect } from 'react'
import { StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {

const navigation = useNavigation();

useLayoutEffect(()=>{
    navigation.setOptions({
        headerShown: false,
    })
}, [])
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
export default HomeScreen