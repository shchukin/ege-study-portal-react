import React from "react";
import {Feedback} from "../../../../api/swagger/data-contracts.ts";

type FeedbackItemProps = {
    feedback: Feedback;
};

const FeedbackItem: React.FC<FeedbackItemProps> = (
    {
        feedback
    }
) => {
    // @todo: сейчас отображается без стилей, т.к. ранее они были в Entry компоненте
    return (
        <article className="listing__item" key={feedback.id}>
            <div className="listing__inner">
                <a className="listing__summary" href={feedback.url}>
                    <h2 className="listing__heading">{feedback.author}</h2>
                    <div className="listing__note">{feedback.content}</div>
                    <div className="listing__tags">
                        {
                            feedback.tags.map(
                                (tag) => (<div className="badge badge--yellow">{tag.name}</div>)
                            )
                        }
                    </div>
                    <div className="listing__foot-date">{feedback.date_published}</div>
                </a>
            </div>
        </article>
    )
}

export default FeedbackItem;
