import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Home = ({navigation}:any) => {
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("SecondScreen")}><Text>go to second screen</Text></TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})