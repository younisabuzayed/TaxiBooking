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
    console.log(`name ${name} and Email ${email} and phone ${phone} and Password ${password} `);

    return {
        type: 'signup-attempt',
    };
};
