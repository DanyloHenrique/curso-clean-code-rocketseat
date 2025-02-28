export default function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="read-the-docs">
      Copyright &copy; Rocketseat {currentYear}
    </footer>
  );
}
