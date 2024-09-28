import { Link } from "react-router-dom";

const Header = () => (
    <div className='pt-6 text-base font-bold leading-6 sm:text-lg sm:leading-7 text-center py-8'>
        <div className='flex justify-center space-x-6'>
            <Link to="/">[Home]</Link>
            <Link to="/buy">[How to buy]</Link>
        </div>
    </div>
  );
  
  export default Header;
  