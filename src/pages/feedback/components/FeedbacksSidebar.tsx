import React, {useEffect, useState} from "react";
import {FeedbacksFilters} from "../../../../api/swagger/data-contracts.ts";
import FeedbacksSubjectsFilter from "./filter/FeedbacksSubjectsFilter.tsx";
import FeedbacksFormatsFilter from "./filter/FeedbacksFormatsFilter.tsx";
import FeedbackService from "../services/FeedbackService.ts";
import {FiltersState} from '../types/FeedbacksInterfaces.ts';

type FeedbacksSidebarProps = {
    onFiltersChanged: (filterState: FiltersState) => void;
};

const FeedbacksSidebar: React.FC<FeedbacksSidebarProps> = (
    {
        onFiltersChanged
    }
) => {
    // @todo: названия для "всех" получать из API
    const [
        activeFilters,
        setActiveFilters
    ] = useState<FiltersState>({
        subject: {id: 0, name: 'Все предметы'},
        format: {id: 0, name: 'Все'},
    });

    const [
        feedbacksFilters,
        setFeedbacksFilters
    ] = useState<FeedbacksFilters | undefined>(undefined);

    /**
     * Состояние загрузки фильтров
     */
    const [
        isLoading,
        setIsLoading
    ] = useState(true);

    useEffect(() => {
        const loadFeedbacksFilter = async () => {
            try {
                const feedbacksFilter = await (new FeedbackService()).getFeedbacksFilter();
                setFeedbacksFilters(feedbacksFilter);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        loadFeedbacksFilter();
    }, []);

    const onClickFilter = (filterState: FiltersState) => {
        setActiveFilters(filterState);
        onFiltersChanged(filterState);
    };

    if (isLoading) {
        return (
            <div className="feed__sidebar">
                <div className="feed__detachable-area">
                    <p>Загружаю фильтры...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="feed__sidebar">
            <div className="feed__detachable-area">
                <FeedbacksSubjectsFilter
                    onClickFilter={onClickFilter}
                    currentSubject={activeFilters.subject}
                    subjects={feedbacksFilters?.subjects}
                />
                <FeedbacksFormatsFilter
                    onClickFilter={onClickFilter}
                    currentFormat={activeFilters.format}
                    formats={feedbacksFilters?.formats}
                />
            </div>
        </div>
    )
}

export default FeedbacksSidebar;
