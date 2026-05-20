import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const customers = [
  {
    id: '1',
    name: 'Rakesh Verma',
    phone: '9876543210',
    balance: '₹12,500',
    image: 'https://i.pravatar.cc/100?img=1',
  },
  {
    id: '2',
    name: 'Arjun Patel',
    phone: '9123456780',
    balance: '₹8,200',
    image: 'https://i.pravatar.cc/100?img=2',
  },
  {
    id: '3',
    name: 'Rahul Sharma',
    phone: '9988776655',
    balance: '₹15,780',
    image: 'https://i.pravatar.cc/100?img=3',
  },
  {
    id: '4',
    name: 'Kiran Kumar',
    phone: '9011223344',
    balance: '₹4,500',
    image: 'https://i.pravatar.cc/100?img=4',
  },
];

export default function CustomerScreen() {

  const [search, setSearch] = useState('');

  const filteredCustomers = customers.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.phone.includes(search)
  );

  return (

    <View style={styles.container}>

      <Text style={styles.heading}>
        Customers
      </Text>

      <View style={styles.searchContainer}>

  <Ionicons
    name="search"
    size={20}
    color="gray"
    style={styles.searchIcon}
  />

  <TextInput
    placeholder="Search by name or phone"
    value={search}
    onChangeText={setSearch}
    style={styles.searchBar}
  />

</View>

      <FlatList
        data={filteredCustomers}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (

          <TouchableOpacity style={styles.card}>

            {/* LEFT */}
            <View style={styles.leftSection}>

              <Image
                source={{ uri: item.image }}
                style={styles.avatar}
              />

              <View>

                <Text style={styles.name}>
                  {item.name}
                </Text>

                <Text style={styles.phone}>
                  {item.phone}
                </Text>

              </View>

            </View>

            {/* RIGHT */}
            <View style={styles.rightSection}>

              <Text style={styles.balance}>
                {item.balance}
              </Text>

              <Ionicons
                name="chevron-forward"
                size={22}
                color="gray"
              />

            </View>

          </TouchableOpacity>

        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },

  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f3f4f6',
  borderRadius: 14,
  paddingHorizontal: 15,
  marginBottom: 20,
},

searchIcon: {
  marginRight: 10,
},

 searchBar: {
  flex: 1,
  paddingVertical: 15,
  fontSize: 16,
},

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 16,
    borderRadius: 18,
    marginBottom: 14,
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  phone: {
    color: 'gray',
    marginTop: 5,
  },

  rightSection: {
    alignItems: 'flex-end',
  },

  balance: {
    fontSize: 14,
    fontWeight: '500',
    color:'gray',
    marginBottom: 5,
  },

});