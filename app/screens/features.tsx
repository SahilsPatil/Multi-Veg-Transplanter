import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronDown, ChevronUp, Cog, Box, Battery, Cpu } from 'lucide-react-native';

type SubsystemType = {
  title: string;
  icon: JSX.Element;
  description: string;
  specs: string[];
};

const SUBSYSTEMS: SubsystemType[] = [
  {
    title: 'Pick & Place Arm',
    icon: <Box size={24} color="#1B5E20" />,
    description: 'Advanced robotic arm system for precise plant handling',
    specs: [
      '2x NEMA 23 stepper motors (TB6600)',
      '2x MG995 servo motors',
      'Precision control system',
      'Adjustable grip pressure'
    ]
  },
  {
    title: 'Conveyor System',
    icon: <Cog size={24} color="#1B5E20" />,
    description: 'Dual-axis movement system for accurate positioning',
    specs: [
      '2x NEMA 23 stepper (X-axis, lead screw)',
      '2x NEMA 23 stepper (Y-axis, chain drive)',
      'Smooth motion control',
      'Anti-backlash mechanism'
    ]
  },
  {
    title: 'Digging Mechanism',
    icon: <Cpu size={24} color="#1B5E20" />,
    description: 'Automated soil preparation and planting system',
    specs: [
      '2x NEMA 34 stepper motors (DM860H)',
      'Depth control system',
      'Soil sensor integration',
      'Quick-release mechanism'
    ]
  },
  {
    title: 'Power System',
    icon: <Battery size={24} color="#1B5E20" />,
    description: 'High-capacity power system for extended operation',
    specs: [
      '48V 60A lithium-ion battery',
      'Quick-charge capability',
      'Power monitoring system',
      'Overcharge protection'
    ]
  }
];

export default function FeaturesScreen() {
  const [expandedSystem, setExpandedSystem] = useState<number | null>(0);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Machine Subsystems</Text>
        <Text style={styles.headerDescription}>
          Explore the advanced technological components that make our transplanter efficient and reliable.
        </Text>
      </View>

      <View style={styles.subsystemsContainer}>
        {SUBSYSTEMS.map((system, index) => (
          <View key={index} style={styles.subsystemCard}>
            <TouchableOpacity
              style={styles.subsystemHeader}
              onPress={() => setExpandedSystem(expandedSystem === index ? null : index)}
            >
              <View style={styles.subsystemTitle}>
                {system.icon}
                <Text style={styles.subsystemName}>{system.title}</Text>
              </View>
              {expandedSystem === index ? (
                <ChevronUp size={24} color="#1B5E20" />
              ) : (
                <ChevronDown size={24} color="#1B5E20" />
              )}
            </TouchableOpacity>

            {expandedSystem === index && (
              <View style={styles.subsystemContent}>
                <Text style={styles.subsystemDescription}>{system.description}</Text>
                <View style={styles.specsList}>
                  {system.specs.map((spec, specIndex) => (
                    <View key={specIndex} style={styles.specItem}>
                      <View style={styles.specBullet} />
                      <Text style={styles.specText}>{spec}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        ))}
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>System Overview</Text>
        <View style={styles.summaryTable}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total Motors</Text>
            <Text style={styles.summaryValue}>8 Stepper Motors</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Control System</Text>
            <Text style={styles.summaryValue}>Digital PLC</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Power Rating</Text>
            <Text style={styles.summaryValue}>2880 Watt-hours</Text>
          </View>
        </View>
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
    lineHeight: 24,
  },
  subsystemsContainer: {
    padding: 16,
  },
  subsystemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E8F5E9',
    overflow: 'hidden',
  },
  subsystemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  subsystemTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subsystemName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1B5E20',
    marginLeft: 12,
  },
  subsystemContent: {
    padding: 16,
    backgroundColor: '#F9FBF9',
  },
  subsystemDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#2E7D32',
    marginBottom: 16,
    lineHeight: 24,
  },
  specsList: {
    gap: 8,
  },
  specItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  specBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#1B5E20',
    marginRight: 12,
  },
  specText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#558B2F',
  },
  summaryContainer: {
    margin: 16,
    padding: 20,
    backgroundColor: '#F1F8E9',
    borderRadius: 16,
    marginBottom: 32,
  },
  summaryTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1B5E20',
    marginBottom: 16,
  },
  summaryTable: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  summaryLabel: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#558B2F',
  },
  summaryValue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1B5E20',
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#E8F5E9',
  },
});