import "./globals.css";
import "./index.css";



export const metadata = {
  title: "Muse | Portfolio",
  description:
    "Muse is a creative Full Stack Web Developer based in Ethiopia. Passionate and dedicated to the craft, Muse brings a few years of professional experience as a Full Stack Developer. Equipped with the skills to create great, appealing, and premium websites, Muse ensures every project aligns with the latest web standards.",
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
