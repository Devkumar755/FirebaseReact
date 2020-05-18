import React,{Component} from 'react';
import {View,Text,CheckBox,StyleSheet,FlatList,TouchableHighlight,ImageBackground, TouchableOpacity} from 'react-native';
//import { CheckBox } from 'react-native-elements';
import {Card} from 'react-native-shadow-cards';
import { ListItem } from 'react-native-elements'
const list = [
    {
      name: 'Kevin ',
      id:0,
      checked:false
    },
    {
      name: 'John',
      id:1,
      checked:false
    },
    {
      name: 'Mark',
      id:2,
      checked:false
    },
  ]
  

export default class NewListitem extends Component {
    constructor(props) {
      super(props)
      this.state = {
        checked: false,
        list: list
      }
    }
  
  keyExtractor = (item, index) => index.toString()
  
  checkThisBox=(itemID)=>{
     let list = this.state.list
     list[itemID].checked =! list[itemID].checked
     this.setState({list:list})
  }
  
  renderItem = ({ item }) => (
    <TouchableHighlight
    onPress={() => this.checkThisBox(item.id)}>
    <ListItem
      containerStyle={styles.cardStyle}
      title={<View><Text>{item.name}</Text></View>}
      rightAvatar={
        <View style={{marginRight:20}}>
        <CheckBox
          checked={this.state.list[item.id].checked}
          onPress={() => this.checkThisBox(item.id)}
        />
        </View>
      }
      >
      </ListItem>
      </TouchableHighlight>
  
  )
    render() {
    return(
        <View style={styles.container}>
            <FlatList
                 keyExtractor={this.keyExtractor}
                 data={this.state.list}
                 renderItem={this.renderItem}
                 extraData={this.state}
               />
        </View>
     
      )
    };
  }
  const styles = StyleSheet.create({


    
  })