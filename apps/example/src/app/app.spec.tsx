import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil'

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(
      <RecoilRoot>
        <App />
      </RecoilRoot>
    );

    expect(getByText('Recoil connector to Redux DevTools')).toBeTruthy();
  });
});
