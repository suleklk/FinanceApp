import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {useTranslation} from 'react-i18next';
import {colors} from '../themes/colors';
import HomePage from '../pages/Home';
import ClothesDetail from '../pages/Home/pages/clothes';
import FoodDetail from '../pages/Home/pages/food';
import GasDetail from '../pages/Home/pages/gas';
import MakeUpDetail from '../pages/Home/pages/makeUp';
import MarketDetail from '../pages/Home/pages/market';
import PersonalCareDetail from '../pages/Home/pages/personalCare';
import StationaryDetail from '../pages/Home/pages/stationary';

const Stack = createNativeStackNavigator();

const HomeStack: FC = () => {
  //const {t} = useTranslation();
  return (
    <Stack.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        headerTitleStyle: {
          fontSize: 16,
          color: colors.white,
        },
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{title: ''}}
      />
      <Stack.Screen
        name="Make Up Detail"
        component={MakeUpDetail}
        options={{title: 'Makyaj Harcamaları Detay'}}
      />
      <Stack.Screen
        name="Market Detail"
        component={MarketDetail}
        options={{title: 'Market Harcamaları Detay'}}
      />
      <Stack.Screen
        name="Personal Care Detail"
        component={PersonalCareDetail}
        options={{title: 'Kişisel Bakım Harcamaları Detay'}}
      />

      <Stack.Screen
        name="Clothes Detail"
        component={ClothesDetail}
        options={{title: 'Giyim Harcamaları Detay'}}
      />
      <Stack.Screen
        name="Food Detail"
        component={FoodDetail}
        options={{title: 'Yiyecek & İçecek Harcamaları Detay'}}
      />
      <Stack.Screen
        name="Gas Detail"
        component={GasDetail}
        options={{title: 'Akaryakıt Harcamaları Detay'}}
      />
      <Stack.Screen
        name="Stationary Detail"
        component={StationaryDetail}
        options={{title: 'Kırtasiye Harcamaları Detay'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
