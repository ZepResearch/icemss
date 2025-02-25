import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/NAV";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/ui/ToastProvider";
import TawkToChat from "@/components/TawkToChat";
import { FloatingWhatsAppButton } from "@/components/whatsapp";
import Script from 'next/script';
import DownloadPopup from "@/components/download-popup";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ICEMSS 2025 - International Conference on Engineering, Management and Social Sciences",
  description: "Join ICEMSS 2025 in Delhi, India. A 2-day multidisciplinary conference bringing together 1000+ academics and professionals from 50+ countries for cutting-edge research in engineering, management, and social sciences.",
  alternates: {
    canonical: 'https://www.icemss.in/',
  },
  
  // Adding security headers in metadata
  other: {
    'X-DNS-Prefetch-Control': 'on',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
    'Content-Security-Policy': `
      default-src 'self' https://*.icemss.in;
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.facebook.net https://connect.facebook.net https://embed.tawk.to https://*.cloudflare.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' data: https://*.facebook.com https://*.icemss.in https://*.cloudflare.com;
      font-src 'self' data: https://fonts.gstatic.com;
      connect-src 'self' https://*.facebook.com https://*.tawk.to wss://*.tawk.to https://*.icemss.in;
      frame-src 'self' https://*.facebook.com https://tawk.to https://*.tawk.to;
      object-src 'none';
    `.replace(/\s+/g, ' ').trim()
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '570370761168975');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mt-12`}
      >
        <DownloadPopup/>
        <Navbar/>
        {children}
        <Footer/>
        <ToastProvider/>
        <TawkToChat/>
        <FloatingWhatsAppButton phoneNumber="8260080050" message="How can we assist you?"/>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=570370761168975&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}