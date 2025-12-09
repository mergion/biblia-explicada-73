import React from 'react';

export interface Testimonial {
  name: string;
  avatar: string;
  text: string;
  time: string;
  likes: number;
}

export interface Bonus {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  value: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}