import React from 'react'
import { Switch, View, Text } from 'react-native'
import Styles from '../../../styles/Styles'
import Colors from '../../../styles/Colors'
import Icon from 'react-native-vector-icons/MaterialIcons'

const SwitchItem = ({ label, value, disabled, onValueChange, icon }) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
    }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name={icon} color={Colors.black} size={25} style={{ marginRight: 10 }} />
        <Text style={Styles.text}>
          {label}
        </Text>
      </View>

      <Switch
        trackColor={{ false: Colors.lightGray, true: Colors.primaryLight }}
        thumbColor={value ? Colors.primary : Colors.white}
        value={value}
        disabled={disabled}
        onValueChange={onValueChange} />
    </View>
  )
}

export default SwitchItem