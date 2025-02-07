import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import IndividualRow, { Student } from '../componentFolder/IndividualRow'

const SecondScreen = ({navigation}:any) => {
  const holdStudentData: Student[] = [
{
  name:"Henry",
  age: 5,
  image:"https://previews.123rf.com/images/denisnata/denisnata1108/denisnata110800139/10386992-portrait-of-happy-little-boy-over-white-background.jpg",
},
{
  name:"Harry",
  age: 10,
  image:"https://plus.unsplash.com/premium_photo-1664102191724-97e85d71a61a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJveXxlbnwwfHwwfHx8MA%3D%3D",
}

  ];
  return (
    <View>
      <Text>SecondScreen</Text>
       <TouchableOpacity onPress={()=>navigation.navigate("Home")}><Text>go to HomeScreen</Text></TouchableOpacity>
       <FlatList
       ItemSeparatorComponent={()=><View style={{marginTop:20,}}/>}
        data={holdStudentData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <IndividualRow name={item.name} age={item.age} image={item.image} />
        )}
      />
        
          
          </View>

  )
}

export default SecondScreen

const styles = StyleSheet.create({})