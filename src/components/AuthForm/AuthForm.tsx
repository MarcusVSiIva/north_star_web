import React, { ReactNode } from 'react';
import LogoIcon from '../../assets/images/north_star_icon.png';

interface AuthFormProps {
  title: string;
  form: ReactNode;
}

export const AuthForm: React.FC<AuthFormProps> = ({ title, form}) => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
            className="mx-auto h-10 w-auto"
            src={LogoIcon}
            alt="North Star"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {title}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {form}
      </div>
    </div>
  );
};
