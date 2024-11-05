import { screen } from "@testing-library/react";
import {renderWithProviders} from "../../../utils/testUtils.tsx";
import PodcastList from "../PodcastList.tsx";
import {podcastListFixture} from "../../../utils/fixtures.ts";


describe('PodcastList', () => {

    it('should render podcast list', () => {
        renderWithProviders(<PodcastList podcast={podcastListFixture}/>);
        expect(screen.getByText('FRIDAY NIGHT KARAOKE')).toBeInTheDocument();
        expect(screen.getByText('A HISTORY OF ROCK MUSIC IN 500 SONGS')).toBeInTheDocument();
        expect(screen.getByText('Author: Andrew Hickey')).toBeInTheDocument();
        expect(screen.getByText('Author: Friday Night Karaoke')).toBeInTheDocument();
        expect(screen.getAllByRole('img')).toHaveLength(2);
        const linkElements = screen.getAllByRole('link');
        expect(linkElements).toHaveLength(2);
    });
});
