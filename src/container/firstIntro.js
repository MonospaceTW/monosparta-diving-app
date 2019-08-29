import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    Modal
} from 'react-native'

import Swiper from 'react-native-swiper';
import Images from '../config/images';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    wrapper: {
        height: height,
        width: width,
        alignItems: 'center'
    },
    img: {
        height: width * 0.7,
        width: width * 0.7,
        top: height * 0.15
    },
    txt: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        top: height * 0.65
    },
    skipContainer: {
        width: 50,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: height * 0.9,
        left: width * 0.035
    },
    doneContainer: {
        width: 55,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: height * 0.9,
        right: width * 0.035
    },
    btnTxt: {
        color: 'white',
        fontWeight: 'bold', 
        fontSize: 20
    }
})

export default class FirstIntro extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal
                visible={this.props.showModal}
            >
                <Swiper
                    style={styles.wrapper}
                    containerStyle={styles.wrapper}
                    showsButtons={false}
                    loop={false}
                    dot={
                        <View style={{ backgroundColor: 'white', width: 8, height: 8, borderRadius: 4, marginLeft: 4, marginRight: 4, marginTop: 4, marginBottom: 4 }} />
                    }
                >
                    <View style={{flex:1, backgroundColor: '#049DE3', alignItems: 'center'}}>
                        <Image style={styles.img} source={Images.intro1} />
                        <Text style={styles.txt}>探索全台潛點</Text>
                        <TouchableOpacity onPress={this.props.onClick} style={styles.skipContainer}>
                            <Text style={styles.btnTxt}>SKIP</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{flex:1, backgroundColor: '#065691', alignItems: 'center'}}>
                        <Image style={styles.img} source={Images.intro2} />
                        <Text style={styles.txt}>體驗最棒潛店</Text>
                        <TouchableOpacity onPress={this.props.onClick} style={styles.skipContainer}>
                            <Text style={styles.btnTxt}>SKIP</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{flex:1, backgroundColor: '#4770B5', alignItems: 'center'}}>
                        <Image style={styles.img} source={Images.intro3} />
                        <Text style={styles.txt}>蒐集最佳裝備</Text>
                        <TouchableOpacity onPress={this.props.onClick} style={styles.skipContainer}>
                            <Text style={styles.btnTxt}>SKIP</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{flex:1, backgroundColor: '#1E9990', alignItems: 'center'}}>
                        <Image style={styles.img} source={Images.intro4} />
                        <Text style={styles.txt}>享受潛水無負擔！</Text>
                        <TouchableOpacity onPress={this.props.onClick} style={styles.skipContainer}>
                            <Text style={styles.btnTxt}>SKIP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.props.onClick} style={styles.doneContainer}>
                            <Text style={styles.btnTxt}>DONE</Text>
                        </TouchableOpacity>

                    </View>
                </Swiper>
            </Modal>


        );
    }
}
