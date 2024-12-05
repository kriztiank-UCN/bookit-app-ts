/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

async function createSession(prevState: any, formData: FormData) {
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  if (!email || !password) {
    return {
      error: 'Please fill out all fields',
    };
  }

  console.log(email, password);
}

export default createSession;