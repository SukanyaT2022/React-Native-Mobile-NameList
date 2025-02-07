import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'
import React from 'react'
export interface Student{
name: string,
age: number,
image: string
}
const IndividualRow = ({name, age, image}:Student) => {
  return (
    <View style={styles.oneCellContainer}>
    <Image style={styles.imageStyle} source={{uri:image }}/>
      <Text>{name}</Text>
      <Text>{age}</Text>

    </View>
  )
}

export default IndividualRow

const styles = StyleSheet.create({
oneCellContainer:{
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',

},
imageStyle:{
width:50,
height:50,
objectFit:'cover',
borderRadius:400,
}

})