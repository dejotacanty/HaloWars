import { useLocation } from "react-router";
import { Footer } from "../Footer";

export const Page = ({ children, title }: { children: any; title: string }) => {
  const { pathname } = useLocation();

  return (
    <main id="main">
      <div className="region">
        <div className="content">
          {pathname !== "/game" && <h2 className="text--larger">{title}</h2>}
          {pathname !== "/game" && <hr />}
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
};
