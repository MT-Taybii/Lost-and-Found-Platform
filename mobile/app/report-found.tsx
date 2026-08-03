import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useApp } from '../src/context/AppContext';
import { isValidName, isValidItem, generateId } from '../src/utils/validation';
import { FoundItem } from '../src/models/Item';

export default function ReportFoundScreen() {
  const router = useRouter();
  const { addFoundItem } = useApp();

  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [finderName, setFinderName] = useState('');

  const handleSubmit = () => {
    if (!isValidItem(itemName)) {
      Alert.alert('Invalid Item Name', 'Only letters, numbers and spaces allowed.');
      return;
    }

    if (!isValidName(location)) {
      Alert.alert('Invalid Location', 'Only letters and spaces allowed.');
      return;
    }

    if (!isValidName(finderName)) {
      Alert.alert('Invalid Finder Name', 'Only letters and spaces allowed.');
      return;
    }

    const newItem: FoundItem = {
      id: generateId(),
      itemName,
      description,
      location,
      finderName,
    };

    addFoundItem(newItem);
    Alert.alert('Success', 'Found Item Added Successfully!', [
      { text: 'OK', onPress: () => router.back() }
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Report Found Item</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Item Name</Text>
          <TextInput
            style={styles.input}
            value={itemName}
            onChangeText={setItemName}
            placeholder="Enter item name"
            placeholderTextColor="#9ca3af"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            placeholder="Enter description"
            placeholderTextColor="#9ca3af"
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Location Found</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={setLocation}
            placeholder="Enter location"
            placeholderTextColor="#9ca3af"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Finder Name</Text>
          <TextInput
            style={styles.input}
            value={finderName}
            onChangeText={setFinderName}
            placeholder="Enter finder name"
            placeholderTextColor="#9ca3af"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#22c55e',
    padding: 30,
    paddingTop: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  form: {
    padding: 20,
    marginTop: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#22c55e',
    borderRadius: 10,
    padding: 18,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
