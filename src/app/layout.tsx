import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// AQUI ESTÁ O SEGREDO DO WHATSAPP/GOOGLE
export const metadata: Metadata = {
  title: 'godev.js | Fullstack Developer',
  description: 'Portfólio de Gabriel Oliveira. Soluções web modernas com a stack JavaScript.',
  themeColor: '#020617',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className="scroll-smooth"> 
      {/* Adicionei 'scroll-smooth' acima para a rolagem ser suave */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}