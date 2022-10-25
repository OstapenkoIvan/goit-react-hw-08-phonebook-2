import { lazy } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';

import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import AppBar from 'components/AppBar';
import Home from 'pages/Home';

const Contacts = lazy(() => import('pages/Contacts'));
const UserMenu = lazy(() => import('pages/UserMenu'));
const SignUp = lazy(() => import('pages/SignUp'));
const Login = lazy(() => import('pages/Login'));
const ErrorPage = lazy(() => import('utils/ErrorPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppBar />} errorElement={<ErrorPage />}>
      <Route element={<PublicRoute />}>
        <Route index element={<Home />} errorElement={<ErrorPage />} />
      </Route>
      <Route element={<PrivateRoute redirectDest="register" />}>
        <Route
          path="contacts"
          element={<Contacts />}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route element={<PrivateRoute redirectDest="register" />}>
        <Route
          path="details"
          element={<UserMenu />}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route element={<PublicRoute redirectDest="/" restricted />}>
        <Route
          path="register"
          element={<SignUp />}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route element={<PublicRoute redirectDest="/" restricted />}>
        <Route path="login" element={<Login />} errorElement={<ErrorPage />} />
      </Route>
      <Route
        path="*"
        element={<Navigate to="/" replace />}
        errorElement={<ErrorPage />}
      />
    </Route>
  ),
  { basename: '/goit-react-hw-08-phonebook-2' }
);

export default router;
