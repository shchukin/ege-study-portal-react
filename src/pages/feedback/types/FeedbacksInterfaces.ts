import {FeedbacksFilterFormat, FeedbacksFilterSubject} from "../../../../api/swagger/data-contracts.ts";

export interface FiltersState {
    subject: FeedbacksFilterSubject;
    format: FeedbacksFilterFormat;
}
