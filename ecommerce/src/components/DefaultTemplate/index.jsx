import Header from "./Header";
import Footer from "./Footer";

export default function DefalutTemplate({ children, title }) {
  return (
    <>
      <Header title={title}  />

      <main>{children}</main>

      <Footer />
    </>
  );
}
