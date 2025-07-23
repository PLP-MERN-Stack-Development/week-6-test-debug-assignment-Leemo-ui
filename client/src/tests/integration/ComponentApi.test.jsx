import { render, screen, waitFor } from '@testing-library/react';
import ItemList from '../../components/ItemList';
import axios from 'axios';

jest.mock('axios');

test('ItemList fetches and displays items', async () => {
  axios.get.mockResolvedValue({ data: [{ name: 'Test Item' }] });
  render(<ItemList />);
  await waitFor(() => expect(screen.getByText('Test Item')).toBeInTheDocument());
});
