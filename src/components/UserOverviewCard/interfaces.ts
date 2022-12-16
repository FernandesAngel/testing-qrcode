interface SaleProps {
  id: string;
  title: string;
  banner?: string;
  description: string;
  // flag:
  //   | 'ativo'
  //   | 'admin'
  //   | 'gerente'
  //   | 'atendente'
  //   | 'bloqueado'
  //   | 'inativo'
  //   | 'cancelado'
  //   | 'expirado';
  flag: string;

  initialDate: string;
  finalDate: string;
  createdAt: string;
  updatedAt: string;
  prize: string;
  quantity: string;
  dailyLimit: string;
}

export interface SaleCardProps {
  data: SaleProps;
  blocked?: boolean;
}
