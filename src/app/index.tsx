import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/icon.png')}
            style={styles.avatar}
          />

          <View style={styles.studentInfo}>
            <Text style={styles.name}>Miguel Angel Lool Ortiz</Text>
            <Text style={styles.carnet}>Carné: 0907-25-13633</Text>
            <Text style={styles.career}>Ingeniería en Sistemas</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.label}>Universidad</Text>
            <Text style={styles.value}>Universidad Mariano Gálvez</Text>
          </View>

          <View style={styles.detail}>
            <Text style={styles.label}>Facultad</Text>
            <Text style={styles.value}>Facultad de Ingeniería</Text>
          </View>

          <View style={styles.detail}>
            <Text style={styles.label}>Estado</Text>
            <Text style={styles.value}>Estudiante activo</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 500,
    padding: 24,
    margin: 10,
    borderRadius: 16,
    backgroundColor: '#0044ffa1',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 45,
    marginRight: 20,
  },

  studentInfo: {
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  carnet: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  career: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  divider: {
    height: 1,
    marginVertical: 20,
    backgroundColor: '#000000',
  },

  details: {
    flexDirection: 'column',
  },

  detail: {
    marginBottom: 14,
  },

  label: {
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 3,
  },

  value: {
    fontSize: 15,
  },
}); 