import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google';

// AQUI ESTÁ O SEGREDO DO WHATSAPP/GOOGLE
const inter = Inter({ subsets: ['latin'] });

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
      {/* 2. ADICIONA O COMPONENTE AQUI (Substitui pelo teu ID real 'GTM-XXXXXX') */}
      <GoogleTagManager gtmId="GTM-SEU_CODIGO_AQUI" />
      
      <body className={inter.className}>{children}</body>
    </html>
  );
}