import {screen} from "@testing-library/react";
import Header from "../Header.tsx";
import {renderWithProviders} from "../../../utils/testUtils.tsx";


describe('Header', () => {
    it('should render correctly', () => {
        renderWithProviders(
            <Header/>);
        expect(screen.getByText('Podcaster')).toBeInTheDocument();
    });
});
