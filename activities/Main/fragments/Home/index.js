import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../../../../styles/Colors'
import Styles from '../../../../styles/Styles'
import Card from '../../components/Card'
import IconLabel from '../../components/IconLabel'
import SwitchItem from '../../components/SwitchItem'
import Title from '../../components/Title'
import FragmentContainer from '../FragmentContainer'
import Recents from './components/Recents'

const Home = ({ user }) => {
  return (
    <FragmentContainer>
      <Title text="Home" icon="home" />
      <Recents />
    </FragmentContainer>
  )
}

export default Home