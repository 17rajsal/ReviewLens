import { ResearchQuery } from '../types/evidence';
import { genericEducationDemoData } from './genericDemoData';

export const sampleQueries: { label: string; query: string; category: string; description: string }[] = [
  {
    label: 'SRCC vs Hindu College',
    query: 'Shri Ram College of Commerce SRCC vs Hindu College placements and ranking',
    category: 'Higher Education',
    description: 'Compares NIRF 2024 #1 rankings, corporate placement packages, and campus societies.'
  },
  {
    label: 'DU North Campus Colleges',
    query: 'Top Delhi University colleges in North Campus with high NIRF rankings',
    category: 'Higher Education',
    description: 'Evaluates SRCC, Miranda House, Hindu, St. Stephen’s, Hansraj, and Ramjas.'
  },
  {
    label: 'Bukhara at ITC Maurya',
    query: 'Bukhara ITC Maurya dining experience, Dal Bukhara reviews, and price',
    category: 'Dining & Food',
    description: 'Deconstructs 6,800+ Google Maps reviews, 18-hour Dal Bukhara consistency, and pricing.'
  },
  {
    label: 'Fine Dining in South Delhi',
    query: 'Best fine dining restaurants in South Delhi with authentic cuisine',
    category: 'Dining & Food',
    description: 'Analyzes Indian Accent, Dakshin, and Olive Bar & Kitchen culinary ratings and ambiance.'
  },
  {
    label: 'Restaurants in Connaught Place',
    query: 'Best restaurants in Connaught Place under ₹1500',
    category: 'Dining & Food',
    description: 'Deconstructs authentic culinary reviews, peak wait times, and value for money.'
  },
  {
    label: 'B.Tech CSE Colleges',
    query: 'Best B.Tech CSE colleges in Delhi under ₹2 lakh/year with good coding culture',
    category: 'Higher Education',
    description: 'Analyzes peer coding culture, placement discussions, and attendance policies.'
  }
];

export const catalogQueries: Record<string, ResearchQuery> = {
  [genericEducationDemoData.query.toLowerCase()]: genericEducationDemoData,
  'top delhi university colleges with high nirf rankings and strong placements': genericEducationDemoData,
  'top du north campus colleges': genericEducationDemoData,
  'b.tech cse colleges in delhi': genericEducationDemoData,
};
