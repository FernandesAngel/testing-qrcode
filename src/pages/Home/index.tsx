import { useAuth } from "@/contexts/auth";
import * as S from "./styles";

export function Home() {
  const { signOut } = useAuth();
  return (
    <S.Container>
      <S.Txt>Home Dashboard</S.Txt>
      <button type="button" onClick={() => signOut()}>
        Sair
      </button>
    </S.Container>
  );
}
