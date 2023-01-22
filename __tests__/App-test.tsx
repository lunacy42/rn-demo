/**
 * @format
 */

import React from 'react';

// Note: test renderer must be required after react-native.
import {render, waitFor} from '@testing-library/react-native';
import Navigation from '../src/Navigation';
import {NavigationContainer} from '@react-navigation/native';

it('renders correctly', async () => {
  const {getByText} = render(
    <NavigationContainer>
      <Navigation user={null} />
    </NavigationContainer>,
  );
  await waitFor(() => getByText('Login'));
});
