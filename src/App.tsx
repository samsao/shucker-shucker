import React from 'react';
import { DriveListComponent } from 'view/component/drive/drive-list-component';
import 'style/Base.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <DriveListComponent />
    </div>
  );
};
