import { SubmitHandler, useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({

  });
  
  const onSubmit: SubmitHandler<SignInFormData> = (data) => console.log(data);

  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>
    </>
  );
};

export default SignUp;
