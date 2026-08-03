import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../src/context/AppContext';

export default function LostItemsScreen() {
  const router = useRouter();
  const { lostItems } = useApp();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lost Items</Text>
      </View>

      <ScrollView style={styles.content}>
        {lostItems.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Lost Items Found</Text>
          </View>
        ) : (
          lostItems.map((item: any) => (
            <View key={item.id} style={styles.itemCard}>
              <Text style={styles.itemTitle}>{item.itemName}</Text>
              <Text style={styles.itemLabel}>Description:</Text>
              <Text style={styles.itemText}>{item.description}</Text>
              <Text style={styles.itemLabel}>Location Lost:</Text>
              <Text style={styles.itemText}>{item.location}</Text>
              <Text style={styles.itemLabel}>Owner Name:</Text>
              <Text style={styles.itemText}>{item.ownerName}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#ef4444',
    padding: 20,
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  content: {
    padding: 20,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  emptyText: {
    fontSize: 18,
    color: '#9ca3af',
  },
  itemCard: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  itemLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    marginTop: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#374151',
  },
});
