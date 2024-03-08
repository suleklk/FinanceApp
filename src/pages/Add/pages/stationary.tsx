import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import FormComponent from '../../../components/form'; // FormComponent dosyasını içe aktarıyoruz
import Header from '../../../components/header';
import {width} from '../../../themes/metrics';

const StationaryPage = () => {
  return (
    <View style={styles.container}>
      <Header title="Kırtasiye Harcamaları" />
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

export default StationaryPage;
