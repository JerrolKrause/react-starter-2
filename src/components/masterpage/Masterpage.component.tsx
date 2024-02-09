import React, { ReactNode } from 'react';
import styles from './Masterpage.component.module.scss';
import { HeaderComponent } from './header/Header.component';

interface MasterPageProps {
  children: ReactNode;
}

/**
 * MasterPage component that wraps other page components.
 *
 * Usage example:
 * ```
 * <MasterPage>
 *   <ChildComponent />
 * </MasterPage>
 * ```
 */
const MasterPage: React.FC<MasterPageProps> = ({ children }) => {
  return (
    <div className={styles.masterpage}>
      <HeaderComponent />
      <main>{children}</main>
      <footer>{/* Footer content goes here */}</footer>
    </div>
  );
};

export default MasterPage;
