import { fireEvent, render, screen, waitForElement } from '@testing-library/react';
import axios from 'axios';

import { Admin } from '../Admin';

describe('Admin component', () => {
  test('if component renders correctly', () => {
    render(<Admin />);
  
    expect(screen.getByText('Bokningar')).toBeInTheDocument();
  });

  // test('if function gets data asynchronously', async () => {
  //   const response = "Some data";
  //   const getResponse = jest.fn(() => Promise.resolve(response));

  //   const button = render(<button onClick={getResponse}></button>);
  //   fireEvent.click(button);

  //   const nameBeforeGet = screen.queryByTestId('name-test');
  //   expect(nameBeforeGet).toBeNull();

  //   //Alla exempel är att en knapp är kopplad till get... Har ingen knapp, bara useEffect
  //   // const button = render(<button onClick={getResponse}></button>);
  //   // fireEvent.click(button);

  //   const nameAfterGet = await waitForElement(() => screen.findByTestId('name-test'));
  //   expect(nameAfterGet.textContent).toEqual(response);






  //   // render(<Admin />);
  //   // const name = screen.findByTestId('name-test')
  //   // expect(name).toBeInTheDocument();
  // });
})