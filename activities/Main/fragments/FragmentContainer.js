import React from 'react'
import { ScrollView, View } from 'react-native'
import Colors from '../../../styles/Colors'

const FragmentContainer = ({ children }) => {
  return (
    <ScrollView style={{ backgroundColor: Colors.white, padding: 10 }}>
      {children}
      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

export default FragmentContainer