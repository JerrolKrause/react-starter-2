import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useCallback, useEffect, useState } from 'react';
import { ApiState } from '../../components';
import MasterPage from '../../components/masterpage/Masterpage.component';
import { Models } from '../../shared';

interface State<t = any> {
  data: t | null;
  loading: boolean;
  error: unknown | null;
}

const initialState: State<Models.User[]> = {
  data: null,
  loading: false,
  error: null,
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

  // UseCallback memorizes the function to prevent new binding issues
  const getUsers = useCallback(() => {
    setState(state => ({ ...state, loading: true }));
    axios.get<Models.User[]>('https://jsonplaceholder.typicode.com/users').then(
      response => {
        setTimeout(() => setState(state => ({ ...state, loading: false, data: response.data })), 1000);
      },
      error => setState(state => ({ ...state, loading: false, error })),
    );
  }, []);

  return (
    <MasterPage>
      <div style={{ float: 'right' }}>
        <a onClick={getUsers}>Refresh Users</a>
      </div>
      <h1>Users</h1>

      <div className="grid">
        <div className="col  col-12 lg:col-8 xl:col-8 mb-3">
          <ApiState state={state}>
            <DataTable value={state.data ?? []} tableStyle={{ minWidth: '50rem' }}>
              <Column field="id" header="Code" />
              <Column field="name" header="Name" />
              <Column field="email" header="Email" />
              <Column field="phone" header="Phone" />
              <Column field="" header="Actions" />
            </DataTable>
          </ApiState>
        </div>
        <div className="col  col-12 lg:col-4 xl:col-4 mb-3">Temp</div>
      </div>
    </MasterPage>
  );
};
