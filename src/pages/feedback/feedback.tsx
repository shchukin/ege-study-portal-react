import Entry from "../../components/entry/entry.tsx";
import Intro from "../../components/intro/intro.tsx";
import Info from "../../components/info/info.tsx";
import Header from "../../components/header/header.tsx";
import Nav from "../../components/nav/nav.tsx";
import Footer from "../../components/footer/footer.tsx";

import './collapse.css';
import './listing.css';
import './feed.css';
import Panel from "../../components/panel/panel.tsx";
import Pagination from "../../components/pagination/pagination.tsx";


const Feedback: React.FC = () => {

  const data = {
    id: 1,
    url: 'lorem',
    author: 'lorem',
    content: 'lorem',
    tags: ['lorem', 'lorem', 'lorem'],
    date_published: 'Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)'
  }

  return (
    <>

      <Intro>Отзывы</Intro>

      <div className="feed container">
        <div className="feed__sidebar">
          <div className="feed__detachable-area">
            <div className="collapse">
              <button className="collapse__handler" type="button">
                Все новости
              </button>
              <nav className="collapse__dropdown">
                <h2 className="collapse__heading">
                  Предметы
                </h2>
                <div className="collapse__list">
                  <a className="collapse__link collapse__link--current" href="#">Все предметы</a>
                  <a className="collapse__link" href="#">Математика</a>
                  <a className="collapse__link" href="#">Русский язык</a>
                  <a className="collapse__link" href="#">Информатика</a>
                  <a className="collapse__link" href="#">Биология</a>
                  <a className="collapse__link" href="#">Химия</a>
                  <a className="collapse__link" href="#">Обществознание</a>
                  <a className="collapse__link" href="#">Литература</a>
                  <a className="collapse__link" href="#">География</a>
                  <a className="collapse__link" href="#">Английский</a>
                  <a className="collapse__link" href="#">История</a>
                  <a className="collapse__link" href="#">Физика</a>
                </div>
              </nav>
            </div>
            <div className="collapse">
              <button className="collapse__handler" type="button">
                Форматы занятий
              </button>
              <nav className="collapse__dropdown">
                <h2 className="collapse__heading">
                  Форматы занятий
                </h2>
                <div className="collapse__list">
                  <a className="collapse__link collapse__link--current" href="#">Все</a>
                  <a className="collapse__link" href="#">Очно</a>
                  <a className="collapse__link" href="#">Онлайн (в&nbsp;прямом эфире)</a>
                  <a className="collapse__link" href="#">В&nbsp;записи</a>
                </div>
              </nav>
            </div>
            <div className="collapse">
              <button className="collapse__handler" type="button">
                Преподаватели
              </button>
              <nav className="collapse__dropdown">
                <h2 className="collapse__heading">
                  Преподаватели
                </h2>
                <div className="collapse__list">
                  <a className="collapse__link collapse__link--current" href="#">Все</a>
                  <a className="collapse__link" href="#">Гущина О.В.</a>
                  <a className="collapse__link" href="#">Малкова А.Н.</a>
                  <a className="collapse__link" href="#">Кривенкова И.А.</a>
                  <a className="collapse__link" href="#">Храпова&nbsp;И.&nbsp;М.</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="feed__content">
          <div className="feed__bar">
            <Panel/>
          </div>
          <div className="feed__list listing">
            <div className="listing__filter hide-scrollbar">
              <div className="listing__ribbon">
                <button className="listing__tag listing__tag--current" type="button">Недавние</button>
                <button className="listing__tag" type="button">Только видео</button>
                <button className="listing__tag" type="button">Только статьи</button>
              </div>
            </div>
            <div className="listing__body">


              <div className="listing__item">
                <Entry data={data}/>
              </div>
              <div className="listing__item">
                <Entry data={data}/>
              </div>
              <div className="listing__item">
                <Entry data={data}/>
              </div>


            </div>
            <div className="listing__pages">
              <Pagination/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feedback;
