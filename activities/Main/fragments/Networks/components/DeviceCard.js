import React from 'react'
import { Text, View } from 'react-native'

import Card from '../../../components/Card'
import DeviceInteraction from '../../../components/DeviceInteraction'
import IconButton from '../../../components/IconButton'
import IconLabel from '../../../components/IconLabel'

const DeviceCard = ({ deviceData, networkId, mac }) => {
  return (
    <Card>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <IconLabel text={deviceData.info.name} icon="devices" size={18} />
        <IconButton icon="edit" size={20} />
      </View>
      <DeviceInteraction deviceData={deviceData} networkId={networkId} mac={mac} />
    </Card>
  )
}

export default DeviceCard