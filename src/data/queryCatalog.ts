import { ResearchQuery } from '../types/evidence';
import { genericEducationDemoData } from './genericDemoData';

export const sampleQueries: { label: string; query: string; category: string; description: string }[] = [
  {
    label: 'Restaurants under ₹1000',
    query: 'Best restaurants in Connaught Place under ₹1000',
    category: 'Dining & Food',
    description: 'Deconstructs authentic culinary reviews, peak wait times, and value for money.'
  },
  {
    label: 'B.Tech CSE Colleges',
    query: 'Best B.Tech CSE colleges in Delhi under ₹2 lakh/year with good coding culture',
    category: 'Higher Education',
    description: 'Analyzes peer coding culture, placement discussions, and attendance policies.'
  },
  {
    label: 'Hotels in Jaipur',
    query: 'Family-friendly hotels in Jaipur under ₹5000',
    category: 'Hospitality & Travel',
    description: 'Evaluates heritage authenticity, room acoustic insulation, and guest services.'
  },
  {
    label: 'University Housing',
    query: 'PGs near a university with good connectivity',
    category: 'Housing & Rentals',
    description: 'Corroborates tenant feedback on Wi-Fi stability, hygiene, and transit proximity.'
  },
  {
    label: 'Laptops for Coding',
    query: 'Best budget laptops for programming',
    category: 'Consumer Electronics',
    description: 'Analyzes sustained thermal performance, keyboard ergonomics, and Linux compatibility.'
  },
  {
    label: 'Software Evaluation',
    query: 'Is this software worth buying?',
    category: 'Software & Tools',
    description: 'Reviews feature reliability, pricing transparency, and customer support responsiveness.'
  }
];

export const catalogQueries: Record<string, ResearchQuery> = {
  [genericEducationDemoData.query.toLowerCase()]: genericEducationDemoData,
  'b.tech cse colleges in delhi': genericEducationDemoData,
};
