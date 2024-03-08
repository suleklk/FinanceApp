import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  Image,
} from 'react-native';

import {colors} from '../themes/colors';
import {height, width} from '../themes/metrics';

interface Props {
  image: any;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  buttonSize: number;
  onPress(): void; // Button click event
}

const BoxButtonComponent: FC<Props> = (props: Props) => {
  const {buttonSize, onPress, buttonStyle, image} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {width: buttonSize, height: buttonSize},
        buttonStyle,
      ]}>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 10,
    position: 'relative',
    margin: width * 0.009,
  },
  image: {
    width: '50%',
    height: '50%',
    tintColor: colors.white,
  },
});
export default BoxButtonComponent;
