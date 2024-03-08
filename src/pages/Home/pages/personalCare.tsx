import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {width} from '../../../themes/metrics';
import Header from '../../../components/header';

const PersonalCareDetail = () => {
  return (
    <View style={styles.container}>
      <Header title="Kişisel Bakım Harcamaları" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS ? width / 15 : width / 20,
  },
});

export default PersonalCareDetail;
