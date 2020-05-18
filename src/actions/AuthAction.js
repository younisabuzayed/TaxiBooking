/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
export const LoginUser = ({ email, password }) => {
    console.log(`Email ${email} and Password ${password}`);
  return {
    type: 'login-attempt',
  };
};
export const SignUpUser = ({email, password, phone, name}) =>
{
    console.log(`Email ${email} and Password ${password}`);

    return {
        type: 'lignup-attempt',
    };
};
