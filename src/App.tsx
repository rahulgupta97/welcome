import React from 'react';
import AppStyles from './App.module.scss';
import * as Views from './views/index';

export default function App() {
  return (
    <div className={AppStyles.App}>
      <header className={AppStyles.AppFace}>
        <Views.Face />
      </header>
      <header className={AppStyles.AppAbout}>
        <Views.About />
      </header>
      <header className={AppStyles.AppWork}>
        <Views.Work />
      </header>
      <header className={AppStyles.AppConnect}>
        <Views.Connect />
      </header>
    </div>
  );
}
