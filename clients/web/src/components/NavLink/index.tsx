import { NavLinkContainer } from "./NavLink";

export interface NavLinkProps {
  selected: boolean;
  icon: any;
  text: string;
}

export function NavLink({
  text,
  icon: Icon,
  selected,
}: NavLinkProps): JSX.Element {
  return (
    <NavLinkContainer selected={selected}>
      <Icon />

      <span>{text}</span>
    </NavLinkContainer>
  );
}
