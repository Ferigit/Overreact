import Navbar from "../Navbar";
export default function Layout({ children }: any) {
  return (
    <div className="layout-content">
      <Navbar />
      <main>{children}</main>
      <style jsx>{`
        .layout-content {
          margin-left: auto;
          margin-right: auto;
          max-width: 53rem;
          padding: 2.725rem 0px;
        }
      `}</style>
    </div>
  );
}
