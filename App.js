// import ListItems from './Pracitice/ListItem.js';
// import Overlays from './Pracitice/Overlay.js'
import React,{Component} from 'react';
// import {View} from 'react-native'
// import CheckBoxs from './Pracitice/Checkboxdem.js';
 import TestPage from './Pracitice/Touchable.js';
 import {createStackNavigator } from 'react-navigation-stack';
 import {createAppContainer} from 'react-navigation';
 import Realtime from './Pracitice/Realtime.js';
 import DetailList from './Pracitice/DetailList.js';
 import EditBock  from './Pracitice/EditBock.js';
 import ImageUpload from './Pracitice/ImageUpload.js';
// import Map from './Pracitice/Maps.js';
//import Circle from './Pracitice/Circle.js';

const Stack = createStackNavigator({
Home:{
  screen: TestPage,
},
Second:
{
 screen:Realtime, 
},
Third:
{
  screen:DetailList,
},
EditBlog:
{
  screen: EditBock,
},
ImageUploade:
{
  screen: ImageUpload,
},

});
const AppContainer = createAppContainer(Stack);



export default class App extends Component 
{
  render()
  {
    return(
    
<AppContainer />
     

    );
  }
}