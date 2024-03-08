import React from 'react';
import {View, FlatList, Text, Platform} from 'react-native';
import BoxButtonComponent from '../../components/boxButton';
import {
  makeUp,
  personalCare,
  market,
  gas,
  food,
  stationary,
  clothes,
  leftIcon,
} from '../../assets/images';
import {width} from '../../themes/metrics';
import Header from '../../components/header';
import {colors} from '../../themes/colors';

interface Props {
  navigation: any;
}

const HomePage: React.FC<Props> = ({navigation}: Props) => {
  const handleClick = (nav: string | undefined) => {
    if (nav) {
      navigation.navigate(nav);
    }
  };

  const data = [
    {id: '1', image: makeUp, onPress: () => handleClick('Make Up Detail')},
    {
      id: '2',
      image: personalCare,
      onPress: () => handleClick('Personal Care Detail'),
    },
    {id: '3', image: market, onPress: () => handleClick('Market Detail')},
    {id: '4', image: gas, onPress: () => handleClick('Gas Detail')},
    {id: '5', image: food, onPress: () => handleClick('Food Detail')},
    {
      id: '6',
      image: stationary,
      onPress: () => handleClick('Stationary Detail'),
    },
    {id: '7', image: clothes, onPress: () => handleClick('Clothes Detail')},
  ];

  const renderItem = ({item}: {item: (typeof data)[0]}) => (
    <BoxButtonComponent
      onPress={item.onPress}
      image={item.image}
      buttonSize={width * 0.15}
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
      <Header title="Anasayfa" />

      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        keyExtractor={item => item.id}
        style={{marginTop: 10}}
      />
    </View>
  );
};

export default HomePage;
