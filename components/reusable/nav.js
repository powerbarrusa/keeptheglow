import React, {Component} from 'react'
import { Text, View } from 'react-native'
import NavItem from './navItem.js'
import Styles from '../styles.js'

class BottomNav extends Component {

  constructor(props){
    super(props)
  }

  render() {

    return (
      <View style={Styles.navigation}>
        <NavItem
          src={require('../../assets/img/couple.png')}
          press='User'
          nav={this.props.nav}/>
        <NavItem
          src={require('../../assets/img/feedback.png')}
<<<<<<< HEAD
=======
          press='ReceiveFeedback'
          nav={this.props.nav}/>
        <NavItem
          src={require('../../assets/img/progress.png')}
>>>>>>> ce698639841d18470ba95effe726a23af1eadffd
          press='Progress'
          nav={this.props.nav}/>
        <NavItem
          src={require('../../assets/img/settings.png')}
          press='Settings'
          nav={this.props.nav}/>
      </View>
    )
  }
}

export default BottomNav
