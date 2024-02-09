import { NavLink } from 'react-router-dom';
import MasterPage from '../../components/masterpage/Masterpage.component';

export function HomeRoute() {
  return (
    <MasterPage>
      <div>Hello World</div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
    </MasterPage>
  );
}
