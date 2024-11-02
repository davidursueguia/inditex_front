import axios from 'axios';

class PodcastService {
    static async getTopPodcasts(): Promise<any> {
        try {
            const url = `${
                'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
            }`;
            const response = await axios.get(url);

            if (response.data) {
                return response.data.feed.entry;
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
            const url = `${
                `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
            }`;
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
