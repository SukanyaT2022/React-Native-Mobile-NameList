import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
interface Student{
name: string,
age: number,
image: string
}
const IndividualRow = ({name, age, image}:Student) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Image source={image as ImageSourcePropType}/>
    </View>
  )
}

export default IndividualRow

const styles = StyleSheet.create({})