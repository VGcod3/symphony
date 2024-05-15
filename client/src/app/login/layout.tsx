import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | SYMPHONY',
  description: 'SYMPHONY project by F0rGotten;',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
