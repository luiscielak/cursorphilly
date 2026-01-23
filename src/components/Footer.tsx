const socialLinks = [
  { label: "Luma", href: "https://luma.com/cursorcommunity?k=c&tag=philadelphia" },
  { label: "LinkedIn", href: "https://www.linkedin.com/groups/13297520/" },
  { label: "Substack", href: "https://substack.com/@cursorphilly" },
  { label: "Discord", href: "https://discord.gg/Zt7tqsh47Z" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div className="max-w-sm">
            <h3 className="text-xl font-semibold mb-2">
              Cursor Meetup Philadelphia
            </h3>
            <p className="text-muted-foreground">
              A community gathering for anyone exploring AI-powered tools and workflows.
            </p>
          </div>

          <nav aria-label="Social links">
            <ul className="flex flex-wrap gap-6">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground link-hover font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-border text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Cursor Meetup Philadelphia. Presented by{" "}
            <a
              href="https://cursor.com/community"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover underline underline-offset-2"
            >
              Cursor Community
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
