import {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {useTranslation} from 'react-i18next';
import ProfilePage from '../pages/Profile';
import {colors} from '../themes/colors';

const Stack = createNativeStackNavigator();

const ProfileStack: FC = () => {
  //const {t} = useTranslation();
  return (
    <Stack.Navigator
      initialRouteName="ProfilePage"
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
        name="ProfilePage"
        component={ProfilePage}
        options={{title: 'Profil'}}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
