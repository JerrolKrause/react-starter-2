import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import 'primereact/resources/primereact.min.css';
import React, { useState } from 'react';

export const HeaderComponent: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home', url: '/' },
    { label: 'Users', icon: 'pi pi-fw pi-list', url: '/users' },
  ];

  const start = 'Logo Here';
  const end = (
    <Button
      label={isLoggedIn ? 'Log Out' : 'Log In'}
      icon={isLoggedIn ? 'pi pi-sign-out' : 'pi pi-sign-in'}
      onClick={() => setIsLoggedIn(!isLoggedIn)}
      className="p-button-text"
    />
  );

  return <Menubar model={items} start={start} end={end} />;
};
