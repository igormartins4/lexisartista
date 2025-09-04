export function HomePage() {
  // Lista de links (adicione mais objetos conforme necessário)
  const links = [
    {
      href: "/peito-sambo",
      label: "Peito Sambô (Single)",
      description: "Página do novo single de Lexis",
    },
    // Exemplo de como adicionar mais links:
    // {
    //   href: "https://instagram.com/lexisartista",
    //   label: "Instagram",
    //   description: "Siga Lexis no Instagram"
    // },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
      }}
    >
      <h1
        style={{
          fontSize: 32,
          fontWeight: 900,
          marginBottom: 32,
          letterSpacing: 1,
        }}
      >
        Links de Lexis
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          width: "100%",
          maxWidth: 400,
        }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              display: "block",
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 2px 8px #0001",
              padding: 24,
              textAlign: "center",
              textDecoration: "none",
              color: "#222",
              fontWeight: 700,
              fontSize: 20,
              transition: "transform 0.1s, box-shadow 0.1s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {link.label}
            {link.description && (
              <div
                style={{
                  fontWeight: 400,
                  fontSize: 14,
                  color: "#666",
                  marginTop: 6,
                }}
              >
                {link.description}
              </div>
            )}
          </a>
        ))}
      </div>
      <footer style={{ marginTop: 48, color: "#888", fontSize: 14 }}>
        &copy; {new Date().getFullYear()} Lexis. Todos os direitos reservados.
      </footer>
    </div>
  );
}
