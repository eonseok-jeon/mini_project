import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './_common/styles/reset.css';
import { themeClass } from './_common/styles/theme.css';
import { mainLayout } from './style.css';

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
    // images: [
    //   {
    //     url: 'https://nextjs.org/og.png', // Must be an absolute URL
    //     width: 800,
    //     height: 400,
    //     alt: '',
    //   },
    // ],
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${themeClass}`}>
        <main className={mainLayout}>{children}</main>
      </body>
    </html>
  );
}
