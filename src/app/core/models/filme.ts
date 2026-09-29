import { Sessao } from "./sessao";

export interface Filme {
  id: number;
  nome?: string;
  duracao?: number;
  categoria?: string;
  preco?: number;
  classificacao?: string;
  ano?: number;
  capa?: string;
  diretor?: string;
  elenco?: string;
  descricao?: string;
  avaliacao?: number;
  emCartaz?: string;
  sessoes?: Sessao[];
}
