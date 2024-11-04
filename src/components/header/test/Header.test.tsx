import { render, screen } from "@testing-library/react";
import Header from "../Header.tsx";

describe('Header', () => {
    it('should render correctly', () => {
        render(<Header />);

        screen.debug(undefined, Infinity);
        expect(screen.getByText('Podcaster')).toBeInTheDocument();
    });
});
