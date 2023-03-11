const Title = ({ children }: ITitleProps) => {
  return <h1 className="font-bold text-4xl md:text-6xl">{children}</h1>;
};

interface ITitleProps {
  children: string;
}

export default Title;
