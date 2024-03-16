export default function AuthProvider() {
  async function handleSignIn(email: string, password: string) {
    setLoading(true);
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(email, password);
      router.navigate("/pages/home");
      return authData;
    } catch (error: any) {
      alert(error.message);
    }
    setLoading(false);
  }
}
