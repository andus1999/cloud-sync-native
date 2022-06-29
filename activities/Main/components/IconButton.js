import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../../styles/Colors'
import Styles from '../../../styles/Styles'

const IconButton = ({ icon, onPress, color, size }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={icon} color={color} size={size} />
    </TouchableOpacity>
  )
}

IconButton.defaultProps = { size: 25, color: Colors.black }

export default IconButton