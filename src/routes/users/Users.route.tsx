import { NavLink } from 'react-router-dom';
import MasterPage from '../../components/masterpage/Masterpage.component';

export const UsersRoute = () => {
  return (
    <MasterPage>
      <div>Users Route</div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
    </MasterPage>
  );
};
