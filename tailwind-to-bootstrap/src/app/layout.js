import './globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

export const metadata = {
  title: "Tailwind UI to bootstrap components",
  description: "Converting Tailwind UI to Bootstrap components using Next Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
