// components/BorrowedBookItem.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BorrowedBookItem({ book, onReturn }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{book.bookName}</Text>
      <Text style={styles.author}>{book.bookAuthor}</Text>
      <TouchableOpacity
        style={styles.returnButton}
        onPress={() => onReturn(book.id)}
      >
        <Text style={styles.returnButtonText}>Return</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
  },
  author: {
    fontSize: 16,
    color: '#6c757d',
  },
  returnButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#007bff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  returnButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
