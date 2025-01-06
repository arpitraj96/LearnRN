import {FlatList, StyleSheet, Text, View} from 'react-native';

const AllItems = ({data}) => {
  // console.log(data[1]);
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Item</Text>
        <Text style={styles.headingText}>Quantity</Text>
        {/* <Text style={styles.headingText}>Unit</Text> */}
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
          </View>
        )}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
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
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itemText: {
    fontSize: 15,
    fontWeight: '400',
  },
});
