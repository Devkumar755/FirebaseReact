import React,{Component} from 'react'
import {View,Text} from 'react-native'
import { Overlay} from 'react-native-elements'

export default class Overlays extends Component 
{
    constructor()
    {
        super();
        this.state = 
        {
            isVisible: true,
        }
    }

    render()
    {
        return(
         <>

<Overlay isVisible={this.state.isVisible}>
  <Text>Hello from Overlay!</Text>
</Overlay>

{
  this.state.visible && (
    <Overlay isVisible>
      <Text>Hello from Overlay!</Text>
    </Overlay>
  )
}
<Overlay
 
  windowBackgroundColor="rgba(255, 255, 255, .5)"
  overlayBackgroundColor="green"
  width="auto"
  height="auto"
>
  <Text>Hello from Overlay!</Text>
</Overlay>
           
           <Overlay
           isVisible={this.state.isVisible}
           onBackdropPress={() => this.setState({ isVisible: false })}
         >
           <Text>Hello from Overlay!</Text>
         </Overlay> 
       
</>

        );
  

    
    }
}