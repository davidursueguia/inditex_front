import {screen} from "@testing-library/react";
import {renderWithProviders} from "../../../utils/testUtils.tsx";
import Filter from "../Filter.tsx";


describe('Filter', () => {
    it('should render correctly', () => {
        renderWithProviders(
            <Filter filteredCount={3} filterText={''} setFilterText={() => {}}/>);
        expect(screen.getByText('3')).toBeInTheDocument();
    });
});
