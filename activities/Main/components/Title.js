import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Styles from '../../../styles/Styles'
import Colors from '../../../styles/Colors'


const Title = ({ text, icon }) => {
  return (
    <View style={[Styles.iconLabel, { justifyContent: 'center' }]}>
      <Icon name={icon} color={Colors.black} size={35} />
      <Text style={Styles.title}>
        {text}
      </Text>
    </View>
  )
}

export default Title