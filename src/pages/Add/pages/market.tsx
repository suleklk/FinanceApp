import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import FormComponent from '../../../components/form'; // FormComponent dosyasını içe aktarıyoruz
import {width} from '../../../themes/metrics';
import Header from '../../../components/header';

const MarketPage = () => {
  return (
    <View style={styles.container}>
      <Header title="Market Harcamaları" />
      <FormComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS ? width / 15 : width / 20,
  },
});

export default MarketPage;
