interface Genre {
    name: string;
    id: string;
}

export interface PodcastEpisode {
    trackTimeMillis: number;
    artworkUrl60: string;
    feedUrl: string;
    shortDescription: string;
    releaseDate: string;
    closedCaptioning: string;
    collectionId: number;
    collectionName: string;
    artistIds: number[];
    contentAdvisoryRating: string;
    trackViewUrl: string;
    kind: string;
    wrapperType: string;
    description: string;
    country: string;
    episodeContentType: string;
    episodeUrl: string;
    artworkUrl160: string;
    episodeFileExtension: string;
    artworkUrl600: string;
    previewUrl: string;
    collectionViewUrl: string;
    trackName: string;
    trackId: number;
    genres: Genre[];
    episodeGuid: string;
}
