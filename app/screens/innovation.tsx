import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Globe, Camera, ChartBar, Map, Monitor, MessageSquare } from 'lucide-react-native';

type InnovationType = {
  title: string;
  icon: JSX.Element;
  description: string;
  status: 'active' | 'development' | 'planned';
};

const INNOVATIONS: InnovationType[] = [
  {
    title: 'Website Integration',
    icon: <Globe size={32} color="#1B5E20" />,
    description: 'Comprehensive web platform for machine documentation, support, and remote monitoring.',
    status: 'active'
  },
  {
    title: 'AI Sapling Detection',
    icon: <Camera size={32} color="#1B5E20" />,
    description: 'Advanced computer vision system to verify successful plant placement and growth.',
    status: 'active'
  },
  {
    title: 'Efficiency Analytics',
    icon: <ChartBar size={32} color="#1B5E20" />,
    description: 'Real-time performance metrics and optimization suggestions based on operational data.',
    status: 'development'
  },
  {
    title: 'GPS Mapping',
    icon: <Map size={32} color="#1B5E20" />,
    description: 'Precise field mapping with plant location tracking and status visualization.',
    status: 'development'
  },
  {
    title: 'Digital HMI Panel',
    icon: <Monitor size={32} color="#1B5E20" />,
    description: 'Intuitive touch interface for machine control and monitoring.',
    status: 'active'
  },
  {
    title: 'Multilingual Assistant',
    icon: <MessageSquare size={32} color="#1B5E20" />,
    description: 'AI-powered chatbot providing support in English and Marathi, with offline capabilities.',
    status: 'planned'
  }
];

export default function InnovationScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80' }}
          style={styles.headerImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.overlineText}>Technology</Text>
          <Text style={styles.title}>Smart Innovations</Text>
        </View>
      </View>

      <Text style={styles.subtitle}>
        Cutting-edge features enhancing farming efficiency
      </Text>

      <View style={styles.innovationsGrid}>
        {INNOVATIONS.map((innovation, index) => (
          <TouchableOpacity key={index} style={styles.innovationCard}>
            <View style={styles.iconContainer}>
              {innovation.icon}
            </View>
            <Text style={styles.innovationTitle}>{innovation.title}</Text>
            <Text style={styles.innovationDescription}>
              {innovation.description}
            </Text>
            <View style={[
              styles.statusBadge,
              innovation.status === 'active' && styles.statusActive,
              innovation.status === 'development' && styles.statusDevelopment,
              innovation.status === 'planned' && styles.statusPlanned,
            ]}>
              <Text style={styles.statusText}>
                {innovation.status.charAt(0).toUpperCase() + innovation.status.slice(1)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.futureSection}>
        <Text style={styles.futureSectionTitle}>Future Roadmap</Text>
        <Text style={styles.futureSectionText}>
          Our commitment to innovation continues with planned features including autonomous operation,
          weather-based scheduling, and integration with farm management systems.
        </Text>
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
    height: 200,
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
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#2E7D32',
    padding: 24,
    textAlign: 'center',
  },
  innovationsGrid: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  innovationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E8F5E9',
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#F1F8E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  innovationTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1B5E20',
    marginBottom: 8,
  },
  innovationDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#558B2F',
    lineHeight: 20,
    marginBottom: 16,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  statusActive: {
    backgroundColor: '#E8F5E9',
  },
  statusDevelopment: {
    backgroundColor: '#FFF3E0',
  },
  statusPlanned: {
    backgroundColor: '#E3F2FD',
  },
  statusText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#1B5E20',
  },
  futureSection: {
    margin: 16,
    padding: 24,
    backgroundColor: '#F1F8E9',
    borderRadius: 16,
    marginBottom: 32,
  },
  futureSectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1B5E20',
    marginBottom: 12,
  },
  futureSectionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#2E7D32',
    lineHeight: 24,
  },
});