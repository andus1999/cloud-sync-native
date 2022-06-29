import React from 'react'
import { getDatabase, set, ref, onValue } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import SwitchItem from './SwitchItem'


const DeviceInteraction = ({ deviceData, networkId, mac }) => {

  const onChange = (route, value) => {
    const database = getDatabase()
    const cloudStateRef = ref(database, `networks/${networkId}/devices/${mac}/cloud_state/${route}`)
    set(cloudStateRef, value)
    const auth = getAuth();
    const lastUsedRef = ref(database, `users/${auth.currentUser.uid}/networks/${networkId}/last_used/${mac}`)
    set(lastUsedRef, Math.round(Date.now()))
  }

  return (
    <>{
      deviceData?.info.hardware_id == "esp8266_light_switch_module" &&
      <SwitchItem
        icon={deviceData.local_state.pin_0 == 0 ? 'lightbulb-outline' : 'lightbulb'}
        label={deviceData.local_state.pin_0 == 0 ? "Off" : "On"}
        value={deviceData.cloud_state.pin_0 == 1}
        onValueChange={() => onChange("pin_0", deviceData.cloud_state.pin_0 == 0 ? 1 : 0)}
      />
    }</>
  )
}

export default DeviceInteraction