// components/BookItem.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BookItem({ book, onPress }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onPress(book.id)}>
      <Text style={styles.title}>{book.name}</Text>
      <Text style={styles.author}>{book.author}</Text>
      <Text style={styles.rating}>Rating: {book.rating}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#343a40',
  },
  author: {
    fontSize: 16,
    color: '#6c757d',
  },
  rating: {
    fontSize: 14,
    color: '#28a745',
    marginTop: 4,
  },
});
