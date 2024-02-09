import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import 'primereact/resources/primereact.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const HeaderComponent: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Custom template for menu items
  const itemTemplate = (item: MenuItem, options: any) => {
    return (
      <Link to={item.url || '#'} className={options.className} style={options.style} role={options.role}>
        {item.icon && <span className={item.icon} />}
        <span>{item.label}</span>
      </Link>
    );
  };

  const items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home', url: '/', template: itemTemplate },
    { label: 'Users', icon: 'pi pi-fw pi-list', url: '/users', template: itemTemplate },
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
