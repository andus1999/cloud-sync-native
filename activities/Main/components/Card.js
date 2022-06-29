import React from 'react'
import { View } from 'react-native'
import Styles from '../../../styles/Styles'

const Card = ({ children }) => {
  return (
    <View style={Styles.card}>
      {children}
    </View>
  )
}

export default Card