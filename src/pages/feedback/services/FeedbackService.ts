import {Feedbacks as FeedbacksApi} from "../../../../api/swagger/Feedbacks";
import {FeedbacksFilters, FeedbacksList, FeedbacksSearchParams} from "../../../../api/swagger/data-contracts.ts";

export default class FeedbackService {

    private api: FeedbacksApi = new FeedbacksApi();

    async getFeedbacksFilter(): Promise<FeedbacksFilters | undefined> {
        const {feedbacks_filters} = await this.api.getFeedbacksFilters();
        return feedbacks_filters;
    }

    async getFeedbacks(feedbacksSearchParams: FeedbacksSearchParams): Promise<FeedbacksList | undefined> {

        const {status, feedbacks_list} = await this.api.getFeedbacksList({
            feedbacks_search_params: feedbacksSearchParams
        });
        return (!!status.code && feedbacks_list) || undefined;
    }
}
