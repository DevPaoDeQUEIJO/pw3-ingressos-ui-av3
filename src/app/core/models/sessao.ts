import { Filme } from './filme';
import { Sala } from './sala';


export interface Sessao {
  id: number;
  data?: string;
  horario?: string;
  filme: Filme;
  sala?: Sala;
  preco?: number;  
}
