const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Chukwuma Michael Ezeobika. All rights reserved.</p>
        </div>
      </footer>
    );
};
  
export default Footer;