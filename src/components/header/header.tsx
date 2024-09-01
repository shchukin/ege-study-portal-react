import './header.css';
import './submenu.css';
import Logo from "../logo/logo.tsx";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__gate">
        <button className="header__show-search" type="button">
          <img className="header__magnifier" src="../symbols/magnifier.svg" width="24" height="24" alt=""/>
          <img className="header__search-cross" src="../symbols/cross.svg" width="24" height="24" alt=""/>
          <span className="header__search-label">Поиск</span>
          <span className="header__close-label">Закрыть</span>
        </button>
        <button className="header__login" type="button">
          <img className="header__door" src="../symbols/door.svg" width="24" height="24" alt=""/>
          Войти
        </button>
      </div>
      <form className="header__search-dropdown search">
        <input className="search__field" type="text" placeholder="Поиск..."/>
        <button className="search__submit" type="submit">
          <img className="search__magnifier" src="../symbols/magnifier.svg" width="24" height="24" alt=""/>
        </button>
      </form>
      <div className="header__emblem">
        <Logo/>
      </div>
      <button className="header__burger" type="button">
        Меню
      </button>
      <button className="header__close-burger" type="button">
        Закрыть
      </button>
      <div className="header__mobile-dropdown">
        <div className="header__nav">
          <div className="header__item header__item--has-dropdown header__item--catalog">
            <button className="header__link" type="button">
              <svg className="header__menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill-opacity=".98" fill-rule="evenodd" d="M5 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H6Zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm9.707-3.707a1 1 0 0 0-1.414 1.414l3 3 .707.707.707-.707 3-3a1 1 0 0 0-1.414-1.414L17 16.586l-2.293-2.293Z" clip-rule="evenodd"/>
              </svg>
              <span className="desktop-only">Все курсы</span>
              <span className="mobile-only">Каталог курсов</span>
            </button>
            <div className="header__dropdown">
              <button className="header__close" type="button">
                <img className="header__arrow" src="../symbols/arrow-left.svg" width="20" height="20" alt=""/>
                <span className="header__back">Назад</span>
                <img className="header__cross" src="../symbols/cross.svg" width="20" height="20" alt=""/>
              </button>
              <div className="submenu">
                <div className="submenu__summary">
                  <b className="submenu__heading">
                    Курсы подготовки к ЕГЭ, ОГЭ&nbsp;и олимпиадам по всем школьным предметам
                  </b>
                  <div className="submenu__operations">
                    <a className="submenu__action button button--border-accent" href="#">Выбрать курс →</a>
                  </div>
                </div>
                <div className="submenu__column">
                  <b className="submenu__sub-heading">
                    Предметы
                  </b>
                  <ul className="submenu__list">
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Математика</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Русский язык</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Обществознание</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Литература</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Физика</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Информатика</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Химия</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">История</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Биология</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Английский язык</a>
                    </li>
                  </ul>
                </div>
                <div className="submenu__column">
                  <b className="submenu__sub-heading">
                    Формат занятий
                  </b>
                  <ul className="submenu__list">
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Очные курсы в Москве</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Онлайн-курсы в прямом эфире</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Курсы в записи</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Летние очные курсы</a>
                    </li>
                  </ul>
                </div>
                <div className="submenu__column">
                  <b className="submenu__sub-heading">
                    Цели
                  </b>
                  <ul className="submenu__list">
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Подготовиться к ЕГЭ</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Подготовиться к ОГЭ</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Подготовиться к олимпиаде</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header__item header__item--has-dropdown">
            <button className="header__link" type="button">
              Преподавателям
            </button>
            <div className="header__dropdown">
              <button className="header__close" type="button">
                <img className="header__arrow" src="../symbols/arrow-left.svg" width="20" height="20" alt=""/>
                <span className="header__back">Назад</span>
                <img className="header__cross" src="../symbols/cross.svg" width="20" height="20" alt=""/>
              </button>
              <div className="submenu">
                <div className="submenu__summary">
                  <b className="submenu__heading">
                    Курсы для учителей по подготовке учеников к ЕГЭ&nbsp;и ОГЭ
                  </b>
                  <div className="submenu__operations">
                    <a className="submenu__action button button--border-accent" href="#">Выбрать курс для учителей →</a>
                  </div>
                </div>
                <div className="submenu__column">
                  <b className="submenu__sub-heading">
                    Предметы
                  </b>
                  <ul className="submenu__list">
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Математика</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Русский язык</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Физика</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Информатика</a>
                    </li>
                  </ul>
                </div>
                <div className="submenu__column">
                  <b className="submenu__sub-heading">
                    Повышение квалификации
                  </b>
                  <ul className="submenu__list">
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Школа мастерства по математике</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Курсы в записи</a>
                    </li>
                  </ul>
                </div>
                <div className="submenu__column">
                  <b className="submenu__sub-heading">
                    Бесплатные материалы
                  </b>
                  <ul className="submenu__list">
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Учебники</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Справочные материалы</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Пробные ЕГЭ</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Пробные ОГЭ</a>
                    </li>
                    <li className="submenu__item submenu__item--pushed">
                      <a className="submenu__link" href="#">Все бесплатные материалы</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header__item header__item--has-dropdown">
            <button className="header__link" type="button">
              Родителям
            </button>
            <div className="header__dropdown">
              <button className="header__close" type="button">
                <img className="header__arrow" src="../symbols/arrow-left.svg" width="20" height="20" alt=""/>
                <span className="header__back">Назад</span>
                <img className="header__cross" src="../symbols/cross.svg" width="20" height="20" alt=""/>
              </button>
              <div className="submenu">
                <div className="submenu__summary">
                  <b className="submenu__heading">
                    Помочь ребенку подготовиться к ЕГЭ, ОГЭ&nbsp;и олимпиаде
                  </b>
                  <div className="submenu__operations">
                    <a className="submenu__action button button--border-accent" href="#">Подобрать курс<br className="less-than-400px-only"/> для ребенка →</a>
                    <a className="submenu__action button button--border-accent" href="#">Найти материалы<br className="less-than-400px-only"/> для подготовки →</a>
                  </div>
                </div>
                <div className="submenu__column">
                  <b className="submenu__sub-heading">
                    Учебники по предметам
                  </b>
                  <ul className="submenu__list">
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Математика</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Русский язык</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Обществознание</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Литература</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Физика</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Информатика</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Химия</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">История</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Биология</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Английский язык</a>
                    </li>
                  </ul>
                </div>
                <div className="submenu__column">
                  <b className="submenu__sub-heading">
                    Подобрать курс для ребенка
                  </b>
                  <ul className="submenu__list">
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Очные курсы в Москве</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Онлайн-курсы в прямом эфире</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Курсы в записи</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Летние очные курсы</a>
                    </li>
                  </ul>
                </div>
                <div className="submenu__column">
                  <b className="submenu__sub-heading">
                    Бесплатные материалы
                  </b>
                  <ul className="submenu__list">
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Учебники</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Справочные материалы</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Пробные ЕГЭ</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Пробные ОГЭ</a>
                    </li>
                    <li className="submenu__item submenu__item--pushed">
                      <a className="submenu__link" href="#">Все бесплатные материалы</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header__item">
            <a className="header__link" href="#">
              ЕГЭ-2023
            </a>
          </div>
          <div className="header__item header__item--has-dropdown">
            <button className="header__link" type="button">
              Бесплатные материалы
            </button>
            <div className="header__dropdown">
              <button className="header__close" type="button">
                <img className="header__arrow" src="../symbols/arrow-left.svg" width="20" height="20" alt=""/>
                <span className="header__back">Назад</span>
                <img className="header__cross" src="../symbols/cross.svg" width="20" height="20" alt=""/>
              </button>
              <div className="submenu">
                <div className="submenu__summary">
                  <b className="submenu__heading">
                    Бесплатные материалы для подготовкик ЕГЭ и ОГЭ по всем школьным предметам
                  </b>
                  <div className="submenu__operations">
                    <a className="submenu__action button button--border-accent" href="#">Перейти к материалам →</a>
                  </div>
                </div>
                <div className="submenu__column">
                  <b className="submenu__sub-heading">
                    Учебники по предметам
                  </b>
                  <ul className="submenu__list">
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Математика</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Русский язык</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Обществознание</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Литература</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Физика</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Информатика</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Химия</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">История</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Биология</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Английский язык</a>
                    </li>
                  </ul>
                </div>
                <div className="submenu__column">
                  <b className="submenu__sub-heading">
                    Самостоятельная подготовка
                  </b>
                  <ul className="submenu__list">
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Очные курсы в Москве</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Онлайн-курсы в прямом эфире</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Курсы в записи</a>
                    </li>
                    <li className="submenu__item">
                      <a className="submenu__link" href="#">Летние очные курсы</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__contacts">
          <div className="header__phone">
            <a className="link link--fake" href="tel:+78007750682">8 (800) 775-06-82</a>
          </div>
          <div className="header__address">
            <img className="header__pin" src="../symbols/geo.svg" width="16" height="16" alt=""/>
            Москва
          </div>
        </div>
        <div className="header__social media media--enlarged">
          <a className="media__item media__item--vk" href="#">Вконтакте</a>
          <a className="media__item media__item--instagram" href="#">Instagram</a>
          <a className="media__item media__item--youtube" href="#">YouTube</a>
        </div>
      </div>
    </header>
  )
}

export default Header;
