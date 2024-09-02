import React, { useState } from 'react';
import Entry from "../../components/entry/entry.tsx";
import Intro from "../../components/intro/intro.tsx";
import './collapse.css';
import './listing.css';
import './feed.css';
import Panel from "../../components/panel/panel.tsx";
import Pagination from "../../components/pagination/pagination.tsx";
import {mockData} from '../../mocks/mockData.ts';

const Feedback: React.FC = () => {
  const [filteredData, setFilteredData] = useState(mockData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [selectedFilters, setSelectedFilters] = useState({
    topic: 'Все предметы',
    format: 'Все',
    author: 'Все',
    hasVideo: null as boolean | null,
  });

  const handleFilterChange = (type: string, value: string) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters, [type]: value };
      applyFilters(newFilters);
      return newFilters;
    });
  };

  const handleVideoToggle = (hasVideo: boolean | null) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters, hasVideo };
      applyFilters(newFilters);
      return newFilters;
    });
  };

  const applyFilters = (filters: typeof selectedFilters) => {
    const filtered = mockData.filter((entry) => {
      const matchTopic = filters.topic === 'Все предметы' || entry.topic === filters.topic;
      const matchFormat = filters.format === 'Все' || entry.format === filters.format;
      const matchAuthor = filters.author === 'Все' || entry.author === filters.author;
      const matchVideo = filters.hasVideo === null || (filters.hasVideo ? !!entry.video : !entry.video);
      return matchTopic && matchFormat && matchAuthor && matchVideo;
    });
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEntries = filteredData.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

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
                <h2 className="collapse__heading">Предметы</h2>
                <div className="collapse__list">
                  <button className="collapse__link collapse__link--current" type="button" onClick={() => handleFilterChange('topic', 'Все предметы')}>Все предметы</button>
                  <button className="collapse__link" type="button" onClick={() => handleFilterChange('topic', 'Математика')}>Математика</button>
                  <button className="collapse__link" type="button" onClick={() => handleFilterChange('topic', 'Русский язык')}>Русский язык</button>
                  <button className="collapse__link" type="button" onClick={() => handleFilterChange('topic', 'Информатика')}>Информатика</button>
                  <button className="collapse__link" type="button" onClick={() => handleFilterChange('topic', 'Биология')}>Биология</button>
                  <button className="collapse__link" type="button" onClick={() => handleFilterChange('topic', 'Химия')}>Химия</button>
                  <button className="collapse__link" type="button" onClick={() => handleFilterChange('topic', 'Обществознание')}>Обществознание</button>
                  <button className="collapse__link" type="button" onClick={() => handleFilterChange('topic', 'Литература')}>Литература</button>
                  <button className="collapse__link" type="button" onClick={() => handleFilterChange('topic', 'География')}>География</button>
                  <button className="collapse__link" type="button" onClick={() => handleFilterChange('topic', 'Английский')}>Английский</button>
                  <button className="collapse__link" type="button" onClick={() => handleFilterChange('topic', 'История')}>История</button>
                  <button className="collapse__link" type="button" onClick={() => handleFilterChange('topic', 'Физика')}>Физика</button>
                </div>
              </nav>
            </div>
            <div className="collapse">
              <button className="collapse__handler" type="button">
                Форматы занятий
              </button>
              <nav className="collapse__dropdown">
                <h2 className="collapse__heading">Форматы занятий</h2>
                <div className="collapse__list">
                  <a className="collapse__link collapse__link--current" href="#" onClick={() => handleFilterChange('format', 'Все')}>Все</a>
                  <a className="collapse__link" href="#" onClick={() => handleFilterChange('format', 'Очно')}>Очно</a>
                  <a className="collapse__link" href="#" onClick={() => handleFilterChange('format', 'Онлайн (в&nbsp;прямом эфире)')}>Онлайн (в&nbsp;прямом эфире)</a>
                  <a className="collapse__link" href="#" onClick={() => handleFilterChange('format', 'В&nbsp;записи')}>В&nbsp;записи</a>
                </div>
              </nav>
            </div>
            <div className="collapse">
              <button className="collapse__handler" type="button">
                Преподаватели
              </button>
              <nav className="collapse__dropdown">
                <h2 className="collapse__heading">Преподаватели</h2>
                <div className="collapse__list">
                  <a className="collapse__link collapse__link--current" href="#" onClick={() => handleFilterChange('author', 'Все')}>Все</a>
                  <a className="collapse__link" href="#" onClick={() => handleFilterChange('author', 'Гущина О.В.')}>Гущина О.В.</a>
                  <a className="collapse__link" href="#" onClick={() => handleFilterChange('author', 'Малкова А.Н.')}>Малкова А.Н.</a>
                  <a className="collapse__link" href="#" onClick={() => handleFilterChange('author', 'Кривенкова И.А.')}>Кривенкова И.А.</a>
                  <a className="collapse__link" href="#" onClick={() => handleFilterChange('author', 'Храпова&nbsp;И.&nbsp;М.')}>Храпова&nbsp;И.&nbsp;М.</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="feed__content">
          <div className="feed__bar">
            <Panel />
          </div>
          <div className="feed__list listing">
            <div className="listing__filter hide-scrollbar">
              <div className="listing__ribbon">
                <button className="listing__tag listing__tag--current" type="button" onClick={() => handleVideoToggle(null)}>Все</button>
                <button className="listing__tag" type="button" onClick={() => handleVideoToggle(true)}>Только видео</button>
                <button className="listing__tag" type="button" onClick={() => handleVideoToggle(false)}>Только статьи</button>
              </div>
            </div>
            <div className="listing__body">
              {currentEntries.map((entry) => (
                <div className="listing__item" key={entry.id}>
                  <Entry data={entry} />
                </div>
              ))}
            </div>
            <div className="listing__pages">
              <Pagination
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={filteredData.length}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
