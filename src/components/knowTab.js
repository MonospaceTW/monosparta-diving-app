import React, { Component } from 'react';
import {
 View,
 ScrollView,
 FlatList,
 StyleSheet,
 TouchableOpacity,
 Image,
 Dimensions,
 Text
} from 'react-native';
import {
 Card,
 CardItem,
 Tab,
 Tabs
} from 'native-base';

export default class KnowTab extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
  }
 }
 keyExtractor = (item, index) => { return index.toString() };
 componentDidMount = async () => {
  try {
    let response = await fetch(Api.url + `article`);
    let responseValue = await response.json();
    this.setState({
      responseValue: responseValue.item
    })
  }
  catch (err) {
    console.log('err:', err)
  }
}


 renderItem = ({ item }) => {
   return (

     <TouchableOpacity style={styles.cardContainer}>
       <Card>
         <CardItem cardBody>
           <Image source={{ uri: item.imgs }} style={styles.spotImg} />
         </CardItem>
         <CardItem>
           <Text style={styles.articleTxt}>{item.title}</Text>
         </CardItem>
         <CardItem>
           <Text numberOfLines={2}>{item.content}</Text>
         </CardItem>
       </Card>
     </TouchableOpacity>

   )
 };

 render() {
  return (
   <View>
    <FlatList
     data={this.state.responseValue}
     renderItem={this.renderItem}
     keyExtractor={this.keyExtractor}
    />
   </View>
  )
 }
}
