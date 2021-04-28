import { NavLink, NavLinkProps } from "../NavLink";
import { NavBarContainer } from "./NavBar";

export interface NavBarProps {
  links: NavLinkProps[];
}

export function NavBar({ links }: NavBarProps): JSX.Element {
  return (
    <NavBarContainer>
      {links.map((link) => (
        <NavLink {...link} />
      ))}
    </NavBarContainer>
  );
}
