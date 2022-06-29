import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { getAuth, RecaptchaVerifier } from 'firebase/auth'
import { getDatabase, ref, onValue } from 'firebase/database'
import React from 'react'
import { Text } from 'react-native'
import Colors from '../../../../../styles/Colors'
import Styles from '../../../../../styles/Styles'
import Title from '../../../components/Title'
import FragmentContainer from '../../FragmentContainer'
import NetworkCard from '../components/NetworkCard'

const NetworksHome = ({ navigation }) => {
  const [networkCards, setNetworkCards] = React.useState([]);

  React.useEffect(() => {
    const auth = getAuth();
    const database = getDatabase();
    const networksRef = ref(database, 'users/' + auth.currentUser?.uid + '/networks');
    const unsub = onValue(networksRef, (snapshot) => {
      if (snapshot.exists()) {
        const cards = [];
        for (const [key, value] of Object.entries(snapshot.val())) {
          cards.push(<NetworkCard navigation={navigation} key={key} networkId={key} permissions={value.permissions} />);
        }
        setNetworkCards(cards);
      } else {
        setNetworkCards([]);
      }
    });
    return () => unsub();
  }, [])

  return (
    <FragmentContainer>
      <Title text="Networks" icon='cloud' />
      {networkCards ? networkCards :
        <Text style={[Styles.subtitle, { color: Colors.primary }]}>No networks available yet </Text>}
    </FragmentContainer>
  )
}

export default NetworksHome