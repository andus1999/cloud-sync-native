import { getDatabase, onValue, ref } from 'firebase/database'
import React from 'react'
import Title from '../../../components/Title'
import FragmentContainer from '../../FragmentContainer'
import DeviceCard from '../components/DeviceCard'


const NetworkDashboard = ({ navigation, route }) => {

  const [deviceCards, setDeviceCards] = React.useState([])

  React.useEffect(() => {
    const database = getDatabase();
    const devicesRef = ref(database, `networks/${route.params.networkId}/devices`)
    const unsub = onValue(devicesRef, (snapshot) => {
      if (snapshot.exists()) {
        const cards = []
        for (const [key, val] of Object.entries(snapshot.val())) {
          cards.push(<DeviceCard deviceData={val} key={key} mac={key} networkId={route.params.networkId} />)
        }
        setDeviceCards(cards)
      }
    })
    return unsub
  }, [])

  return (
    <FragmentContainer>
      <Title icon='cloud' text={route.params.networkInfo.name} />
      {deviceCards}
    </FragmentContainer>
  )
}

export default NetworkDashboard