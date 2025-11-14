'use client';

import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
    fullName: '',
    email: '',
    password: '',
    country: 'US',
    investmentGoals: 'Growth',
    riskTolerance: '',
    preferredIndustry: 'Technology'

    },
    mode: 'onBlur'
  }, );

  const onSubmit = async (data: SignUpFormData) => {
    try {
console.log(data)
    }catch(e) {
        console.error(e);
    }
  }
             
  

  return (
    <>
      <h1 className="form-title">Sign Up & Personalize</h1>

      <form  onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField 
        name="fullname"
        label="FULL NAME"
        placeholder="John Doe"
        register={register}
        error={errors.fullName}
        validation={{ required: 'Full name is required', minLength: 2 }}
        />
        
        <Button type="submit" disabled={isSubmitting} className="yellow-btw w-full mt-5">
          {isSubmitting ? 'Creating Account' : 'Start Your Investing Journey'}  
        </Button>
      </form>
    </>
  );
};

export default SignUp;
