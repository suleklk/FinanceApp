import {Formik, Form} from 'formik';
import React, {FC} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../themes/colors';

interface FormValues {
  productName: string;
  purchaseDate: string;
  amount: number;
  installmentPlan?: number;
}

const FormComponent: FC = () => {
  return (
    <Formik
      initialValues={{
        productName: '',
        purchaseDate: '',
        amount: 0,
        installmentPlan: 0,
      }}
      onSubmit={(values: FormValues) => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, handleReset, values}) => (
        <View style={{marginTop: 10}}>
          <Text style={styles.text}>Ürün adı</Text>
          <TextInput
            onChangeText={handleChange('productName')}
            onBlur={handleBlur('productName')}
            value={values.productName}
            placeholder="ürün adı"
            style={styles.textInput}
          />
          <Text style={styles.text}>Alım tarihi</Text>
          <TextInput
            onChangeText={handleChange('purchaseDate')}
            onBlur={handleBlur('purchaseDate')}
            value={values.purchaseDate}
            placeholder="Alım tarihi"
            style={styles.textInput}
          />
          <Text style={styles.text}>Ürün Adedi</Text>
          <TextInput
            onChangeText={handleChange('amount')}
            onBlur={handleBlur('amount')}
            value={values.amount.toString()}
            keyboardType="numeric"
            style={styles.textInput}
          />
          <Text style={styles.text}>Taksit sayısı</Text>
          <TextInput
            onChangeText={handleChange('installmentPlan')}
            onBlur={handleBlur('installmentPlan')}
            value={values.installmentPlan?.toString() || ''}
            keyboardType="numeric"
            style={styles.textInput}
          />
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => handleSubmit()}
              title="Kaydet"
              color={colors.primary}
            />
            <Button
              onPress={() => handleReset()}
              title="Sil"
              color={colors.cancel}
            />
          </View>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  text: {marginVertical: 15, fontSize: 16, fontWeight: '500'},
  textInput: {
    color: colors.black,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
});
export default FormComponent;
