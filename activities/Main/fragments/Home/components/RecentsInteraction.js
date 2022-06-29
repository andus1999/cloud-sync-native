import { getDatabase, onValue, ref } from 'firebase/database';
import React from 'react'
import DeviceInteraction from '../../../components/DeviceInteraction';
import IconLabel from '../../../components/IconLabel';

const RecentsInteraction = ({ networkId, mac }) => {
  const [deviceData, setDeviceData] = React.useState(null)

  React.useEffect(() => {
    const database = getDatabase();
    const deviceDataRef = ref(database, `networks/${networkId}/devices/${mac}`)
    const unsub = onValue(deviceDataRef, (snapshot) => {
      if (snapshot.exists()) {
        setDeviceData(snapshot.val())
      }
    })
    return unsub
  }, [])

  return (
    <>{deviceData &&
      <>
        <IconLabel text={deviceData.info.name} icon={'devices'} size={18} />
        <DeviceInteraction deviceData={deviceData} mac={mac} networkId={networkId} />
      </>}</>
  )
}

export default RecentsInteraction