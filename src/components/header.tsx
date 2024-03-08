import React, {FC} from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import {colors} from '../themes/colors';
import {width} from '../themes/metrics';

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    paddingBottom: Platform.OS ? width / 30 : width / 40,
    borderBottomColor: colors.primary,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
