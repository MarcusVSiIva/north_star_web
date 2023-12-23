import { useTranslation } from "react-i18next";
import { AuthForm } from "../../components/AuthForm/AuthForm";
import { SignUpForm } from "./components/SignUpForm";

export default function SignUp() {
    const { t } = useTranslation();

    return (
        <AuthForm title={t('signUp')} form={<SignUpForm />}>
        </AuthForm>
    );
}