import {
  StyleSheet,
} from 'react-native';

import Colors from '../config/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    fontSize: 15,
    color: Colors.gray,
    // fontFamily: "Noto Sans CJK TC"
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.gray,
    marginTop: 5,
    marginBottom: 5
  },
  subtitle: {
    fontSize: 15,
    color: Colors.mainBlue,
    marginBottom: 30
  },
  subtitleGray: {
    fontSize: 15,
    color: Colors.gray,
    fontWeight: '500'
  },
  text: {
    fontSize: 15,
    color: Colors.gray,
  },
  content: {
    color: Colors.gray,
    letterSpacing: 2,
    paddingTop: 5,
  },
  bodyContent: {
    marginRight: 15,
    marginLeft: 15,
  },
  component: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline'
  },
  hr: {
    borderBottomColor: Colors.lineGray,
    borderBottomWidth: 1,
    paddingTop: 20
  },
  map: {
    width: 330,
    height: 180,
    borderRadius: 8,
    marginTop: 20,
  },
  icon: {
    color: Colors.mainBlue,
    marginRight: 15
  },


});

export default styles;
