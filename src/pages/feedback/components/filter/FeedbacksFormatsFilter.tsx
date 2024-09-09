import React from "react";
import {FeedbacksFilterFormat} from "../../../../../api/swagger/data-contracts.ts";
import {FiltersState} from "../../types/FeedbacksInterfaces.ts";

type FeedbacksFormatsFilterProps = {
    onClickFilter: (filterState: FiltersState) => void;
    currentFormat: FeedbacksFilterFormat,
    formats: FeedbacksFilterFormat[] | undefined;
};

const FeedbacksFormatsFilter: React.FC<FeedbacksFormatsFilterProps> = (
    {
        onClickFilter,
        currentFormat,
        formats,
    }
) => {
    const onClickFormat = (format: FeedbacksFilterFormat) => {
        onClickFilter(
            {
                subject: {id: 0, name: ''},
                format: format
            }
        )
    };

    return (
        <div className="collapse">
            <button className="collapse__handler" type="button">
                Форматы занятий
            </button>
            <nav className="collapse__dropdown">
                <h2 className="collapse__heading">Форматы занятий</h2>
                <div className="collapse__list">
                    {
                        formats?.map(
                            (format) => (
                                <a
                                    key={`format-${format.id}`}
                                    className={`collapse__link  ${currentFormat.id === format.id ? 'collapse__link--current' : ''}`}
                                    onClick={() => onClickFormat(format)}
                                >
                                    {format.name}
                                </a>
                            )
                        )
                    }
                </div>
            </nav>
        </div>
    )
}

export default FeedbacksFormatsFilter;
