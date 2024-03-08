import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../themes/colors';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';
import AddStack from './AddStack';
import {family} from '../themes/fonts';
import {
  HomeActiveIcon,
  HomeIcon,
  UserActiveIcon,
  UserIcon,
  AddIcon,
  AddActiveIcon,
} from '../assets/images';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigation: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,
        tabBarActiveBackgroundColor: colors.primary,
        tabBarInactiveBackgroundColor: colors.primary,
        tabBarLabelStyle: {
          fontFamily: family.DMSans.medium,
          fontSize: 12,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          // title: 'Anasayfa',
          //tabBarLabel: '', // İsim gizlendi
          tabBarShowLabel: false,

          tabBarIcon({focused, color, size}) {
            if (focused) {
              return (
                <Image
                  source={HomeActiveIcon}
                  style={{
                    tintColor: color,
                    height: size,
                    width: size,
                    position: 'absolute',
                    top: 20,
                  }}
                />
              );
            } else {
              return (
                <Image
                  source={HomeIcon}
                  style={{
                    tintColor: color,
                    height: size,
                    width: size,
                    position: 'absolute',
                    top: 20,
                  }}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="AddStack"
        component={AddStack}
        options={{
          // title: 'Anasayfa',
          //tabBarLabel: '', // İsim gizlendi
          tabBarShowLabel: false,

          tabBarIcon({focused, color, size}) {
            if (focused) {
              return (
                <Image
                  source={AddActiveIcon}
                  style={{
                    tintColor: color,
                    height: size,
                    width: size,
                    position: 'absolute',
                    top: 20,
                  }}
                />
              );
            } else {
              return (
                <Image
                  source={AddIcon}
                  style={{
                    tintColor: color,
                    height: size,
                    width: size,
                    position: 'absolute',
                    top: 20,
                  }}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          //title: 'Profil',

          tabBarShowLabel: false,
          tabBarIcon({focused, color, size}) {
            if (focused) {
              return (
                <Image
                  source={UserActiveIcon}
                  style={{
                    tintColor: color,
                    height: size,
                    width: size,
                    position: 'absolute',
                    top: 20,
                  }}
                />
              );
            } else {
              return (
                <Image
                  source={UserIcon}
                  style={{
                    tintColor: color,
                    height: size,
                    width: size,
                    position: 'absolute',
                    top: 20,
                  }}
                />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
