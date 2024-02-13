import { ProgressBar } from 'primereact/progressbar';
import { ReactNode } from 'react';
import { Models } from '../../shared';
/**
 * Progress bar loader
 * @returns
 */
export const ApiState: React.FC<{
  children: ReactNode;
  state?: Models.ApiState<unknown> | null;
}> = ({ children, state }) => {
  return (
    <div className="loader" style={{ position: 'relative' }}>
      {state?.loading && <ProgressBar mode="indeterminate" style={{ height: '6px', position: 'absolute', zIndex: '99', width: '100%' }} />}
      {children}
    </div>
  );
};
