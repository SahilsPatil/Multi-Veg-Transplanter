import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { ArrowRight, Leaf, Book, CloudSun, Settings } from 'lucide-react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80' }}
          style={styles.headerImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.subtitle}>Welcome to</Text>
          <Text style={styles.title}>Multi-Veg Transplanter</Text>
          <Text style={styles.description}>
            Revolutionizing agriculture with smart mechanization
          </Text>
        </View>
      </View>

      <View style={styles.featuredSection}>
        <Link href="screens/about" asChild>
          <TouchableOpacity style={styles.featuredCard}>
            <View style={styles.featuredContent}>
              <Leaf size={32} color="#1B5E20" />
              <View style={styles.featuredTextContainer}>
                <Text style={styles.featuredTitle}>Discover Our Mission</Text>
                <Text style={styles.featuredDescription}>
                  Learn how we're transforming farming practices
                </Text>
              </View>
            </View>
            <ArrowRight size={24} color="#1B5E20" />
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.grid}>
        <Link href="/guide" asChild>
          <TouchableOpacity style={styles.card}>
            <Book size={28} color="#1B5E20" style={styles.cardIcon} />
            <Text style={styles.cardTitle}>Usage Guide</Text>
            <Text style={styles.cardDescription}>Step-by-step machine operation</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/updates" asChild>
          <TouchableOpacity style={styles.card}>
            <CloudSun size={28} color="#1B5E20" style={styles.cardIcon} />
            <Text style={styles.cardTitle}>Weather & News</Text>
            <Text style={styles.cardDescription}>Latest agricultural updates</Text>
          </TouchableOpacity>
        </Link>

        <Link href="screens/features" asChild>
          <TouchableOpacity style={styles.card}>
            <Settings size={28} color="#1B5E20" style={styles.cardIcon} />
            <Text style={styles.cardTitle}>Features</Text>
            <Text style={styles.cardDescription}>Advanced capabilities</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>350kg</Text>
          <Text style={styles.statLabel}>Machine Weight</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>48V</Text>
          <Text style={styles.statLabel}>Battery Power</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>60A</Text>
          <Text style={styles.statLabel}>Current Rating</Text>
        </View>
      </View>

      <View style={styles.quote}>
        <Text style={styles.quoteText}>
          "Empowering Farmers with Smart Mechanization"
        </Text>
        <Text style={styles.quoteAuthor}>- Team Bhumiputra</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 300,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 24,
    paddingBottom: 32,
  },
  subtitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#A5D6A7',
    marginBottom: 4,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 8,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#E8F5E9',
    lineHeight: 24,
  },
  featuredSection: {
    padding: 16,
    backgroundColor: '#F9FBF9',
  },
  featuredCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featuredContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  featuredTextContainer: {
    marginLeft: 16,
    flex: 1,
  },
  featuredTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1B5E20',
    marginBottom: 4,
  },
  featuredDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#558B2F',
  },
  grid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#F9FBF9',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    width: SCREEN_WIDTH > 500 ? '31%' : '48%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8F5E9',
  },
  cardIcon: {
    marginBottom: 12,
  },
  cardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1B5E20',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#558B2F',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#F1F8E9',
    marginHorizontal: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  statCard: {
    alignItems: 'center',
  },
  statNumber: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#1B5E20',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#558B2F',
  },
  quote: {
    backgroundColor: '#1B5E20',
    padding: 24,
    margin: 16,
    borderRadius: 16,
    marginBottom: 32,
  },
  quoteText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 8,
  },
  quoteAuthor: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#A5D6A7',
    textAlign: 'center',
  },
});