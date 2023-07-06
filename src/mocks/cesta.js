import logo from '../../assets/logo.png';

import nanica from '../../assets/frutas/banana_nanica.png';
import prata from '../../assets/frutas/banana_prata.png';
import maca from '../../assets/frutas/Banana_Maca.png';
import terra from '../../assets/frutas/banana_terra.png';
import ouro from '../../assets/frutas/banana_ouro.png';

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  descricao: {
    nome: "Cesta de Bananas",
    logoFazenda: logo,
    nomeFazenda: "Bananinha Enterprise",
    descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 40,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Banana Nanica",
        imagem: nanica,
      },
      {
        nome: "Banana Prata",
        imagem: prata,
      },
      {
        nome: "Banana Maçã",
        imagem: maca,
      },
      {
        nome: "Banana da Terra",
        imagem: terra,
      },
      {
        nome: "Banana Ouro",
        imagem: ouro,
      }
    ]
  }
}

export default cesta;