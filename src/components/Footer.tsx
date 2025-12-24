const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Clarie Faith. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
