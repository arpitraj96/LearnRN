import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AllItems from './AllItems';
import Add from './Add';

// const data = [
//   {id: 1, name: 'Wheat', stock: '5', unit: 'KG'},
//   {id: 2, name: 'Rice', stock: '10', unit: 'KG'},
//   {id: 3, name: 'Barley', stock: '7', unit: 'KG'},
//   {id: 4, name: 'Oats', stock: '3', unit: 'KG'},
//   {id: 5, name: 'Corn', stock: '15', unit: 'KG'},
//   {id: 6, name: 'Soybeans', stock: '8', unit: 'KG'},
//   {id: 7, name: 'Lentils', stock: '12', unit: 'KG'},
//   {id: 8, name: 'Chickpeas', stock: '6', unit: 'KG'},
//   {id: 9, name: 'Flour', stock: '20', unit: 'KG'},
//   {id: 10, name: 'Sugar', stock: '25', unit: 'KG'},
//   {id: 11, name: 'Peas', stock: '18', unit: 'KG'},
//   {id: 12, name: 'Sesame', stock: '14', unit: 'KG'},
//   {id: 13, name: 'Mustard', stock: '9', unit: 'KG'},
//   {id: 14, name: 'Quinoa', stock: '11', unit: 'KG'},
//   {id: 15, name: 'Rye', stock: '4', unit: 'KG'},
//   {id: 16, name: 'Millet', stock: '13', unit: 'KG'},
//   {id: 17, name: 'Buckwheat', stock: '6', unit: 'KG'},
//   {id: 18, name: 'Sorghum', stock: '16', unit: 'KG'},
//   {id: 19, name: 'Spelt', stock: '17', unit: 'KG'},
//   {id: 20, name: 'Couscous', stock: '5', unit: 'KG'},
//   {id: 21, name: 'Tapioca', stock: '2', unit: 'KG'},
//   {id: 22, name: 'Amaranth', stock: '19', unit: 'KG'},
//   {id: 23, name: 'Teff', stock: '21', unit: 'KG'},
//   {id: 24, name: 'Polenta', stock: '22', unit: 'KG'},
//   {id: 25, name: 'Cereal', stock: '10', unit: 'KG'},
//   {id: 26, name: 'Pulses', stock: '8', unit: 'KG'},
//   {id: 27, name: 'Mung beans', stock: '3', unit: 'KG'},
//   {id: 28, name: 'Green peas', stock: '4', unit: 'KG'},
//   {id: 29, name: 'Chia seeds', stock: '9', unit: 'KG'},
//   {id: 30, name: 'Flaxseed', stock: '15', unit: 'KG'},
// ];

const Home = () => {
  const [view, setView] = useState(0);
  const [data, setData] = useState([
    // {id: 1, name: 'Wheat', stock: '5', unit: 'KG'},
    // {id: 2, name: 'Rice', stock: '10', unit: 'KG'},
    // {id: 3, name: 'Barley', stock: '7', unit: 'KG'},
    // {id: 4, name: 'Oats', stock: '3', unit: 'KG'},
    // {id: 5, name: 'Corn', stock: '15', unit: 'KG'},
    // {id: 6, name: 'Soybeans', stock: '8', unit: 'KG'},
    // {id: 7, name: 'Lentils', stock: '12', unit: 'KG'},
    // {id: 8, name: 'Chickpeas', stock: '6', unit: 'KG'},
    // {id: 9, name: 'Flour', stock: '20', unit: 'KG'},
    // {id: 10, name: 'Sugar', stock: '25', unit: 'KG'},
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.btn,
            view === 0 ? {backgroundColor: '#72c37aff'} : null,
          ]}
          onPress={() => setView(0)}>
          <Text style={[styles.btnText, view === 0 ? {color: 'white'} : null]}>
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            view === 1 ? {backgroundColor: '#72c37aff'} : null,
          ]}
          onPress={() => setView(1)}>
          <Text style={[styles.btnText, view === 1 ? {color: 'white'} : null]}>
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            view === 2 ? {backgroundColor: '#72c37aff'} : null,
          ]}
          onPress={() => setView(2)}>
          <Text style={[styles.btnText, view === 2 ? {color: 'white'} : null]}>
            Add Item
          </Text>
        </Pressable>
      </View>
      {view == 0 && <AllItems data={data} />}
      {view == 1 && <AllItems data={data.filter(item => item.stock <= 5)} />}
      {view == 2 && <Add data={data} setData={setData} />}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '4%',
    backgroundColor: '#ffffff',
    gap: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    // marginBottom: 10,
  },
  buttonContainer: {
    // width: '100%',
    // height: '10%',
    // borderWidth: 1,
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center'
    gap: 10,
    marginVertical: 10,
  },
  btn: {
    borderWidth: 0.8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderColor: '#72c37aff',
  },
  btnText: {
    color: '#72c37aff',
    fontSize: 12,
    // fontWeight: '400',
  },
});
