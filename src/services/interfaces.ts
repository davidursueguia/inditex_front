import {PodcastDetails} from "../interfaces/PodcastDetails.ts";
import {Podcast} from "../interfaces/Podcast.ts";

export interface GetTopPodcastsResponse {
    result: Podcast[]
}

export interface GetPodcastDetailResponse {
    resultCount: number;
    results: PodcastDetails[];
}
