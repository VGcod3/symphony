import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | HARMONY',
  description: 'HARMONY project byIrish Whiskers;',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
