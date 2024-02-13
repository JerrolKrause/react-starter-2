import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MasterPage from '../../components/masterpage/Masterpage.component';
import { Models } from '../../shared';

interface State<t = any> {
  data: t | null;
  loading: boolean;
}

const initialState: State<Models.User[]> = {
  data: null,
  loading: false,
};

export const UsersRoute = () => {
  useEffect(() => {
    // Load users on route load
    getUsers();
    // Cleanup function
    return () => {
      setState(initialState); // Free up memory
    };
  }, []);

  const [state, setState] = useState(initialState);

  function getUsers() {
    setState(state => ({ ...state, loading: true }));
    axios.get<Models.User[]>('https://jsonplaceholder.typicode.com/users').then(
      response => setState(state => ({ ...state, loading: false, data: response.data })),
      error => setState(state => ({ ...state, loading: false, error })),
    );
  }

  return (
    <MasterPage>
      <div className="grid">
        <div className="col  col-12 lg:col-8 xl:col-8 mb-3">
          <DataTable value={state.data ?? []} tableStyle={{ minWidth: '50rem' }}>
            <Column field="id" header="Code" />
            <Column field="name" header="Name" />
            <Column field="email" header="Email" />
            <Column field="phone" header="Phone" />
            <Column field="" header="Actions" />
          </DataTable>
        </div>
        <div className="col  col-12 lg:col-4 xl:col-4 mb-3">Temp</div>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
    </MasterPage>
  );
};
