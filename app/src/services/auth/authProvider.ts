export const authProvider = {
  async login(email: string, password: string) {
    // simula delay
    await new Promise((r) => setTimeout(r, 500));

    return {
      authId: `dev|${email}`,
      email,
    };
  },
};
