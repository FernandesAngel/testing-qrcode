import { useAuth } from "@/contexts/auth";
import { useToast } from "@/contexts/toast";

import { Navigate } from "react-router-dom";

import * as S from "./styles";

export function SignIn() {
  const { addToast } = useToast();
  const { signIn } = useAuth();
  const isLogged = false;

  if (isLogged) {
    return <Navigate to="/dashboard" />;
  }

  const handleSignIn = () => {
    signIn({ email: "imbitubadigital33@gmail.com", password: "12345678" });
  };

  return (
    <S.Container>
      <S.Txt>SignInx</S.Txt>
      <button
        type="button"
        onClick={() =>
          addToast({ message: "Aqui a mensagem da hora", type: "success" })
        }
      >
        Toast
      </button>
      <button type="button" onClick={handleSignIn}>
        Signin
      </button>
    </S.Container>
  );
}
