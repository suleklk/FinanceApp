import React from 'react';
import {View, FlatList, Platform} from 'react-native';
import BoxButtonComponent from '../../components/boxButton';
import {
  makeUp,
  personalCare,
  market,
  gas,
  food,
  stationary,
  clothes,
} from '../../assets/images';
import {width} from '../../themes/metrics';
import Header from '../../components/header';

interface Props {
  navigation: any;
}

const AddPage: React.FC<Props> = ({navigation}: Props) => {
  const handleClick = (nav: string | undefined) => {
    if (nav) {
      navigation.navigate(nav);
    }
  };

  const data = [
    {id: '1', image: makeUp, onPress: () => handleClick('Make Up')},
    {id: '2', image: personalCare, onPress: () => handleClick('Personal Care')},
    {id: '3', image: market, onPress: () => handleClick('Market')},
    {id: '4', image: gas, onPress: () => handleClick('Gas')},
    {id: '5', image: food, onPress: () => handleClick('Food')},
    {id: '6', image: stationary, onPress: () => handleClick('Stationary')},
    {id: '7', image: clothes, onPress: () => handleClick('Clothes')},
  ];

  const renderItem = ({item}: {item: (typeof data)[0]}) => (
    <BoxButtonComponent
      onPress={item.onPress}
      image={item.image}
      buttonSize={width * 0.25}
    />
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: Platform.OS ? width / 15 : width / 20,
      }}>
      <Header title="Fatura Ekleme Sayfası" />

      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={item => item.id}
        style={{marginTop: 10}}
      />
    </View>
  );
};

export default AddPage;
