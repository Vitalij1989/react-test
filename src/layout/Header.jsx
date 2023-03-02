import { NavLink, Link } from 'react-router-dom';
import { routes } from '../rourtes/routes';
import { Div, HeaderStyled, Ul, Li, Spam } from './Header.styled';
const menu = [
  { id: 'home', name: 'Home', route: routes.HOME },
  { id: 'shop', name: 'Shop', route: routes.SHOP },
  { id: 'about', name: 'About', route: routes.ABOUT },
  { id: 'contact', name: 'Contact', route: routes.CONTACT },
];

export const Header = () => {
  return (
    <HeaderStyled>
      <Div>
        <Spam>
          <Link to={routes.HOME}>Emblema</Link>
        </Spam>
        <Ul>
          {menu &&
            menu.map(({ id, name, route }) => (
              <Li key={id}>
                <NavLink to={route}>{name}</NavLink>
              </Li>
            ))}
        </Ul>
      </Div>
    </HeaderStyled>
  );
};
