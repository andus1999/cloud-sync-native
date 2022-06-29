import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import Colors from '../../../styles/Colors'
import Styles from '../../../styles/Styles'

const Button = ({ text, onPress, size, outlined }) => {
  return (
    <TouchableOpacity style={outlined ? Styles.buttonOutlined : Styles.button} onPress={onPress}>
      <Text style={[outlined ? Styles.buttonTextOutlined : Styles.buttonText, { fontSize: size == 'small' ? 14 : 18 }]}>
        {text.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = { size: 'small', outlined: false }

export default Button