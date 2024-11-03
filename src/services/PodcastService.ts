import axios from 'axios';

const isProd = import.meta.env.MODE === 'production';
const origin = isProd ? import.meta.env.VITE_API_ORIGIN_PROD : import.meta.env.VITE_API_ORIGIN;

const baseUrl = 'https://cors-anywhere.herokuapp.com/'; //All origins no funciona en el momento de hacer la prueba. Paso a usar el servicio de cors-anywhere

class PodcastService {
    static async getTopPodcasts(): Promise<any> {
        try {
            const url = `${baseUrl}https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`;
            const response = await axios.get(url, {
                headers: {
                    'Origin': origin,
                    'X-Requested-With': 'XMLHttpRequest',
                }
            });

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
            const url = `${baseUrl}https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`;
            const response = await axios.get(url, {
                headers: {
                    'Origin': origin,
                    'X-Requested-With': 'XMLHttpRequest',
                }
            });

            if (response.data) {
                return response.data;
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
