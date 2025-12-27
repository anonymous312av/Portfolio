const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Dribbble", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "GitHub", href: "#" },
  ];

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Copyright */}
          <div className="text-muted-foreground text-body-sm font-body">
            © {currentYear} Portfolio. Crafted with intention.
          </div>

          {/* Social Links */}
          <nav className="flex flex-wrap gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground text-body-sm font-body hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
