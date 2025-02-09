import "./globals.css";
import "./index.css";



// export const metadata = {
//   title: "Muse Feta | Portfolio",
//   description:
//     "Muse is a creative Full Stack Web Developer based in Ethiopia. Passionate and dedicated to the craft, Muse brings a few years of professional experience as a Full Stack Developer. Equipped with the skills to create great, appealing, and premium websites, Muse ensures every project aligns with the latest web standards.",
//   verification: {
//     google: "XUp4JdVHCCfCCdsNO19XllztF0mlUSaAn5_VjbOayHw",
//   },
// };

export const metadata = {
  title: "Muse Feta's | Portfolio Website",
  description:
    "Muse is a creative Full Stack Web Developer based in Ethiopia. Passionate and dedicated to the craft, Muse brings a few years of professional experience as a Full Stack Developer. Equipped with the skills to create great, appealing, and premium websites, Muse ensures every project aligns with the latest web standards.",
  verification: {
    google: "XUp4JdVHCCfCCdsNO19XllztF0mlUSaAn5_VjbOayHw",
  },
  openGraph: {
    title: "Muse Feta's | Portfolio Website",
    description:
      "Muse is a Full Stack Web Developer with professional experience in building dynamic, responsive websites.",
    url: "https://musefeta.vercel.app",
    siteName: "Muse Feta's | Portfolio Website",
    images: [
      {
        url: "/favicon.ico", // Replace with the path to your preview image in the public folder
        alt: "Muse Portfolio Preview",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Type of card: "summary" or "summary_large_image"
    title: "Muse Feta's | Portfolio Website",
    description:
      "Muse is a Full Stack Web Developer with professional experience in building dynamic, responsive websites.",
    site: "@musefeta", // Replace with your Twitter handle (optional)
    creator: "@musefeta", // Replace with your Twitter handle (optional)
    images: [
      {
        url: "/meta-image.png", // Replace with the path to your preview image
        alt: "Muse Portfolio Preview",
      },
    ],
  },
  links: {
    linkedin: "https://www.linkedin.com/in/musefeta",
    github: "https://github.com/muse-feta",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
