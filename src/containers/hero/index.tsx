import HeroFoto from '../../components/heroFoto';
import Button from '../../components/button';
import { ButtonHero, HeroContainer, FraseHero } from './styles';
import { Frase } from '../../components/frase';
import { motion } from 'framer-motion';

const MotionButtonHero = motion(ButtonHero);
const MotionFraseHero = motion(FraseHero);
export const Hero = () => {
  return (
    <HeroContainer>
      <HeroFoto /> {/* <--- Ele precisa estar aqui! */}
      <MotionFraseHero
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Frase />
      </MotionFraseHero>
      <MotionButtonHero
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Button />
      </MotionButtonHero>
    </HeroContainer>
  );
};
