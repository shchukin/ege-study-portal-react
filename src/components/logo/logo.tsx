import './logo.css';
import {Link} from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <Link className="logo" to={'/'}>ЕГЭ-Студия: Готовим на 80 и выше</Link>
  )
}

export default Logo;
