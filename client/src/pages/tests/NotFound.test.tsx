import { fireEvent, render, screen } from '@testing-library/react';

import { NotFound } from '../NotFound';

describe('notFound component', () => {
    test('if component renders correctly', () => {
        render(<NotFound />);
      
        expect(screen.getByText(/Hoppsan!/i)).toBeInTheDocument();
    });

    test('if element with matching text content doesn´t exist', () => {//! ta bort?
        render(<NotFound />);
      
        expect(screen.queryByText('Ojojoj!')).toBeNull();
    });

    test('if button onClick calls function', () => {
        const handleClick = jest.fn();

        render(<button onClick={() => handleClick()}>❮ Tillbaka till start</button>);

        fireEvent.click(screen.getByRole('button'));

        expect(handleClick).toHaveBeenCalled();
    });

    // test('if button onClick calls function', (done) => { //! fråga sebastian?
    //     function redirect() {
    //         done();
    //     }

    //     const { getByText } = render(<button onClick={() => redirect()}>❮ Tillbaka till start</button>);

    //     const node = getByText(/Tillbaka till start/);
        
    //     fireEvent.click(node);
    // });
})