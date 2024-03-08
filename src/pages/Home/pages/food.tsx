import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Header from '../../../components/header';
import {width} from '../../../themes/metrics';

const FoodDetail = () => {
  return (
    <View style={styles.container}>
      <Header title="Yiyecek & İçecek Harcamaları" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS ? width / 15 : width / 20,
  },
});

export default FoodDetail;
