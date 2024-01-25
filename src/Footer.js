const Footer = () => {
  const today = new Date();
  const yearNow = today.getFullYear();
  return <footer>Copyright &copy; {yearNow}</footer>;
};

export default Footer;
