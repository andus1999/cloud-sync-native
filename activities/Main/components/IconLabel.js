import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Styles from '../../../styles/Styles'
import Colors from '../../../styles/Colors'

const IconLabel = ({ text, icon, size }) => {
  return (
    <View style={{ paddingVertical: size / 1.5, paddingHorizontal: 10 }}>
      <View style={Styles.iconLabel}>
        <Icon name={icon} color={Colors.black} size={size} />
        <Text style={[Styles.sectionTitle, { fontSize: size - 3, fontWeight: size < 25 ? 'normal' : 'bold' }]}>
          {text}
        </Text>
      </View>
    </View>
  )
}

IconLabel.defaultProps = {
  size: 25
}

export default IconLabel