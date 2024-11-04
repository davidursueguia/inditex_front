import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const renderWithProviders = (
    ui: React.ReactElement,
    {
        route = '/',
        ...renderOptions
    }: { route?: string } & RenderOptions = {}
) => {
    return render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter initialEntries={[route]}>
                {ui}
            </MemoryRouter>
        </QueryClientProvider>,
        renderOptions
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { renderWithProviders };
