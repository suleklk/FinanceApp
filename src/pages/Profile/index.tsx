import {FC} from 'react';
import {View, Text} from 'react-native';

interface Props {
  navigation: any;
}

const ProfilePage: FC<Props> = (props: Props) => {
  const {navigation} = props;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
    </View>
  );
};
export default ProfilePage;
