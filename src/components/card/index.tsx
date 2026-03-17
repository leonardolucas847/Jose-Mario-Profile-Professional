import SetaParaCima from '../seta';

import * as S from './styles';
import { motion } from 'framer-motion';

// Seus dados aqui
const meusCards = [
  {
    id: 1,
    texto: 'Acompanhamento de treino e dieta diretamente comigo.',
    link: 'https://google.com',
    img: '../../../Art-consult-compri.webp',
  },
  {
    id: 2,
    texto:
      'aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa',
    link: 'https://github.com',
    img: '../../../Art-consult-compri.webp',
  },
  {
    id: 3,
    texto:
      'aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa',
    link: 'https://whatsapp.com',
    img: '../../../Art-consult-compri.webp',
  },
];

const MotionsCards = motion(S.CardLayout);

export const ListaCards = () => {
  return (
    <S.BodyLayout>
      {meusCards.map((card) => (
        <MotionsCards
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} // Anima apenas a primeira vez que o usuário vê
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }} // Efeito de clique (afunda o botão)
          key={card.id}
          id={`card-${card.id}`}
          href={card.link}
          target="_blank"
        >
          <S.ImagemCard $url={card.img} />
          <S.TextoLayout>
            <SetaParaCima />
            <S.TextoExplicacao>{card.texto}</S.TextoExplicacao>
            <S.Span>Clique aqui para saber mais</S.Span>
          </S.TextoLayout>
        </MotionsCards>
      ))}
    </S.BodyLayout>
  );
};
