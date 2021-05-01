import React from 'react';
import {Header} from 'react-native-elements'

const Myheader = props=>{
return(

<Header centerComponent={{text:props.title,style:{color:'blue',fontSize:20,fontWeight:'bold'}}}
backgroundColor='#ab15df'
/>


)
}

export default Myheader