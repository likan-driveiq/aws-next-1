import '@/styles/globals.css';
import '@/styles/home.css';
import '@/styles/general.css';

export default function RootLayout({ children }: { children: React.ReactNode; }): JSX.Element {
  return (
    <html>
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
