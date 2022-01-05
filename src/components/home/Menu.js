import React, { useState } from 'react';

import '../../common/home/menu.scss';

const Menu = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <div className="demo">
      <div className="menu-icon">
        <input
          onChange={(event) => {
            setChecked(event.currentTarget.checked);
          }}
          checked={isChecked}
          className="menu-icon__checkbox"
          type="checkbox"
        />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
