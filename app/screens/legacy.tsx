import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Trophy, Users } from 'lucide-react-native';

type Achievement = {
  year: string;
  title: string;
  description: string;
};

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    year: '2019',
    title: 'SAE TIFAN',
    description: 'Best Innovation Award for revolutionary transplanting mechanism'
  },
  {
    year: '2020',
    title: 'SAE TIFAN',
    description: 'Economic Vehicle Runner Up for cost-effective design'
  },
  {
    year: '2024',
    title: 'SAE TIFAN',
    description: 'Best Jury + Innovation Award for AI integration'
  },
  {
    year: '2025',
    title: 'SAE TIFAN',
    description: 'Finalist - Advanced Agricultural Innovation'
  }
];

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Mohit Joshi',
    role: 'Team Lead & Technical Head',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80'
  },
  {
    name: 'Raj Patel',
    role: 'Mechanical Design Engineer',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80'
  },
  {
    name: 'Priya Singh',
    role: 'Software Developer',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80'
  }
];

export default function LegacyScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80' }}
          style={styles.headerImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.overlineText}>Our Story</Text>
          <Text style={styles.title}>Team Legacy</Text>
        </View>
      </View>

      <View style={styles.achievementsSection}>
        <View style={styles.sectionHeader}>
          <Trophy size={32} color="#1B5E20" />
          <Text style={styles.sectionTitle}>Achievements</Text>
        </View>

        <View style={styles.timeline}>
          {ACHIEVEMENTS.map((achievement, index) => (
            <View key={index} style={styles.timelineItem}>
              <View style={styles.timelineLeft}>
                <View style={styles.timelineDot} />
                <View style={styles.timelineLine} />
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineYear}>{achievement.year}</Text>
                <Text style={styles.timelineTitle}>{achievement.title}</Text>
                <Text style={styles.timelineDescription}>{achievement.description}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.teamSection}>
        <View style={styles.sectionHeader}>
          <Users size={32} color="#1B5E20" />
          <Text style={styles.sectionTitle}>Meet the Team</Text>
        </View>

        <View style={styles.teamGrid}>
          {TEAM_MEMBERS.map((member, index) => (
            <View key={index} style={styles.teamCard}>
              <Image source={{ uri: member.imageUrl }} style={styles.memberImage} />
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRole}>{member.role}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.quoteSection}>
        <Text style={styles.quoteText}>
          "Innovation is not just about technology, it's about making a difference in farmers' lives."
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
  achievementsSection: {
    padding: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1B5E20',
    marginLeft: 12,
  },
  timeline: {
    paddingLeft: 24,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  timelineLeft: {
    width: 20,
    alignItems: 'center',
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#1B5E20',
    marginRight: 16,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: '#E8F5E9',
    position: 'absolute',
    top: 16,
    bottom: -16,
    left: 7,
  },
  timelineContent: {
    flex: 1,
    paddingLeft: 16,
  },
  timelineYear: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1B5E20',
    marginBottom: 4,
  },
  timelineTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#2E7D32',
    marginBottom: 4,
  },
  timelineDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#558B2F',
    lineHeight: 20,
  },
  teamSection: {
    padding: 24,
    backgroundColor: '#F9FBF9',
  },
  teamGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  teamCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8F5E9',
  },
  memberImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  memberName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1B5E20',
    textAlign: 'center',
    marginBottom: 4,
  },
  memberRole: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#558B2F',
    textAlign: 'center',
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
    fontSize: 18,
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