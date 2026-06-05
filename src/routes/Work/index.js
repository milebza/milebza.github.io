import React from 'react';

import Menu from '../../components/Menu';
import WorkDesktopView from '../../components/WorkDesktopView';
import WorkMobileView from '../../components/WorkMobileView';

const Work = () => (
  <>
  <Menu />
    <div className="work">
      <div className="work__show-desktop"><WorkDesktopView /></div>
      <div className="work__show-mobile"><WorkMobileView /></div>
    </div>
  </>
);

export default Work;
