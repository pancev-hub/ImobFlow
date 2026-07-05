import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ImobFlow - Mobile (scaffold)</Text>
      <Text>Abra a API backend em http://localhost:3000/health</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 }
})
