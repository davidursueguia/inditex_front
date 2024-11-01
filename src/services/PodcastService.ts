import axios from 'axios';

const API_BASE = 'https://allorigins.win';

class PodcastService {
    static async getTopPodcasts(): Promise<any> {
        try {
            const url = `${API_BASE}${encodeURIComponent(
                'https://rss.applemarketingtools.com/api/v2/us/podcasts/top/100/podcasts.json'
            )}`;
            const response = await axios.get(url);

            if (response.data && response.data.contents) {
                return JSON.parse(response.data.contents);
            } else {
                throw new Error('No contents in response');
            }
        } catch (error) {
            console.error('Error fetching top podcasts:', error);
            throw error;
        }
    }

    static async getPodcastDetail(podcastId: string): Promise<any> {
        try {
            const url = `${API_BASE}${encodeURIComponent(
                `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
            )}`;
            const response = await axios.get(url);

            if (response.data && response.data.contents) {
                return JSON.parse(response.data.contents);
            } else {
                throw new Error('No contents in response');
            }
        } catch (error) {
            console.error(`Error fetching podcast details for id ${podcastId}:`, error);
            throw error;
        }
    }
}

export default PodcastService;
