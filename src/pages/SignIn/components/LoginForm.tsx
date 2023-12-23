import { useState } from "react";
import { useTranslation } from "react-i18next";

interface LoginFormProps {
    onLogin: (email: string, password: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(email, password);
    };
    
    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {t('emailAddress')}
                </label>
                <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    {t('password')}
                </label>
                </div>
                <div className="mt-2">
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
                <div className="flex justify-between mt-4">
                    <div className="flex items-center">
                        <label htmlFor="remember_me" className="inline-flex items-center text-sm font-medium leading-5 text-gray-900">
                            <input
                                id="remember_me"
                                type="checkbox"slot=""
                                className="form-checkbox rounded-sm border-1 border-gray-300"
                                name="remember_me"
                            />
                            <span className="ml-2">{t('rememberMe')}</span>
                        </label>
                    </div>
                    <div className="text-sm">
                        <a href="/forgot_password" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                            {t('forgotPassword')}
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                {t('signInButton')}
                </button>
            </div>

            <p className="mt-10 text-center text-sm text-gray-500">
                {t('noAccount')}{' '}
                <a href="/sign_up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    {t('signUpNow')}
                </a>
            </p>
        </form>
    )
}