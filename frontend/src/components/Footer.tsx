export default function Footer() {
  return (
    <footer className="py-4 mt-5 border-top">
      <div className="container d-flex justify-content-between align-items-center">
        <small>© {new Date().getFullYear()} BlockChainPro. Todos los derechos reservados.</small>
        <small className="text-muted">HTML5 • CSS3 • ES8 • React + TS</small>
      </div>
    </footer>
  );
}
