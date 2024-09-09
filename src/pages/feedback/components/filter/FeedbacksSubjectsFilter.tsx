import React from "react";
import {FeedbacksFilterSubject} from "../../../../../api/swagger/data-contracts.ts";
import {FiltersState} from "../../types/FeedbacksInterfaces.ts";

type FeedbacksSubjectsFilterProps = {
    onClickFilter: (filterState: FiltersState) => void;
    currentSubject: FeedbacksFilterSubject;
    subjects: FeedbacksFilterSubject[] | undefined;
};

const FeedbacksSubjectsFilter: React.FC<FeedbacksSubjectsFilterProps> = (
    {
        onClickFilter,
        currentSubject,
        subjects
    }
) => {
    const onClickSubject = (subject: FeedbacksFilterSubject) => {
        onClickFilter(
            {
                subject: subject,
                format: {id: 0, name: ''}
            }
        )
    };

    return (
        <div className="collapse">
            <button className="collapse__handler" type="button">
                Все предметы
            </button>
            <nav className="collapse__dropdown">
                <h2 className="collapse__heading">Предметы</h2>
                <div className="collapse__list">
                    {
                        subjects?.map(
                            (subject) => (
                                <a
                                    key={`subject-${subject.id}`}
                                    className={`collapse__link  ${currentSubject.id === subject.id ? 'collapse__link--current' : ''}`}
                                    onClick={() => onClickSubject(subject)}
                                >
                                    {subject.name}
                                </a>
                            )
                        )
                    }
                </div>
            </nav>
        </div>
    )
}

export default FeedbacksSubjectsFilter;
