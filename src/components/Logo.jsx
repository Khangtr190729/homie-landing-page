import logoImg from '../assets/homie-logo.png';

export const Logo = ({ className = "h-12 w-auto" }) => {
  return (
    <img 
      src={logoImg} 
      alt="Homie" 
      className={`object-contain ${className}`}
    />
  );
};
