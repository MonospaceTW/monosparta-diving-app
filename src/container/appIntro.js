import React, { Component } from 'react'
import {
    View,
    TouchableOpacity,
    ImageBackground,
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
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        position: 'absolute',
        bottom: height * 0.09
    },
    skipContainer: {
        width: 50,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: height * 0.07,
        left: width * 0.035
    },
    doneContainer: {
        width: 55,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: height * 0.07,
        right: width * 0.035
    },
    btnTxt: {
        color: 'white',
        fontSize: 18
    }
})

export default class AppIntro extends React.Component {
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
                    showsButtons={false}
                    loop={false}
                    dot={
                        <View style={{ backgroundColor: 'white', width: 5, height: 5, borderRadius: 4, marginLeft: 4, marginRight: 4, marginTop: 4, marginBottom: 4 }} />
                    }
                >
                    <View>
                        <ImageBackground style={styles.wrapper} source={Images.intro1} >
                            <Text style={styles.txt}>探索全台潛點</Text>
                            <TouchableOpacity onPress={this.props.onClick} style={styles.skipContainer}>
                                <Text style={styles.btnTxt}>SKIP</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    <View>
                        <ImageBackground style={styles.wrapper} source={Images.intro2} >
                            <Text style={styles.txt}>體驗最棒潛店</Text>
                            <TouchableOpacity onPress={this.props.onClick} style={styles.skipContainer}>
                                <Text style={styles.btnTxt}>SKIP</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    <View>
                        <ImageBackground style={styles.wrapper} source={Images.intro3} >
                            <Text style={styles.txt}>蒐集最佳裝備</Text>
                            <TouchableOpacity onPress={this.props.onClick} style={styles.skipContainer}>
                                <Text style={styles.btnTxt}>SKIP</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    <View>
                        <ImageBackground style={styles.wrapper} source={Images.intro4} >
                            <Text style={styles.txt}>享受潛水無負擔！</Text>
                            <TouchableOpacity onPress={this.props.onClick} style={styles.skipContainer}>
                                <Text style={styles.btnTxt}>SKIP</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.props.onClick} style={styles.doneContainer}>
                                <Text style={styles.btnTxt}>DONE</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </Swiper>
            </Modal>


        );
    }
}
