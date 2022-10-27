import ThemeToggle from "../ToggleTheme";

export default function ({ children }: any) {
  return (
    <header className="app-header">
      <h1 className="header-contanier">
        <a aria-current="page" className="homepage-link" href="/">
          Overreacted
        </a>
      </h1>
      <div style={{ display: "inline-block" }}>
        <ThemeToggle />
      </div>
      <style jsx>{`
        .app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.625rem;
        }
        .header-contanier {
          box-shadow: none;
          text-decoration: none;
          color: rgb(34, 34, 34);
        }
        .homepage-link {
          box-shadow: none;
          text-decoration: none;
          color: var(--color-text-secondary);
        }
      `}</style>
    </header>
  );
}
