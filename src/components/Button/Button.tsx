import "./Button.scss"


type ButtonProps = {
  label: string;
  variant: "primary" | "secondary";
};

const Button = ({ label, variant }: ButtonProps) => {
  // this 'variant' object allows us to modify the button ->  we can assign the variant of primary or secondary (which has properties of diff colors in scss) and put it in buttonStyles variable.
  const buttonStyles = `button button--${variant}`;
  return <button className={buttonStyles}>{label}</button>;
};

export default Button;