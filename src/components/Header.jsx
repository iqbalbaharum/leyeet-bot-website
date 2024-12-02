import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => (
    <header className="">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
                <div className="flex-1 md:flex md:items-center md:gap-12">
                    <a className="block text-teal-600" href="#">
                        <span className="sr-only">Home</span>
                        <img src="/logo.png" />
                    </a>
                </div>

                <div className="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            {/* <li>
                                <a className="text-gray-500 transition no-underline hover:text-gray-500/75" href="#"> Blog </a>
                            </li> */}
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button href="https://t.me/LeYeetbot" target={"_blank"} text={"Start Trading"} color="#ffcc00" />
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
