import { View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';

const Profile = () => {
  const [count, setCount] = useState<number>(0);

  // arrow function
  const Tambah = () => {
    setCount(count + 1);
  };

  // function declaration
  function TambahFunc () {
    setCount(count + 1);
  }

  const Kurang = () => {
    setCount(count - 1);
  };

  return (
    <View
    style={{
      flex: 1,
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Pressable
      onPress={Kurang}
      style={{
        backgroundColor: 'blue',
        borderRadius: 5,
        paddingHorizontal: 10,
      }}>
        <text
        style={{
          fontSize:30,
          fontWeight: 'bold',
          color: 'white',
        }}>
          -
        </text>
      </Pressable>
      <Text
      style={{
        fontSize: 24,
        fontWeight: 'bold'
      }}>
        {count}
      </Text>
      <Pressable
      onPress={Tambah}
      style={{
        backgroundColor: 'blue',
        borderRadius: 5,
        paddingHorizontal: 10,
      }}>
        <Text
        style={{
          fontSize: 30,
          color: 'white',
          fontWeight: 'bold'
        }}>
        </Text>
      </Pressable>
    </View>
  );
};

export default Profile;