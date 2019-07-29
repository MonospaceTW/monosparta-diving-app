import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Text,
  Button,
  SafeAreaView
} from 'react-native';
import { WebBrowser } from 'expo-web-browser';

import Colors from '../config/color';
import Styles from '../config/style';
import Images from '../config/images'
import Api from '../config/api'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: Colors.white
  },
  img: {
    width: '100%',
    height: 200,
    marginTop: 20,
    marginBottom: 15
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15
  }
})
export default class Article extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      article:
      {
        img: Images.recImg,
        title: '這是一個文章標題',
        content: '這是文章內容，如果超出2行將不顯示，這是文章內容，如果超出2行將不顯示，這是文章內容，如果超出2行將不顯示，'
      }
    }
  }

  static navigationOptions = {
    title: '探索知識',

    headerTitleStyle: {
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: '#545454'
    },
  };

  onOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://expo.io');
  }
  onOpenBTWeb =()=>{
    WebBrowser.openBrowserAsync('https://bluetrend.media/');
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={Styles.container}>
        <View style={Styles.bodyContent}>
          <Image source={Images.recImg} style={styles.img} />
          <Text style={Styles.title}>你想學潛水？7件學潛水前必須先了解的事！</Text>
          <View style={styles.info}>
            <Text>by</Text>
            <Text>date:</Text>
          </View>
          <View style={Styles.content}>
            <Text>商品的品質決定商品的價格這是千古不變的定律 潛水也是一個服務，也是一個商品，它並不是一個非營利組織或某種神秘宗教，有多少教練跟店家需要仰賴潛水產業維生。如果潛水是一個商品，便可以套用一般的商業邏輯來解釋他，但如果要使用海編大學主修的經濟學理論，譬如供給與需求理論、邊際理論…巴拉巴拉巴拉，相信一般人應該會聽到頭髮打結。 我們就用麵線來比喻吧！ 以一個平民小吃麵線做比方好了，25元的價格可能只買到一碗清麵線；45元的價格可能是大腸蚵仔麵線，但都叫麵線… 一樣的大腸蚵仔麵線45-60都有，但差距可能就在配料的多寡還有口味的差異，但你不可能期望在60元的麵線裡有龍蝦和鮑魚。 而另一個重點於”划算vs品質“。 如果消費者只需果腹，那他花50元吃二碗清麵線是划算的，但如果追求美味或許一碗80元的麵線可以給你的味蕾更豐富的滿足。當然好不好吃畢竟吃了才知道，沒吃過前也許做些功課從消費者回饋的口碑來選擇。但台灣人近年來過度追求高CP值，其實也無形中扼殺了很多辛苦提供服務的產業。 麵線會降價嗎？如果要維持原本的用料水準能降的只有利潤了。 門庭若市的X宗麵線不會降價，只有門可羅雀的小店才可能用降價來吸引消費者，然而這降的是用料還是利潤呢？如果降的是利潤那必須提升更多的來客數才能維持開銷，即使只是降5元那可能是50%的利潤了，而來客數即使倍增也僅是維持原先的收入，更何況能否供應足夠座位或產能才是大問題。 觀察一下降價的麵線有變稀嗎? 講了這麼多麵線肚子都餓了，但這跟如何選擇潛水課程有何干係？！？！ 畢竟在面臨選擇的入門新手們對課程內容並不明白，當然是最好由前人口碑來做為參考依據，但還是有些選項可以參考。 以下的建議沒有絕對對錯，單純是海編們尚淺的潛水生涯中，與很多前輩、潛店請益後得到的心得，有許多教練/店家提供的隱性服務無法單純用短短篇幅歸納，譬如上岸後教練貼心的提供熱茶或毛巾、生日的時候送個海蛞蝓吊飾給學生等，這些都是屬於無法量化的隱性服務喔！ 所以，在決定教練/店家之前，花點時間上網做功課或詢問身邊朋友推薦，便是找到最適合自己學習方式的必要功課喔！</Text>          
          </View>
          <Text>文章分類</Text>
          <Button title="#知識" />
          <Text>文章來源</Text>
          <Text onPress={this.onOpenWithWebBrowser}>傳送門</Text>
          <Text>想看更多？試試這裡吧！</Text>
          <TouchableOpacity onPress={this.onOpenBTWeb}>
          <Image source={Images.BT_logo} />
          </TouchableOpacity>

        </View>
      </ScrollView>
      </SafeAreaView>
    )
  }
}
