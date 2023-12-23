import { useTranslation } from 'react-i18next'
import { LoginForm } from './components/LoginForm';
import { login } from '../../services/auth/authService';
import { AuthForm } from '../../components/AuthForm/AuthForm';

export default function SignIn() {
    const { t } = useTranslation();

    const handleLogin = async (email: string, password: string) => {
      try {
        const response = await login(email, password);
        console.log('Login successful', response);
      } catch (error) {
        console.log('Login failed', error);
      }
    };
  return (
    <AuthForm title={t('signIn')} form={<LoginForm onLogin={handleLogin}/>}>
    </AuthForm>
  )
}