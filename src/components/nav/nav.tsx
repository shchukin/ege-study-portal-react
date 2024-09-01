import './nav.css';

const Nav: React.FC = () => {
  return (
    <div className="nav">
      <div className="nav__item nav__item--has-dropdown">
        <a className="nav__link" href="#">О&nbsp;центре</a>
        <div className="nav__dropdown">
          <a className="nav__sub-link" href="#">О&nbsp;центре</a>
          <a className="nav__sub-link" href="#">История центра</a>
          <a className="nav__sub-link" href="#">День открытых дверей</a>
          <a className="nav__sub-link" href="#">Благотворительность</a>
          <a className="nav__sub-link" href="#">Вакансии в&nbsp;центре</a>
          <a className="nav__sub-link" href="#">Контакты</a>
        </div>
      </div>
      <div className="nav__item">
        <a className="nav__link" href="#">Наши преподаватели</a>
      </div>
      <div className="nav__item">
        <a className="nav__link" href="#">Отзывы</a>
      </div>
      <div className="nav__item">
        <a className="nav__link" href="#">Новости</a>
      </div>
      <div className="nav__item">
        <a className="nav__link" href="#">Контакты</a>
      </div>
    </div>
  )
}

export default Nav;
