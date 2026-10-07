import logoImg from '../assets/logo.jpg';

export const Logo = ({ className = "h-12 w-auto" }) => {
  return (
    <img 
      src={logoImg} 
      alt="Homie" 
      className={`object-contain ${className}`}
    />
  );
};
