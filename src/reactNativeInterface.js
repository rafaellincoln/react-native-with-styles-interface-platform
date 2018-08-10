import { StyleSheet, Platform } from 'react-native';

export default {
  create(styles) {
    const platformStyles = {};
    Object.keys(styles).forEach((name) => {
      const { ios, android, ...style } = { ...styles[name] };
      let sytleHash = { ...style };
      if (ios && Platform.OS === 'ios') {
        sytleHash = { ...ios, ...style };
      }
      if (android && Platform.OS === 'android') {
        sytleHash = { ...android, ...style };
      }
      platformStyles[name] = sytleHash;
    });
    return StyleSheet.create(platformStyles);
  },

  // Styles is an array of properties returned by `create()`, a POJO, or an
  // array thereof. POJOs are treated as inline styles.
  // This function returns an object to be spread onto an element.
  resolve(styles, prop = 'style') {
    const style = {};
    style[prop] = styles;

    return style;
  },
};
