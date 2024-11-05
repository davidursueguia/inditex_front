import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import App from "./App.tsx";
import PodcastService from "./services/PodcastService.ts";
import {podcastListFixture} from "./utils/fixtures.ts";

jest.mock('./services/PodcastService.ts');
const mockedGetTopPodcasts = PodcastService.getTopPodcasts as jest.Mock;

describe('App integration test', () => {

    it('should display the podcast list and filter results based on input', async () => {
        mockedGetTopPodcasts.mockResolvedValue(podcastListFixture);
        render(<App/>);
        const firstPodcastTitle = await screen.findByText('FRIDAY NIGHT KARAOKE');
        const secondPodcastTitle = await screen.findByText('A HISTORY OF ROCK MUSIC IN 500 SONGS');
        expect(firstPodcastTitle).toBeInTheDocument();
        expect(secondPodcastTitle).toBeInTheDocument();

        //apply filter
        const filterInput = await screen.findByLabelText('Filter podcasts...');
        expect(filterInput).toBeInTheDocument();
        fireEvent.change(filterInput, {target: {value: 'Friday'}});

        await waitFor(() => {
            expect(firstPodcastTitle).toBeInTheDocument();
            expect(secondPodcastTitle).not.toBeInTheDocument();
        })
    });
});
