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
    paddingTop: 5,
    paddingBottom: 5
  },
  content: {
    color: Colors.gray,
    letterSpacing:2,
    paddingTop: 5
  },
  bodyContent: {
    marginRight: 15,
    marginLeft: 15,
    justifyContent: 'center'
  },
  component: {
    flex: 1,
    padding: 5
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

  }

});

export default styles;
