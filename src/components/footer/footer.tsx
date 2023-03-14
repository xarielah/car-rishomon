import { FaGithub } from "react-icons/fa";
import siteConfig from "../../lib/config/site-config.json";
import { SiteConfig } from "../../lib/config/site-config.type";

const Footer = () => {
  const cfg: SiteConfig = siteConfig;

  return (
    <footer className=" p-6 flex justify-center items-center">
      <a href={cfg.github.repo} target={"_blank"}>
        <FaGithub
          size="2rem"
          className="hover:text-blue-400 border-[1px] rounded-full border-transparent hover:border-slate-700/20 duration-300 ease-in-out"
        />
      </a>
    </footer>
  );
};

export default Footer;
