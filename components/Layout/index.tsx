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
          max-width: 42rem;
          padding: 1.725rem 1.3125rem;
        }
      `}</style>
    </div>
  );
}
