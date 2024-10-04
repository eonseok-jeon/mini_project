import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './_styles/reset.css';
import { themeClass } from './_styles/theme.css';
import { mainLayout } from './style.css';
import Providers from './Providers';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: '엘카데미 | AI시대 생존을 위한 첫 사수!',
  description: '코딩교육 1위, 만족도 4.82점 엘카데미에서 차원이 다른 코딩교육을 경험해보세요!',
  authors: [{ name: 'Eonseok Jeon' }],
  openGraph: {
    title: '엘카데미 | AI시대 생존을 위한 첫 사수!',
    description: '코딩교육 1위, 만족도 4.82점 엘카데미에서 차원이 다른 코딩교육을 경험해보세요!',
    url: 'https://mini-project-nine-neon.vercel.app/',
    siteName: '엘카데미',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Providers>
        <body className={`${geistSans.variable} ${geistMono.variable} ${themeClass}`}>
          <main className={mainLayout}>{children}</main>
        </body>
      </Providers>
    </html>
  );
}
