import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
  },
});

const CercleInvest = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saved Screen</Text>
    </View>
  );
};

export default CercleInvest;

// import { View, Text } from 'react-native'
// import React from 'react'

// const CercleInvest = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// <Text style={{fontSize:16,fontWeight:'700'}}>Saved Screen</Text>
// </View>
//   )
// }

// export default CercleInvest
