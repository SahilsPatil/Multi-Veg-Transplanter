import { View, Text, ScrollView, StyleSheet, Image, Dimensions } from 'react-native';
import { Shield, Battery, Scale, Ruler, Award } from 'lucide-react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80' }}
          style={styles.headerImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.overlineText}>About Our Project</Text>
          <Text style={styles.title}>Revolutionizing Agriculture</Text>
        </View>
      </View>

      <View style={styles.missionSection}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.missionText}>
          To empower farmers with cutting-edge agricultural technology that enhances productivity, 
          reduces manual labor, and promotes sustainable farming practices through innovative mechanization.
        </Text>
      </View>

      <View style={styles.benefitsContainer}>
        <Text style={styles.sectionTitle}>Key Benefits</Text>
        <View style={styles.benefitsGrid}>
          <View style={styles.benefitCard}>
            <Shield size={32} color="#1B5E20" />
            <Text style={styles.benefitTitle}>Reliable</Text>
            <Text style={styles.benefitDescription}>
              Built with industrial-grade components for lasting performance
            </Text>
          </View>
          <View style={styles.benefitCard}>
            <Battery size={32} color="#1B5E20" />
            <Text style={styles.benefitTitle}>Efficient</Text>
            <Text style={styles.benefitDescription}>
              Powered by high-capacity lithium-ion battery for extended operation
            </Text>
          </View>
          <View style={styles.benefitCard}>
            <Scale size={32} color="#1B5E20" />
            <Text style={styles.benefitTitle}>Versatile</Text>
            <Text style={styles.benefitDescription}>
              Handles multiple vegetable types with precision
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.specSection}>
        <Text style={styles.sectionTitle}>Technical Specifications</Text>
        <View style={styles.specCard}>
          <View style={styles.specRow}>
            <View style={styles.specIconContainer}>
              <Ruler size={24} color="#1B5E20" />
            </View>
            <View style={styles.specContent}>
              <Text style={styles.specLabel}>Dimensions</Text>
              <Text style={styles.specValue}>1000 × 1100 × 1400 mm</Text>
            </View>
          </View>
          <View style={styles.specDivider} />
          <View style={styles.specRow}>
            <View style={styles.specIconContainer}>
              <Scale size={24} color="#1B5E20" />
            </View>
            <View style={styles.specContent}>
              <Text style={styles.specLabel}>Weight</Text>
              <Text style={styles.specValue}>350 kg</Text>
            </View>
          </View>
          <View style={styles.specDivider} />
          <View style={styles.specRow}>
            <View style={styles.specIconContainer}>
              <Battery size={24} color="#1B5E20" />
            </View>
            <View style={styles.specContent}>
              <Text style={styles.specLabel}>Power Source</Text>
              <Text style={styles.specValue}>48V 60A Lithium-ion Battery</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.awardsSection}>
        <Text style={styles.sectionTitle}>Recognition</Text>
        <View style={styles.awardCard}>
          <Award size={32} color="#1B5E20" />
          <View style={styles.awardContent}>
            <Text style={styles.awardTitle}>SAE TIFAN 2024</Text>
            <Text style={styles.awardDescription}>Best Jury + Innovation Award</Text>
          </View>
        </View>
      </View>

      <View style={styles.quoteSection}>
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
    height: 240,
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
  },
  overlineText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#A5D6A7',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#FFFFFF',
    lineHeight: 34,
  },
  missionSection: {
    padding: 24,
    backgroundColor: '#F9FBF9',
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1B5E20',
    marginBottom: 16,
  },
  missionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#2E7D32',
    lineHeight: 24,
  },
  benefitsContainer: {
    padding: 24,
  },
  benefitsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  benefitCard: {
    backgroundColor: '#F1F8E9',
    borderRadius: 16,
    padding: 20,
    width: SCREEN_WIDTH > 500 ? '31%' : '100%',
    alignItems: 'center',
  },
  benefitTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1B5E20',
    marginTop: 12,
    marginBottom: 8,
  },
  benefitDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#558B2F',
    textAlign: 'center',
    lineHeight: 20,
  },
  specSection: {
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  specCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E8F5E9',
  },
  specRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  specIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F1F8E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  specContent: {
    flex: 1,
  },
  specLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#558B2F',
    marginBottom: 4,
  },
  specValue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1B5E20',
  },
  specDivider: {
    height: 1,
    backgroundColor: '#E8F5E9',
    marginVertical: 8,
  },
  awardsSection: {
    padding: 24,
  },
  awardCard: {
    backgroundColor: '#F1F8E9',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  awardContent: {
    marginLeft: 16,
  },
  awardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1B5E20',
    marginBottom: 4,
  },
  awardDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#558B2F',
  },
  quoteSection: {
    backgroundColor: '#1B5E20',
    padding: 24,
    margin: 24,
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