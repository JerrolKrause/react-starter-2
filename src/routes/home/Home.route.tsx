import MasterPage from '../../components/masterpage/Masterpage.component';

export function HomeRoute() {
  return (
    <MasterPage>
      <div className="grid">
        <div className="col col-8">Content for column 1</div>
        <div className="col col-4">Content for column 2</div>
      </div>
    </MasterPage>
  );
}
