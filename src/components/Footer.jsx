import { AiOutlineCopyright } from "react-icons/ai";

function Footer() {
  return (
    <footer className="fixed bottom-0 footer footer-center bg-base-300 text-base-content py-1 sm:py-2">
      <aside className="sm:flex items-center">
        <h1 className="text-center flex items-center">
          <span>
            <AiOutlineCopyright className="mr-1 sm:mr-2" />
          </span>
          This site was developed by
        </h1>
        <a
          target="blank"
          className="ml-1 sm:ml-1 text-blue-800"
          href="https://github.com/ilyosjonaxmadaliyev"
        >
          Ilyosjon Axmadaliyev
        </a>
      </aside>
    </footer>
  );
}

export default Footer;
