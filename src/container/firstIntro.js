import React, { Component } from 'react';
import {
    Dimensions,
    AsyncStorage,
    Modal
} from 'react-native';
import AppIntro from 'rn-falcon-app-intro';

import Images from '../config/images'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class FirstIntro extends Component {
    render() {
        const pageArray = [
            {
                title: '探索全台潛點',
                img: Images.intro1,
                imgStyle: {
                    height: width * 0.85,
                    width: width * 0.85,
                    marginTop: 70
                },
                backgroundColor: '#049DE3',
                fontColor: '#fff',
                level: 10,
            }, {
                title: '體驗最棒潛店',
                img: Images.intro2,
                imgStyle: {
                    height: width * 0.85,
                    width: width * 0.85,
                    marginTop: 70
                },
                backgroundColor: '#065691',
                fontColor: '#fff',
                level: 10,
            },
            {
                title: '蒐集最佳裝備',
                img: Images.intro3,
                imgStyle: {
                    height: width * 0.85,
                    width: width * 0.85,
                    marginTop: 70
                },
                backgroundColor: '#4770B5',
                fontColor: '#fff',
                level: 10,
            }, {
                title: '享受潛水無負擔',
                img: Images.intro4,
                imgStyle: {
                    height: width * 0.85,
                    width: width * 0.85,
                    marginTop: 70
                },
                backgroundColor: '#1E9990',
                fontColor: '#fff',
                level: 10,
            }
        ];
        return (
            <Modal visible={this.props.showModal}>
                <AppIntro
                    onDoneBtnClick={this.props.onClick}
                    onSkipBtnClick={this.props.onClick}
                    pageArray={pageArray}
                />
            </Modal>
        );
    }
}