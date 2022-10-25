import { authThunks } from 'redux/auth';
import { useDispatch } from 'react-redux';

import ErrorBoundaries from 'utils/ErrorBoundaries';
import Form from 'components/Form';
import logo from 'images/phonebook.png';

export default function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = ({ evt, setEmail, setName, setPassword }) => {
    evt.preventDefault();
    const email = evt.target.elements.email.value;
    const password = evt.target.elements.password.value;
    const name = evt.target.elements.name.value;

    dispatch(authThunks.authSignup({ name, email, password }));
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <ErrorBoundaries>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src={logo} alt="Logo" />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign up new account
            </h2>
          </div>
          <Form register submitName="Sign up" handleSubmit={handleSubmit} />
        </div>
      </div>
    </ErrorBoundaries>
  );
}
