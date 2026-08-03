import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../src/context/AppContext';

export default function MatchesScreen() {
  const router = useRouter();
  const { findMatches } = useApp();
  const matches = findMatches();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Match Results</Text>
      </View>

      <ScrollView style={styles.content}>
        {matches.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No Matches Found</Text>
          </View>
        ) : (
          matches.map((match: any, index: number) => (
            <View key={index} style={styles.matchCard}>
              <View style={styles.matchHeader}>
                <Text style={styles.matchTitle}>Possible Match Found</Text>
                <Text style={styles.matchItemName}>{match.lost.itemName}</Text>
              </View>
              
              <View style={styles.matchSection}>
                <Text style={styles.sectionTitle}>🔴 Lost Item</Text>
                <Text style={styles.detailLabel}>Owner:</Text>
                <Text style={styles.detailText}>{match.lost.ownerName}</Text>
                <Text style={styles.detailLabel}>Location Lost:</Text>
                <Text style={styles.detailText}>{match.lost.location}</Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.matchSection}>
                <Text style={styles.sectionTitle}>🟢 Found Item</Text>
                <Text style={styles.detailLabel}>Finder:</Text>
                <Text style={styles.detailText}>{match.found.finderName}</Text>
                <Text style={styles.detailLabel}>Location Found:</Text>
                <Text style={styles.detailText}>{match.found.location}</Text>
              </View>
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
    backgroundColor: '#6366f1',
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
  matchCard: {
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
  matchHeader: {
    marginBottom: 15,
  },
  matchTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366f1',
    marginBottom: 5,
  },
  matchItemName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  matchSection: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    marginTop: 5,
  },
  detailText: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 3,
  },
  divider: {
    height: 1,
    backgroundColor: '#e5e7eb',
    marginVertical: 15,
  },
});
