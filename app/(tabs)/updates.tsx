import { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { Cloud, Sun, Droplets, Wind, Clock, ChevronRight } from 'lucide-react-native';

type WeatherData = {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
};

type NewsItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  category: string;
};

const MOCK_WEATHER: WeatherData = {
  temperature: 28,
  humidity: 65,
  windSpeed: 12,
  condition: 'Partly Cloudy',
};

const NEWS_ITEMS: NewsItem[] = [
  {
    id: 1,
    title: "New Government Scheme for Agricultural Mechanization",
    description: "The government announces a new subsidy scheme for modern farming equipment...",
    date: "2024-03-15",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    category: "Policy"
  },
  {
    id: 2,
    title: "Sustainable Farming Practices Workshop",
    description: "Join us for a hands-on workshop on implementing sustainable farming techniques...",
    date: "2024-03-14",
    imageUrl: "https://images.unsplash.com/photo-1592982537447-6f2a6a0c8b8b?w=800&q=80",
    category: "Education"
  },
  {
    id: 3,
    title: "Market Price Update: Vegetable Rates Rise",
    description: "Recent market trends show an increase in vegetable prices due to...",
    date: "2024-03-13",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800&q=80",
    category: "Market"
  }
];

export default function UpdatesScreen() {
  const [weather, setWeather] = useState<WeatherData>(MOCK_WEATHER);
  const [news, setNews] = useState<NewsItem[]>(NEWS_ITEMS);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800&q=80' }}
          style={styles.headerImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.overlineText}>Daily Updates</Text>
          <Text style={styles.title}>Weather & News</Text>
        </View>
      </View>

      <View style={styles.weatherSection}>
        <View style={styles.weatherHeader}>
          <Cloud size={32} color="#1B5E20" />
          <Text style={styles.weatherTitle}>Today's Weather</Text>
        </View>
        
        <View style={styles.weatherGrid}>
          <View style={styles.weatherItem}>
            <Sun size={24} color="#FF9800" />
            <Text style={styles.weatherValue}>{weather.temperature}°C</Text>
            <Text style={styles.weatherLabel}>Temperature</Text>
          </View>
          
          <View style={styles.weatherItem}>
            <Droplets size={24} color="#2196F3" />
            <Text style={styles.weatherValue}>{weather.humidity}%</Text>
            <Text style={styles.weatherLabel}>Humidity</Text>
          </View>
          
          <View style={styles.weatherItem}>
            <Wind size={24} color="#78909C" />
            <Text style={styles.weatherValue}>{weather.windSpeed} km/h</Text>
            <Text style={styles.weatherLabel}>Wind Speed</Text>
          </View>
        </View>

        <Text style={styles.weatherCondition}>{weather.condition}</Text>
      </View>

      <View style={styles.newsSection}>
        <Text style={styles.sectionTitle}>Latest Updates</Text>
        
        {news.map((item) => (
          <TouchableOpacity key={item.id} style={styles.newsCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.newsImage} />
            <View style={styles.newsContent}>
              <View style={styles.newsHeader}>
                <Text style={styles.newsCategory}>{item.category}</Text>
                <Clock size={16} color="#757575" />
                <Text style={styles.newsDate}>{item.date}</Text>
              </View>
              <Text style={styles.newsTitle}>{item.title}</Text>
              <Text style={styles.newsDescription} numberOfLines={2}>
                {item.description}
              </Text>
              <View style={styles.readMore}>
                <Text style={styles.readMoreText}>Read More</Text>
                <ChevronRight size={16} color="#1B5E20" />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.subscribeButton}>
        <Text style={styles.subscribeText}>Subscribe to Updates</Text>
      </TouchableOpacity>
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
  weatherSection: {
    margin: 16,
    padding: 20,
    backgroundColor: '#F1F8E9',
    borderRadius: 16,
  },
  weatherHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  weatherTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1B5E20',
    marginLeft: 12,
  },
  weatherGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  weatherItem: {
    alignItems: 'center',
    flex: 1,
  },
  weatherValue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    color: '#1B5E20',
    marginVertical: 8,
  },
  weatherLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#558B2F',
  },
  weatherCondition: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#1B5E20',
    textAlign: 'center',
    marginTop: 8,
  },
  newsSection: {
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1B5E20',
    marginBottom: 16,
  },
  newsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E8F5E9',
  },
  newsImage: {
    width: '100%',
    height: 200,
  },
  newsContent: {
    padding: 16,
  },
  newsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  newsCategory: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: '#1B5E20',
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 12,
  },
  newsDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#757575',
    marginLeft: 4,
  },
  newsTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1B5E20',
    marginBottom: 8,
  },
  newsDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#558B2F',
    lineHeight: 20,
  },
  readMore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  readMoreText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#1B5E20',
    marginRight: 4,
  },
  subscribeButton: {
    backgroundColor: '#1B5E20',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 32,
  },
  subscribeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#FFFFFF',
  },
});