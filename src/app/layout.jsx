import "./globals.css";
import FloatingWhatsApp from "@/components/Floating/WhatsApp"; 

export const metadata = {
  title: "Scotish warehouse",
  icons: {
    icon: "/favicon.ico?v=2",
  },
  description:
    "Business energy, connectivity, water and payment solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}
        <FloatingWhatsApp />
      </body>
      
    </html>
  );
}