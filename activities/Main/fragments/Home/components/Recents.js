import React from 'react'
import Card from '../../../components/Card'
import SwitchItem from '../../../components/SwitchItem'
import IconLabel from '../../../components/IconLabel'
import { get, getDatabase, onValue, ref } from 'firebase/database'
import { getAuth } from 'firebase/auth'
import { snackbarClasses } from '@mui/material'
import DeviceInteraction from '../../../components/DeviceInteraction'
import RecentsInteraction from './RecentsInteraction'

const Recents = () => {

  const [recents, setRecents] = React.useState([]);

  React.useEffect(() => {
    const database = getDatabase();
    const auth = getAuth();
    const networksRef = ref(database, `users/${auth.currentUser.uid}/networks`)
    const getData = async () => {
      const snapshot = await get(networksRef)
      if (snapshot.exists()) {
        const data = []
        for (const [networkId, val] of Object.entries(snapshot.val())) {
          for (const [mac, timestamp] of Object.entries(val.last_used)) {
            data.push({ networkId, mac, timestamp })
          }
        }
        setRecents(data.sort((a, b) => b.timestamp - a.timestamp).slice(0, 3)
          .map((it) => <RecentsInteraction networkId={it.networkId} mac={it.mac} key={it.mac} />))
      }
    }
    getData();

  }, [])

  return (
    <Card>
      <IconLabel text="Recent" icon='history' />
      {recents}
    </Card>
  )
}

export default Recents