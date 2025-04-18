import { Tabs } from 'expo-router';
import { Chrome as Home, BookOpen, CloudSun, Menu } from 'lucide-react-native';
import { StyleSheet } from 'react-native';

const TAB_ICON_SIZE = 24;

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#1B5E20',
        tabBarInactiveTintColor: '#757575',
        tabBarLabelStyle: styles.tabLabel,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        tabBarItemStyle: styles.tabBarItem,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home size={TAB_ICON_SIZE} color={color} />,
          headerTitle: 'Multi-Veg Transplanter'
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          title: 'Guide',
          tabBarIcon: ({ color }) => <BookOpen size={TAB_ICON_SIZE} color={color} />,
          headerTitle: 'How to Use & Fix'
        }}
      />
      <Tabs.Screen
        name="updates"
        options={{
          title: 'Updates',
          tabBarIcon: ({ color }) => <CloudSun size={TAB_ICON_SIZE} color={color} />,
          headerTitle: 'Agri Updates'
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color }) => <Menu size={TAB_ICON_SIZE} color={color} />,
          headerTitle: 'More Options'
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E8F5E9',
    height: 65,
    paddingBottom: 8,
    paddingTop: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabBarItem: {
    paddingTop: 4,
  },
  tabLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 11,
    marginTop: 2,
  },
  header: {
    backgroundColor: '#FFFFFF',
    elevation: 4,
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  headerTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1B5E20',
  },
});