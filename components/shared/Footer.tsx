import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex-center sm:flex-between flex-col sm:flex-row gap-4 text-center">
        <Logo />
        <p>2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
