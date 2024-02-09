import { Panel } from 'primereact/panel';
import MasterPage from '../../components/masterpage/Masterpage.component';

export function HomeRoute() {
  return (
    <MasterPage>
      <div className="grid">
        <div className="col-8">
          <Panel header="Column 1">Content for column 1</Panel>
        </div>
        <div className="col-4">
          <Panel header="Column 2">Content for column 2</Panel>
        </div>
      </div>
    </MasterPage>
  );
}
