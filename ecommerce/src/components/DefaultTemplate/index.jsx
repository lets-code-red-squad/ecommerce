import Header from "./Header";
import Footer from "./Footer";

export default function DefalutTemplate({ children }) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}
