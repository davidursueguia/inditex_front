import axios from 'axios';
import {GetPodcastDetailResponse, GetTopPodcastsResponse} from "./interfaces.ts";

const baseUrl = 'https://cors-anywhere.herokuapp.com/';

class PodcastService {
    static async getTopPodcasts(): Promise<GetTopPodcastsResponse | undefined> {
        try {
            const url = `${baseUrl}https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`;
            const response = await axios.get(url, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                }
            });

            if (response.data) {
                return response.data.feed.entry;
            } else {
                console.error('No contents in response');
            }
        } catch (error) {
            console.error('Error fetching top podcasts:', error);
        }
    }

    static async getPodcastDetail(podcastId: string): Promise<GetPodcastDetailResponse | undefined> {
        try {
            const url = `${baseUrl}https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
            const response = await axios.get(url, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                }
            });

            if (response.data) {
                return response.data;
            } else {
                console.error('No contents in response');
            }
        } catch (error) {
            console.error(`Error fetching podcast details for id ${podcastId}:`, error);
            throw error;
        }
    }
}

export default PodcastService;
