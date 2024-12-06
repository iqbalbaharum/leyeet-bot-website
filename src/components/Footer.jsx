import { FaTwitter, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => (
  <div className='pt-6 text-base font-bold leading-6 sm:text-lg sm:leading-7 text-center py-8'>
    <div className='flex justify-center space-x-6'>
      <a href='https://x.com/leyeetcoin' target='_blank' rel='noopener noreferrer'>
        <FaTwitter className='text-4xl text-blue-500 hover:text-blue-400' />
      </a>

      {/* <a href='https://t.me/leyeetcoin' target='_blank' rel='noopener noreferrer'>
        <FaTelegramPlane className='text-4xl text-blue-400 hover:text-blue-300' />
      </a> */}
    </div>
  </div>
);

export default Footer;
