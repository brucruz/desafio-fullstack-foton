import NextLink from 'next/link';
import { NavLinkContainer } from './NavLink';

export interface NavLinkProps {
  selected: boolean;
  icon: any;
  text: string;
  url?: string;
}

export function NavLink({
  text,
  icon: Icon,
  selected,
  url,
}: NavLinkProps): JSX.Element {
  return (
    <>
      {url ? (
        <NextLink href={url}>
          <NavLinkContainer selected={selected}>
            <Icon />

            <span>{text}</span>
          </NavLinkContainer>
        </NextLink>
      ) : (
        <NavLinkContainer selected={selected}>
          <Icon />

          <span>{text}</span>
        </NavLinkContainer>
      )}
    </>
  );
}
