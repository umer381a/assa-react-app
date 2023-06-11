import { Link, To } from "react-router-dom";

type Props = {
  backLink?: To;
  children: React.ReactNode;
};

export const Layout = ({ children, backLink }: Props) => {
  return (
    <div className="layout-container">
      <div className="layout-header">
        <div className="layout-backlink">
          {backLink && (
            <Link to={backLink}>
              <img src="/imgs/left-arrow.png" alt="Scary left arrow" />
            </Link>
          )}
        </div>
        <img src="/imgs/logo.png" alt="Application title in scary font" />
        <div></div>
      </div>
      <div className="layout-body">{children}</div>
    </div>
  );
};
