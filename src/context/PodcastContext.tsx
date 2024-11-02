import React, { createContext, useContext } from 'react';
import {useTopPodcasts} from "../hooks/useTopPodcasts.ts";

type PodcastContextType = {
    podcasts: any;
    isLoading: boolean;
    error: any;
};

const PodcastContext = createContext<PodcastContextType | undefined>(undefined);

// @ts-ignore
export const PodcastProvider: React.FC = ({ children }) => {
    const { data: podcasts, isLoading, error } = useTopPodcasts();

    return (
        <PodcastContext.Provider value={{ podcasts, isLoading, error }}>
            {children}
        </PodcastContext.Provider>
    );
};

export const usePodcastContext = () => {
    const context = useContext(PodcastContext);
    if (context === undefined) {
        throw new Error('usePodcastContext must be used within a PodcastProvider');
    }
    return context;
};
