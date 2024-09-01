import './footer.css';
import Media from "../media/media.tsx";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__wrap container container--wild">
        <div className="footer__column footer__column--summary">
          <div className="footer__emblem logo">
            Logo
          </div>
          <button className="footer__handler footer__handler--info" type="button">
            Информация
          </button>
          <div className="footer__dropdown">
            <div className="footer__item">
              <a className="footer__link" href="#">Свидетельства</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Политика конфиденциальности</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Оферта</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Условия использования видеокурсов</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Технические условия</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Для франчайзи</a>
            </div>
          </div>
          <div className="footer__social">
            <Media/>
          </div>
          <div className="footer__copyright">
            © ЕГЭ-Студия, 2008–2022
          </div>
        </div>
        <div className="footer__column">
          <button className="footer__handler" type="button">О центре</button>
          <div className="footer__dropdown">
            <div className="footer__item">
              <a className="footer__link" href="#">О центре</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Наши преподаватели</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Отзывы</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Новости</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">История центра</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">День открытых дверей</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Благотворительность</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Вакансии в центре</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Контакты</a>
            </div>
          </div>
        </div>
        <div className="footer__column">
          <button className="footer__handler" type="button">
            Курсы
          </button>
          <div className="footer__dropdown">
            <div className="footer__item">
              <a className="footer__link" href="#">Курсы по математике</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Курсы по русскому языку</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Курсы по обществознанию</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Курсы по литературе</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Курсы по физике</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Курсы по информатике</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Курсы по химии</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Курсы по истории</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Курсы по биологии</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Курсы по английскому языку</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Все курсы</a>
            </div>
          </div>
        </div>
        <div className="footer__column">
          <button className="footer__handler" type="button">
            Форматы обучения
          </button>
          <div className="footer__dropdown">
            <div className="footer__item">
              <a className="footer__link" href="#">Очные курсы в Москве</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Онлайн-курсы в прямом эфире</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Курсы в записи</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Летние очные курсы</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Все курсы</a>
            </div>
          </div>
        </div>
        <div className="footer__column">
          <button className="footer__handler" type="button">
            Бесплатные материалы
          </button>
          <div className="footer__dropdown">
            <div className="footer__item">
              <a className="footer__link" href="#">Учебники</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Справочные материалы</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Пробные ЕГЭ</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Пробные ОГЭ</a>
            </div>
            <div className="footer__item">
              <a className="footer__link" href="#">Все бесплатные материалы</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
