import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Add = ({data, setData}) => {
  const [itemName, setItemName] = useState('');
  const [stock, setStock] = useState('');
  const [unit, setUnit] = useState('KG');
  const [isEdit, setIsEdit] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const addItemHandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stock,
      unit: unit,
    };
    setData([...data, newItem]);
    setStock('');
    setItemName('');
    setIsEdit(false);
  };
  const editItem = item => {
    setIsEdit(true);
    setEditItemId(item.id);
    setItemName(item.name);
    setStock(item.stock);
    setUnit(item.unit);
  };
  const updateItem = () => {
    setData(
      data.map(item =>
        item.id === editItemId ? {...item, name: itemName, stock: stock} : item,
      ),
    );
  };
  const deleteItem = id => {
    setData(data.filter(item => item.id !== id));
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Name"
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={item => setItemName(item)}
      />
      <TextInput
        placeholder="Enter Quantity"
        placeholderTextColor="#999"
        style={styles.input}
        value={stock}
        onChangeText={item => setStock(item)}
      />
      <TextInput
        placeholder="Enter Unit"
        placeholderTextColor="#999"
        style={styles.input}
        value={unit}
        onChangeText={item => setUnit(item)}
      />
      <Pressable
        style={styles.btn}
        onPress={() => (isEdit ? updateItem() : addItemHandler())}>
        <Text style={styles.btnText}>
          {isEdit ? 'EDIT ITEM IN STOCK' : 'ADD ITEM IN STOCK'}
        </Text>
      </Pressable>
      <View style={{marginTop: 10}}>
        <Text style={styles.headingText}>All Items in Stock</Text>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Item</Text>
          <Text style={styles.headingText}>Quantity</Text>
          <Text style={styles.headingText}></Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          contentContainerStyle={{gap: 10}}
          renderItem={({item}) => (
            <View
              style={[
                styles.itemContainer,
                {backgroundColor: item.stock > 5 ? '#d7f6bfff' : '#ffcccc'},
              ]}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>
                {item.stock} {item.unit}
              </Text>
              {/* <Text style={styles.itemText}>{item.unit}</Text> */}
              <View>
                <Pressable onPress={() => editItem(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => deleteItem(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#d7f6bfff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    backgroundColor: '#cabfeeff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontSize: 18,
    fontWeight: '500',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itemText: {
    fontSize: 15,
    fontWeight: '400',
  },
});
