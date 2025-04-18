import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Info, Wrench, Lightbulb, Trophy, Phone } from 'lucide-react-native';

type MenuItem = {
  title: string;
  description: string;
  icon: JSX.Element;
  route: string;
};

const MENU_ITEMS: MenuItem[] = [
  {
    title: 'About',
    description: 'Learn about our mission and goals',
    icon: <Info size={24} color="#1B5E20" />,
    route: 'screens/about'
  },
  {
    title: 'Features',
    description: 'Explore machine subsystems',
    icon: <Wrench size={24} color="#1B5E20" />,
    route: 'screens/features'
  },
  {
    title: 'Innovation',
    description: 'Discover smart technologies',
    icon: <Lightbulb size={24} color="#1B5E20" />,
    route: 'screens/innovation'
  },
  {
    title: 'Legacy',
    description: 'Our journey and achievements',
    icon: <Trophy size={24} color="#1B5E20" />,
    route: 'screens/legacy'
  },
  {
    title: 'Contact',
    description: 'Get in touch with our team',
    icon: <Phone size={24} color="#1B5E20" />,
    route: 'screens/contact'
  }
];

export default function MoreScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>More Options</Text>
        <Text style={styles.headerDescription}>
          Access additional features and information
        </Text>
      </View>

      <View style={styles.menuContainer}>
        {MENU_ITEMS.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
            onPress={() => router.push(item.route)}
          >
            <View style={styles.menuIcon}>
              {item.icon}
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>{item.title}</Text>
              <Text style={styles.menuDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
    padding: 24,
    backgroundColor: '#F1F8E9',
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#1B5E20',
    marginBottom: 8,
  },
  headerDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#2E7D32',
  },
  menuContainer: {
    padding: 16,
    gap: 12,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8F5E9',
  },
  menuIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F1F8E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1B5E20',
    marginBottom: 4,
  },
  menuDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#558B2F',
  },
});