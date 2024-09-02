// src/pages/feedback/feedback.tsx
import { useState } from 'react';
import Entry from "../../components/entry/entry.tsx";
import Intro from "../../components/intro/intro.tsx";
import './collapse.css';
import './listing.css';
import './feed.css';
import Panel from "../../components/panel/panel.tsx";
import Pagination from "../../components/pagination/pagination.tsx";
import { mockData, EntryData } from '../../mocks/';

const Feedback: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Adjust the number of items per page
  const [topicFilter, setTopicFilter] = useState<string | null>(null);
  const [formatFilter, setFormatFilter] = useState<string | null>(null);
  const [videoFilter, setVideoFilter] = useState<'all' | 'video' | 'article'>('all');

  // Filter entries based on selected filters
  const filteredData = mockData.filter((entry) => {
    const matchesTopic = !topicFilter || entry.tags.includes(topicFilter);
    const matchesFormat = !formatFilter || entry.tags.includes(formatFilter);
    const matchesVideo =
      videoFilter === 'all' ||
      (videoFilter === 'video' && entry.video) ||
      (videoFilter === 'article' && !entry.video);

    return matchesTopic && matchesFormat && matchesVideo;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEntries = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
                  <a className="collapse__link collapse__link--current" href="#" onClick={() => setTopicFilter(null)}>Все предметы</a>
                  <a className="collapse__link" href="#" onClick={() => setTopicFilter('Математика')}>Математика</a>
                  <a className="collapse__link" href="#" onClick={() => setTopicFilter('Русский язык')}>Русский язык</a>
                  {/* Add more topics as needed */}
                </div>
              </nav>
            </div>
            {/* Add more filters for formats, teachers, etc. */}
          </div>
        </div>

        <div className="feed__content">
          <div className="feed__bar">
            <Panel/>
          </div>

          <div className="feed__list listing">
            <div className="listing__filter hide-scrollbar">
              <div className="listing__ribbon">
                <button className={`listing__tag ${videoFilter === 'all' ? 'listing__tag--current' : ''}`} type="button" onClick={() => setVideoFilter('all')}>Все</button>
                <button className={`listing__tag ${videoFilter === 'video' ? 'listing__tag--current' : ''}`} type="button" onClick={() => setVideoFilter('video')}>Только видео</button>
                <button className={`listing__tag ${videoFilter === 'article' ? 'listing__tag--current' : ''}`} type="button" onClick={() => setVideoFilter('article')}>Только статьи</button>
              </div>
            </div>

            <div className="listing__body">
              {currentEntries.map((entry) => (
                <div className="listing__item" key={entry.id}>
                  <Entry data={entry}/>
                </div>
              ))}
            </div>

            <div className="listing__pages">
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={filteredData.length}
                paginate={paginate}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
