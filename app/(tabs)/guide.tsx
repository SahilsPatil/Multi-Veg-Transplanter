import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ChevronDown, ChevronUp, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle2, Wrench, Shield } from 'lucide-react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

type Step = {
  title: string;
  description: string;
  imageUrl: string;
};

type TroubleshootingItem = {
  problem: string;
  solution: string;
  icon: 'alert' | 'check' | 'wrench';
};

const USAGE_STEPS: Step[] = [
  {
    title: "Prepare the Seedling Tray",
    description: "Place the seedling tray on the designated platform. Ensure it's properly aligned with the guide markers.",
    imageUrl: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80"
  },
  {
    title: "Configure Arm Position",
    description: "Use the control panel to set the initial position of the robotic arm. Verify all axes are calibrated.",
    imageUrl: "https://images.unsplash.com/photo-1626315869436-d6989fea3e89?w=800&q=80"
  },
  {
    title: "Start Operation",
    description: "Press the green start button. The machine will begin the transplanting sequence automatically.",
    imageUrl: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800&q=80"
  }
];

const TROUBLESHOOTING: TroubleshootingItem[] = [
  {
    problem: "Motor Not Responding",
    solution: "Check the motor driver connections and power supply. Verify the emergency stop is not engaged.",
    icon: "alert"
  },
  {
    problem: "Irregular Plant Spacing",
    solution: "Calibrate the stepper motors and verify the belt tension. Clean position sensors if necessary.",
    icon: "wrench"
  },
  {
    problem: "Battery Low Performance",
    solution: "Charge the battery fully. If issues persist, check battery health through the diagnostic menu.",
    icon: "check"
  }
];

export default function GuideScreen() {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [expandedProblem, setExpandedProblem] = useState<number | null>(null);

  const getIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle size={24} color="#EF5350" />;
      case 'check':
        return <CheckCircle2 size={24} color="#4CAF50" />;
      case 'wrench':
        return <Wrench size={24} color="#FF9800" />;
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c8b8b?w=800&q=80' }}
          style={styles.headerImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.overlineText}>Step by Step Guide</Text>
          <Text style={styles.title}>Usage Instructions</Text>
        </View>
      </View>

      <View style={styles.safetySection}>
        <Shield size={32} color="#EF5350" />
        <Text style={styles.safetyTitle}>Safety First</Text>
        <Text style={styles.safetyText}>
          Always ensure proper safety gear is worn and all emergency protocols are understood before operating the machine.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Operating Guide</Text>
        {USAGE_STEPS.map((step, index) => (
          <View key={index} style={styles.stepCard}>
            <TouchableOpacity
              style={styles.stepHeader}
              onPress={() => setExpandedStep(expandedStep === index ? null : index)}
            >
              <View style={styles.stepTitleContainer}>
                <Text style={styles.stepNumber}>Step {index + 1}</Text>
                <Text style={styles.stepTitle}>{step.title}</Text>
              </View>
              {expandedStep === index ? (
                <ChevronUp size={24} color="#1B5E20" />
              ) : (
                <ChevronDown size={24} color="#1B5E20" />
              )}
            </TouchableOpacity>
            {expandedStep === index && (
              <View style={styles.stepContent}>
                <Image source={{ uri: step.imageUrl }} style={styles.stepImage} />
                <Text style={styles.stepDescription}>{step.description}</Text>
              </View>
            )}
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Troubleshooting Guide</Text>
        {TROUBLESHOOTING.map((item, index) => (
          <View key={index} style={styles.troubleshootingCard}>
            <TouchableOpacity
              style={styles.troubleshootingHeader}
              onPress={() => setExpandedProblem(expandedProblem === index ? null : index)}
            >
              <View style={styles.troubleshootingTitleContainer}>
                {getIcon(item.icon)}
                <Text style={styles.troubleshootingTitle}>{item.problem}</Text>
              </View>
              {expandedProblem === index ? (
                <ChevronUp size={24} color="#1B5E20" />
              ) : (
                <ChevronDown size={24} color="#1B5E20" />
              )}
            </TouchableOpacity>
            {expandedProblem === index && (
              <View style={styles.troubleshootingContent}>
                <Text style={styles.troubleshootingSolution}>{item.solution}</Text>
              </View>
            )}
          </View>
        ))}
      </View>

      <View style={styles.supportSection}>
        <Text style={styles.supportTitle}>Need Additional Help?</Text>
        <Text style={styles.supportText}>
          Contact our support team for immediate assistance with any technical issues or questions.
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
  safetySection: {
    backgroundColor: '#FFF3F3',
    padding: 24,
    margin: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  safetyTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#D32F2F',
    marginVertical: 12,
  },
  safetyText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#D32F2F',
    textAlign: 'center',
    lineHeight: 24,
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1B5E20',
    marginBottom: 16,
  },
  stepCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E8F5E9',
    overflow: 'hidden',
  },
  stepHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  stepTitleContainer: {
    flex: 1,
  },
  stepNumber: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#558B2F',
    marginBottom: 4,
  },
  stepTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1B5E20',
  },
  stepContent: {
    padding: 16,
    backgroundColor: '#F9FBF9',
  },
  stepImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  stepDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#2E7D32',
    lineHeight: 24,
  },
  troubleshootingCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E8F5E9',
    overflow: 'hidden',
  },
  troubleshootingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  troubleshootingTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  troubleshootingTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1B5E20',
    marginLeft: 12,
  },
  troubleshootingContent: {
    padding: 16,
    backgroundColor: '#F9FBF9',
  },
  troubleshootingSolution: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#2E7D32',
    lineHeight: 24,
  },
  supportSection: {
    backgroundColor: '#F1F8E9',
    padding: 24,
    margin: 16,
    borderRadius: 16,
    marginBottom: 32,
  },
  supportTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1B5E20',
    marginBottom: 8,
  },
  supportText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#2E7D32',
    lineHeight: 24,
  },
});