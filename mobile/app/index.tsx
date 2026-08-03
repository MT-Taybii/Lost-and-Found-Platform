import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { AppProvider } from '../src/context/AppContext';

function HomeScreen() {
  const router = useRouter();

  const menuItems = [
    { title: 'Report Lost Item', route: '/report-lost', icon: '🔴' },
    { title: 'Report Found Item', route: '/report-found', icon: '🟢' },
    { title: 'Show Lost Items', route: '/lost-items', icon: '📋' },
    { title: 'Show Found Items', route: '/found-items', icon: '📋' },
    { title: 'Find Matches', route: '/matches', icon: '🔍' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Lost & Found Platform</Text>
        <Text style={styles.subtitle}>Report and find lost items</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => router.push(item.route as any)}
          >
            <Text style={styles.menuIcon}>{item.icon}</Text>
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

export default function App() {
  return (
    <AppProvider>
      <HomeScreen />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6366f1',
    padding: 30,
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e7ff',
  },
  menuContainer: {
    padding: 20,
    marginTop: 20,
  },
  menuItem: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuIcon: {
    fontSize: 28,
    marginRight: 15,
  },
  menuText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
});
