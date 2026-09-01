import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bella Cucina',
  description: 'An authentic Italian restaurant website for Bella Cucina, showcasing traditional Tuscan cuisine with wood-fired pizzas and handmade pasta in a warm, rustic NYC setting.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#F5EDE4', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
