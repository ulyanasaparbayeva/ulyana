import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer bg-[#B9B4C7]">
      <div className="container">
        <ul className="flex  justify-center gap-5 cursor-pointer">
          <li>
            <Link to="https://t.me/usaparbayeva" target="_blank">
              Telegram
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/ulyana-saparbayeva-844124263/" target="_blank">
              linkedin
            </Link>
          </li>
          <li>
            <Link to="https://github.com/ulyanasaparbayeva" target="_blank">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Footer