import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../../../styles/Colors'
import Styles from '../../../styles/Styles'

const Banner = () => {
  return (
    <View style={{ backgroundColor: Colors.primary }}>
      <Text style={[Styles.title, { color: Colors.white, margin: 40 }]}>
        Cloud Sync
      </Text>
    </View>
  )
}

export default Banner