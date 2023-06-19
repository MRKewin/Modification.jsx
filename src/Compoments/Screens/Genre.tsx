import React, {useState} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Button from '../UI/Button';

const Genre = ({navigation}) => {
  const [checked, setChecked] = useState('first');

  return (
    <View>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../../../assets/images/Logo.png')}>
        <View style={styles.container}>
          <RadioButton.Item
            label="Femme"
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <RadioButton.Item
            label="Homme"
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <View>
            <Button
              text="Suivant"
              color="black"
              onPress={() => navigation.navigate('Localisation')}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});

export default Genre;

// import {View, ImageBackground, StyleSheet} from 'react-native';
// import React, {useState} from 'react';
// import {RadioButton} from 'react-native-paper';
// import Button from '../UI/Button';

// const Genre = ({navigation}) => {
//   const [checked, setChecked] = React.useState('first');
//   return (
//     <View>
//       <ImageBackground
//         style={[{width: '100%', height: '100%', alignSelf: 'center'}]}
//         source={require('../../../assets/images/Logo.png')}>
//         <View style={styles.container}>
//           <RadioButton
//             value="first"
//             status={checked === 'first' ? 'checked' : 'unchecked'}
//             onPress={() => setChecked('first')}>
//             Femme
//           </RadioButton>
//           <RadioButton
//             value="second"
//             status={checked === 'second' ? 'checked' : 'unchecked'}
//             onPress={() => setChecked('second')}
//           />
//         <View >
//         <Button
//         text="Suivant"
//         color="black"
//         onPress={() => navigation.navigate('Localisation')}
//         />
//         </View>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

// });
// export default Genre;
