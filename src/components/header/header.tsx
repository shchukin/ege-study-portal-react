import './header.css';
import './submenu.css';
import Logo from "../logo/logo.tsx";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__gate">
        <button className="header__show-search" type="button">
          <svg className="header__magnifier" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.8859 18 14.5977 17.2542 15.8564 16.0414C15.8827 16.0072 15.9115 15.9742 15.9429 15.9429C15.9742 15.9115 16.0072 15.8827 16.0414 15.8564C17.2542 14.5977 18 12.8859 18 11C18 7.13401 14.866 4 11 4ZM18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177Z"/>
          </svg>
          <svg className="header__search-cross" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.93112 2.92879C3.32165 2.53826 3.95481 2.53826 4.34534 2.92879L17.0733 15.6567C17.4638 16.0472 17.4638 16.6804 17.0733 17.0709C16.6827 17.4614 16.0496 17.4614 15.659 17.0709L2.93112 4.343C2.5406 3.95248 2.5406 3.31931 2.93112 2.92879Z"/>
            <path d="M17.0717 2.92864C17.4623 3.31916 17.4623 3.95232 17.0717 4.34285L4.34383 17.0708C3.9533 17.4613 3.32014 17.4613 2.92961 17.0708C2.53909 16.6802 2.53909 16.0471 2.92961 15.6566L15.6575 2.92864C16.0481 2.53811 16.6812 2.53811 17.0717 2.92864Z"/>
          </svg>
          <span className="header__search-label">Поиск</span>
          <span className="header__close-label">Закрыть</span>
        </button>
        <button className="header__login" type="button">
          <svg className="header__door" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 3C14 2.44772 14.4477 2 15 2H19C19.7957 2 20.5587 2.31607 21.1213 2.87868C21.6839 3.44129 22 4.20435 22 5V19C22 19.7957 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7957 22 19 22H15C14.4477 22 14 21.5523 14 21C14 20.4477 14.4477 20 15 20H19C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V5C20 4.73478 19.8946 4.48043 19.7071 4.29289C19.5196 4.10536 19.2652 4 19 4H15C14.4477 4 14 3.55228 14 3ZM9.29289 6.29289C9.68342 5.90237 10.3166 5.90237 10.7071 6.29289L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071C8.90237 17.3166 8.90237 16.6834 9.29289 16.2929L12.5858 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H12.5858L9.29289 7.70711C8.90237 7.31658 8.90237 6.68342 9.29289 6.29289Z"/>
          </svg>
          Войти
        </button>
      </div>
      <form className="header__search-dropdown search">
        <input className="search__field" type="text" placeholder="Поиск..."/>
        <button className="search__submit" type="submit">
          <svg className="search__magnifier" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18C12.8859 18 14.5977 17.2542 15.8564 16.0414C15.8827 16.0072 15.9115 15.9742 15.9429 15.9429C15.9742 15.9115 16.0072 15.8827 16.0414 15.8564C17.2542 14.5977 18 12.8859 18 11C18 7.13401 14.866 4 11 4ZM18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177Z"/>
          </svg>
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
                <path fillOpacity=".98" fillRule="evenodd" d="M5 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H6Zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Zm9.707-3.707a1 1 0 0 0-1.414 1.414l3 3 .707.707.707-.707 3-3a1 1 0 0 0-1.414-1.414L17 16.586l-2.293-2.293Z" clip-rule="evenodd"/>
              </svg>
              <span className="desktop-only">Все курсы</span>
              <span className="mobile-only">Каталог курсов</span>
            </button>
            <div className="header__dropdown">
              <button className="header__close" type="button">
                <svg className="header__arrow" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 9.3827L6.2878 9.3827L9.06 6.7696L8.2436 6L4 10L8.2436 14L9.06 13.2304L6.2968 10.6258L17 10.6258L17 9.3827Z"/>
                </svg>
                <span className="header__back">Назад</span>
                <svg className="header__cross" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93112 2.92879C3.32165 2.53826 3.95481 2.53826 4.34534 2.92879L17.0733 15.6567C17.4638 16.0472 17.4638 16.6804 17.0733 17.0709C16.6827 17.4614 16.0496 17.4614 15.659 17.0709L2.93112 4.343C2.5406 3.95248 2.5406 3.31931 2.93112 2.92879Z"/>
                  <path d="M17.0717 2.92864C17.4623 3.31916 17.4623 3.95232 17.0717 4.34285L4.34383 17.0708C3.9533 17.4613 3.32014 17.4613 2.92961 17.0708C2.53909 16.6802 2.53909 16.0471 2.92961 15.6566L15.6575 2.92864C16.0481 2.53811 16.6812 2.53811 17.0717 2.92864Z"/>
                </svg>
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
                <svg className="header__arrow" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 9.3827L6.2878 9.3827L9.06 6.7696L8.2436 6L4 10L8.2436 14L9.06 13.2304L6.2968 10.6258L17 10.6258L17 9.3827Z"/>
                </svg>
                <span className="header__back">Назад</span>
                <svg className="header__cross" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93112 2.92879C3.32165 2.53826 3.95481 2.53826 4.34534 2.92879L17.0733 15.6567C17.4638 16.0472 17.4638 16.6804 17.0733 17.0709C16.6827 17.4614 16.0496 17.4614 15.659 17.0709L2.93112 4.343C2.5406 3.95248 2.5406 3.31931 2.93112 2.92879Z"/>
                  <path d="M17.0717 2.92864C17.4623 3.31916 17.4623 3.95232 17.0717 4.34285L4.34383 17.0708C3.9533 17.4613 3.32014 17.4613 2.92961 17.0708C2.53909 16.6802 2.53909 16.0471 2.92961 15.6566L15.6575 2.92864C16.0481 2.53811 16.6812 2.53811 17.0717 2.92864Z"/>
                </svg>
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
                <svg className="header__arrow" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 9.3827L6.2878 9.3827L9.06 6.7696L8.2436 6L4 10L8.2436 14L9.06 13.2304L6.2968 10.6258L17 10.6258L17 9.3827Z"/>
                </svg>
                <span className="header__back">Назад</span>
                <svg className="header__cross" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93112 2.92879C3.32165 2.53826 3.95481 2.53826 4.34534 2.92879L17.0733 15.6567C17.4638 16.0472 17.4638 16.6804 17.0733 17.0709C16.6827 17.4614 16.0496 17.4614 15.659 17.0709L2.93112 4.343C2.5406 3.95248 2.5406 3.31931 2.93112 2.92879Z"/>
                  <path d="M17.0717 2.92864C17.4623 3.31916 17.4623 3.95232 17.0717 4.34285L4.34383 17.0708C3.9533 17.4613 3.32014 17.4613 2.92961 17.0708C2.53909 16.6802 2.53909 16.0471 2.92961 15.6566L15.6575 2.92864C16.0481 2.53811 16.6812 2.53811 17.0717 2.92864Z"/>
                </svg>
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
                <svg className="header__arrow" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 9.3827L6.2878 9.3827L9.06 6.7696L8.2436 6L4 10L8.2436 14L9.06 13.2304L6.2968 10.6258L17 10.6258L17 9.3827Z"/>
                </svg>
                <span className="header__back">Назад</span>
                <svg className="header__cross" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.93112 2.92879C3.32165 2.53826 3.95481 2.53826 4.34534 2.92879L17.0733 15.6567C17.4638 16.0472 17.4638 16.6804 17.0733 17.0709C16.6827 17.4614 16.0496 17.4614 15.659 17.0709L2.93112 4.343C2.5406 3.95248 2.5406 3.31931 2.93112 2.92879Z"/>
                  <path d="M17.0717 2.92864C17.4623 3.31916 17.4623 3.95232 17.0717 4.34285L4.34383 17.0708C3.9533 17.4613 3.32014 17.4613 2.92961 17.0708C2.53909 16.6802 2.53909 16.0471 2.92961 15.6566L15.6575 2.92864C16.0481 2.53811 16.6812 2.53811 17.0717 2.92864Z"/>
                </svg>
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
            <svg className="header__pin" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.24177 2.66634C7.11661 2.66634 6.03753 3.11331 5.24193 3.90892C4.44632 4.70453 3.99935 5.7836 3.99935 6.90877C3.99935 8.5499 5.07045 10.1601 6.2712 11.4275C6.85794 12.0469 7.44695 12.5543 7.89001 12.9071C8.02205 13.0123 8.14065 13.1033 8.24177 13.1791C8.3429 13.1033 8.4615 13.0123 8.59353 12.9071C9.0366 12.5543 9.62561 12.0469 10.2123 11.4275C11.4131 10.1601 12.4842 8.5499 12.4842 6.90877C12.4842 5.7836 12.0372 4.70453 11.2416 3.90892C10.446 3.11331 9.36693 2.66634 8.24177 2.66634ZM8.24177 13.9997C7.87197 14.5544 7.87181 14.5543 7.87162 14.5541L7.86991 14.553L7.86605 14.5504L7.85311 14.5417C7.8422 14.5342 7.82675 14.5237 7.80706 14.51C7.7677 14.4828 7.71138 14.4432 7.64051 14.392C7.49884 14.2897 7.29867 14.1407 7.05944 13.9502C6.58206 13.57 5.94379 13.0207 5.30326 12.3445C4.04946 11.0211 2.66602 9.08582 2.66602 6.90877C2.66602 5.42998 3.25346 4.01177 4.29912 2.96611C5.34477 1.92045 6.76299 1.33301 8.24177 1.33301C9.72056 1.33301 11.1388 1.92045 12.1844 2.96611C13.2301 4.01177 13.8175 5.42998 13.8175 6.90877C13.8175 9.08582 12.4341 11.0211 11.1803 12.3445C10.5398 13.0207 9.90149 13.57 9.4241 13.9502C9.18488 14.1407 8.9847 14.2897 8.84304 14.392C8.77217 14.4432 8.71584 14.4828 8.67648 14.51C8.6568 14.5237 8.64135 14.5342 8.63043 14.5417L8.61749 14.5504L8.61364 14.553L8.61238 14.5538C8.6122 14.554 8.61157 14.5544 8.24177 13.9997ZM8.24177 13.9997L8.61157 14.5544C8.38764 14.7037 8.09556 14.7034 7.87162 14.5541L8.24177 13.9997ZM8.24177 5.93907C7.70622 5.93907 7.27208 6.37322 7.27208 6.90877C7.27208 7.44431 7.70622 7.87846 8.24177 7.87846C8.77732 7.87846 9.21147 7.44431 9.21147 6.90877C9.21147 6.37322 8.77732 5.93907 8.24177 5.93907ZM5.93874 6.90877C5.93874 5.63684 6.96984 4.60574 8.24177 4.60574C9.5137 4.60574 10.5448 5.63684 10.5448 6.90877C10.5448 8.18069 9.5137 9.2118 8.24177 9.2118C6.96984 9.2118 5.93874 8.18069 5.93874 6.90877Z"/>
            </svg>
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
