// import React from 'react';
// import { View, Text } from 'react-native';
// export default function Emergency({}) {
//     return ( <
//         View >
//         <
//         Text > This is Emergency < /Text> <
//         /View>
//     );
// }
// Example to Make a Phone Call in React Native App
// https://aboutreact.com/example-to-make-a-call-from-the-react-native-app/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

// import Call API
import call from 'react-native-phone-call';
import RNGooglePlaces from 'react-native-google-places';

const Emergency = () => {
  const [inputValue, setInputValue] = useState('');

  const triggerCall = () => {
    // Check for perfect 10 digit length
    if (inputValue.length != 10) {
      alert('Please insert correct contact number');
      return;
    }

    const args = {
      number: inputValue,
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  const openSearchModal = () => {
    RNGooglePlaces.openAutocompleteModal(
      {
        initialQuery: 'vestar',
        locationRestriction: {
          latitudeSW: 6.3670553,
          longitudeSW: 2.7062895,
          latitudeNE: 6.6967964,
          longitudeNE: 4.351055,
        },
        country: 'NG',
        type: 'establishment',
      },
      [
        'placeID',
        'location',
        'name',
        'address',
        'types',
        'openingHours',
        'plusCode',
        'rating',
        'userRatingsTotal',
        'viewport',
      ],
    )
      .then((place) => {
        console.log(place);
        // place represents user's selection from the
        // suggestions and it is a simplified Google Place object.
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            textAlign: 'center',
            padding: 15,
            color: '#fff',
            fontWeight: 'bold',
          }}>
          Emergency Call
        </Text>
        <TextInput
          value={inputValue}
          onChangeText={(inputValue) => setInputValue(inputValue)}
          placeholder={'Enter Conatct Number to Call'}
          keyboardType="numeric"
          style={styles.textInput}
        />
        {/* <TextInput
          value={inputValue}
          placeholder={''}
          onChangeText={(inputValue) => setInputValue(inputValue)}
          style={styles.textInput}
        />
        <Button title="ppress" onPress={openSearchModal} /> */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={triggerCall}>
          <Text style={styles.buttonTextStyle}> Call </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Emergency;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF2E63',
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  buttonTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#FF2E63',
  },
  textInput: {
    backgroundColor: '#FFF',
    padding: 10,
  },
});
