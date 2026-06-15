export function PageFooter({ children }) {
  return (
    <footer className="bg-footer text-subtexto-claro py-12">
      <div className="container mx-auto px-4 text-center">
        {children && <div className="mb-8">{children}</div>}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Lexis. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
