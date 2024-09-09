import React, {useEffect, useState} from 'react';
import Intro from "../../components/intro/intro.tsx";
import './collapse.css';
import './listing.css';
import './feed.css';
import Panel from "../../components/panel/panel.tsx";
import Pagination from "../../components/pagination/pagination.tsx";
import {mockData} from '../../mocks/mockData.ts';
import FeedbacksSidebar from "./components/FeedbacksSidebar.tsx";
import FeedbackService from "./services/FeedbackService.ts";
import {FeedbacksList, FeedbacksSearchParams} from "../../../api/swagger/data-contracts.ts";
import {FiltersState} from "./types/FeedbacksInterfaces.ts";
import FeedbackItem from "./components/FeedbackItem.tsx";

const Feedback: React.FC = () => {
    const [feedbacksList, setFeedbacksList] = useState<FeedbacksList | undefined>(undefined);
    const [filteredData, setFilteredData] = useState(mockData);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const [
        feedbacksSearchParams,
        setFeedbacksSearchParams
    ] = useState<FeedbacksSearchParams>({
        is_published: true,
        limit: itemsPerPage,
    });

    const [selectedFilters, setSelectedFilters] = useState({
        topic: 'Все предметы',
        format: 'Все',
        author: 'Все',
        hasVideo: null as boolean | null,
    });

    const handleFilterChange = (type: string, value: string) => {
        setSelectedFilters((prevFilters) => {
            const newFilters = {...prevFilters, [type]: value};
            applyFilters(newFilters);
            return newFilters;
        });
    };

    const handleVideoToggle = (hasVideo: boolean | null) => {
        setSelectedFilters((prevFilters) => {
            const newFilters = {...prevFilters, hasVideo};
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

    const onFiltersChanged = (filterState: FiltersState) => {
        setFeedbacksSearchParams((prevFilters) => {
            return {
                ...prevFilters,
                subject: filterState.subject.id,
                // @todo: не нравится что нужно явно перечисления указывать,
                //          возможно лучше структуру API пересмотреть
                format: filterState.format.id as 0 | 1 | 2 | 3
            };
        });
        setCurrentPage(1);
    };

    const onPageChanged = (page: number) => {
        feedbacksSearchParams.offset = page * itemsPerPage - itemsPerPage;
        setFeedbacksSearchParams((prevFilters) => {
            return {
                ...prevFilters,
                offset: page * itemsPerPage - itemsPerPage
            };
        });
    };

    useEffect(() => {
        const loadFeedbacksList = async () => {
            try {
                const feedbacksList = await (new FeedbackService())
                    .getFeedbacks(feedbacksSearchParams);
                setFeedbacksList(feedbacksList);
            } catch (err) {
                console.log(err);
            } finally {
                console.log('Список отзывов загрузился');
            }
        };

        loadFeedbacksList();
    }, [feedbacksSearchParams]);

    return (
        <>
            <Intro>Отзывы</Intro>
            <div className="feed container">
                <FeedbacksSidebar
                    onFiltersChanged={onFiltersChanged}
                />
                <div className="feed__content">
                    <div className="feed__bar">
                        <Panel/>
                    </div>
                    <div className="feed__list listing">
                        <div className="listing__filter hide-scrollbar">
                            <div className="listing__ribbon">
                                <button
                                    className={`listing__tag ${selectedFilters.hasVideo === null ? 'listing__tag--current' : ''}`}
                                    type="button"
                                    onClick={() => handleVideoToggle(null)}
                                >
                                    Все отзывы
                                </button>
                                <button
                                    className={`listing__tag ${selectedFilters.hasVideo === false ? 'listing__tag--current' : ''}`}
                                    type="button"
                                    onClick={() => handleVideoToggle(false)}
                                >
                                    Без видео
                                </button>
                                <button
                                    className={`listing__tag ${selectedFilters.hasVideo === true ? 'listing__tag--current' : ''}`}
                                    type="button"
                                    onClick={() => handleVideoToggle(true)}
                                >
                                    С&nbsp;видео
                                </button>
                            </div>
                        </div>
                        <div className="listing__body">
                            {feedbacksList?.feedbacks?.map((feedback) => (
                                <FeedbackItem
                                    feedback={feedback}
                                />
                            ))}
                        </div>
                        <div className="listing__pages">
                            <Pagination
                                currentPage={currentPage}
                                itemsPerPage={itemsPerPage}
                                totalItems={feedbacksList?.count ?? 0}
                                onPageChange={onPageChanged}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feedback;
