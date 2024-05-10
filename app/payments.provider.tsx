import { useRouter } from "expo-router";

const PaymentsProvider = () => {
  const router = useRouter();

  async function handlePayment(email: string) {
    try {
    } catch (error: any) {
      alert(error.message);
    }
    console.log("Payment successful");
  }

  return {
    handlePayment,
  };
};

export default PaymentsProvider;
