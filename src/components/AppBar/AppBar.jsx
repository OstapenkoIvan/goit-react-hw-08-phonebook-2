import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Container from 'components/ui/Container';
import Navigation from 'components/Navigation/Navigation';

import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export default function Layout() {
  const isFetching = useSelector(authSelectors.selectFetching);

  return (
    !isFetching && (
      <Container>
        <header>
          <Navigation />
        </header>
        <main>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    )
  );
}
