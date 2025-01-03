import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

const dummy = [
  {
    id: 1,
    name: 'Muskan',
    email: 'muskan@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    name: 'Aarav',
    email: 'aarav@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 3,
    name: 'Vivaan',
    email: 'vivaan@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 4,
    name: 'Anaya',
    email: 'anaya@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 5,
    name: 'Reyansh',
    email: 'reyansh@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 6,
    name: 'Saanvi',
    email: 'saanvi@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 7,
    name: 'Aarohi',
    email: 'aarohi@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 8,
    name: 'Krishna',
    email: 'krishna@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: 9,
    name: 'Aditya',
    email: 'aditya@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 10,
    name: 'Ishita',
    email: 'ishita@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    id: 11,
    name: 'Riya',
    email: 'riya@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: 12,
    name: 'Siddharth',
    email: 'siddharth@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    id: 13,
    name: 'Nisha',
    email: 'nisha@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    id: 14,
    name: 'Karan',
    email: 'karan@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: 15,
    name: 'Pooja',
    email: 'pooja@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: 16,
    name: 'Rajesh',
    email: 'rajesh@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    id: 17,
    name: 'Sneha',
    email: 'sneha@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    id: 18,
    name: 'Vikram',
    email: 'vikram@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: 19,
    name: 'Tanya',
    email: 'tanya@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    id: 20,
    name: 'Deepak',
    email: 'deepak@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    id: 21,
    name: 'Meera',
    email: 'meera@gmail.com',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
  {
    id: 22,
    name: 'Rahul',
    email: 'rahul@gmail.com',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummy}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image
              style={{width: 40, height: 40, borderRadius: 50}}
              source={{
                uri: item.image,
              }}
            />
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={<View style={{height: 10}} />}
        numColumns={2}
        columnWrapperStyle={{gap: 10}}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#6a6a6a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    // justifyContent:'space-around',
    // alignItems: 'center',
  },
  card: {
    width: 120,
    height: 120,
    backgroundColor: '#6a6a',
    borderRadius: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
