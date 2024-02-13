import { BehaviorSubject } from 'rxjs';

interface State<t = any> {
  data: t | null;
  loading: boolean;
}

class UsersStore {
  public state$ = new BehaviorSubject<State>({
    data: null,
    loading: false,
  });

  public get() {}
}

export const usersStore = new UsersStore();

export const usersStore2 = () => {
  return {};
};
