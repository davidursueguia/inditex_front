import {render, screen} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import Header from "../Header.tsx";

const queryClient = new QueryClient();


describe('Header', () => {
    it('should render correctly', () => {
        render(<QueryClientProvider client={queryClient}><MemoryRouter>
            <Header/></MemoryRouter></QueryClientProvider>);
        expect(screen.getByText('Podcaster')).toBeInTheDocument();
    });
});
