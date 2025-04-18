import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';
import { Phone, Mail, MessageSquare, Send } from 'lucide-react-native';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [issue, setIssue] = useState('');
  const [message, setMessage] = useState('');

  const handleCall = () => {
    Linking.openURL('tel:+919049341754');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:er.joshimohit@gmail.com');
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log({ name, issue, message });
    // Reset form
    setName('');
    setIssue('');
    setMessage('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <MessageSquare size={32} color="#1B5E20" />
        <Text style={styles.headerTitle}>Contact Us</Text>
        <Text style={styles.headerDescription}>
          Get in touch with our team for support or inquiries
        </Text>
      </View>

      <View style={styles.contactCards}>
        <TouchableOpacity style={styles.contactCard} onPress={handleCall}>
          <Phone size={32} color="#1B5E20" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Phone</Text>
            <Text style={styles.contactValue}>+91 90493 41754</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactCard} onPress={handleEmail}>
          <Mail size={32} color="#1B5E20" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactValue}>er.joshimohit@gmail.com</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Send us a message</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Your Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#757575"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Issue Type</Text>
          <TextInput
            style={styles.input}
            value={issue}
            onChangeText={setIssue}
            placeholder="What's the issue about?"
            placeholderTextColor="#757575"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.messageInput]}
            value={message}
            onChangeText={setMessage}
            placeholder="Type your message here"
            placeholderTextColor="#757575"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Send size={20} color="#FFFFFF" />
          <Text style={styles.submitButtonText}>Send Message</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.supportSection}>
        <Text style={styles.supportTitle}>Need Immediate Help?</Text>
        <Text style={styles.supportText}>
          Our support team is available Monday to Saturday, 9:00 AM to 6:00 PM IST.
          For urgent issues, please call our support line.
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
    padding: 24,
    backgroundColor: '#F1F8E9',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#1B5E20',
    marginTop: 12,
    marginBottom: 8,
  },
  headerDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#2E7D32',
    textAlign: 'center',
  },
  contactCards: {
    padding: 16,
    gap: 16,
  },
  contactCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8F5E9',
  },
  contactInfo: {
    marginLeft: 16,
  },
  contactLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#558B2F',
    marginBottom: 4,
  },
  contactValue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#1B5E20',
  },
  formContainer: {
    padding: 16,
  },
  formTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#1B5E20',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#2E7D32',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F9FBF9',
    borderWidth: 1,
    
    borderColor: '#E8F5E9',
    borderRadius: 8,
    padding: 12,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#1B5E20',
  },
  messageInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#1B5E20',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  submitButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 8,
  },
  supportSection: {
    margin: 16,
    padding: 20,
    backgroundColor: '#F1F8E9',
    borderRadius: 12,
    marginBottom: 32,
  },
  supportTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#1B5E20',
    marginBottom: 8,
  },
  supportText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#2E7D32',
    lineHeight: 20,
  },
});