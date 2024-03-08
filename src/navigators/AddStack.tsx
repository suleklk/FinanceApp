import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {useTranslation} from 'react-i18next';
import {colors} from '../themes/colors';
import AddPage from '../pages/Add';

import MakeUpPage from '../pages/Add/pages/makeUp';
import PersonalCarePage from '../pages/Add/pages/personalCare';
import MarketPage from '../pages/Add/pages/market';
import GasPage from '../pages/Add/pages/gas';
import FoodPage from '../pages/Add/pages/food';
import StationaryPage from '../pages/Add/pages/stationary';
import ClothesPage from '../pages/Add/pages/clothes';
const Stack = createNativeStackNavigator();

const AddStack: FC = () => {
  //const {t} = useTranslation();
  return (
    <Stack.Navigator
      initialRouteName="AddStack"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 16,
          color: colors.white,
        },
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Stack.Screen name="AddStack" component={AddPage} options={{title: ''}} />
      <Stack.Screen
        name="Make Up"
        component={MakeUpPage}
        options={{title: 'Makyaj'}}
      />
      <Stack.Screen
        name="Personal Care"
        component={PersonalCarePage}
        options={{title: 'Kişisel Bakım'}}
      />
      <Stack.Screen
        name="Market"
        component={MarketPage}
        options={{title: 'Market'}}
      />
      <Stack.Screen name="Gas" component={GasPage} options={{title: 'Yakıt'}} />
      <Stack.Screen
        name="Food"
        component={FoodPage}
        options={{title: 'Yiyecek & İçecek'}}
      />
      <Stack.Screen
        name="Stationary"
        component={StationaryPage}
        options={{title: 'Kırtasiye'}}
      />
      <Stack.Screen
        name="Clothes"
        component={ClothesPage}
        options={{title: 'Giyim'}}
      />
    </Stack.Navigator>
  );
};

export default AddStack;
