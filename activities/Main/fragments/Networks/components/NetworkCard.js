import IconButton from '../../../components/IconButton'
import { getAuth } from 'firebase/auth'
import { getDatabase, onValue, ref } from 'firebase/database'
import React from 'react'
import { Text, View } from 'react-native'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import IconLabel from '../../../components/IconLabel'

const NetworkCard = ({ networkId, permissions, navigation }) => {
  const [networkInfo, setNetworkInfo] = React.useState(null)

  React.useEffect(() => {
    const database = getDatabase();
    const networkInfoRef = ref(database, `networks/${networkId}/info`);
    const unsub = onValue(networkInfoRef, (snapshot) => {
      if (snapshot.exists()) {
        setNetworkInfo(snapshot.val());
      }
    })
    return () => unsub()
  }, [])
  return (
    networkInfo ? <Card>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <IconLabel text={networkInfo.name} icon="cloud" />
        <IconButton icon='edit' />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <IconLabel text={`${networkInfo.size} Devices`} icon="devices" size={18} />
        <IconLabel text={permissions == 'admin' ? "Admin" : "User"} icon={permissions == 'admin' ? 'security' : 'person'} size={18} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Button text="Dashboard" onPress={() => navigation.navigate('NetworkDashboard', { networkInfo, networkId })} />
        <Button text="Add Device" />
      </View>
    </Card> : <></>

  )
}

export default NetworkCard