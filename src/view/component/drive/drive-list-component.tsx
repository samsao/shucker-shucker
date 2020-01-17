import { MockDriveController } from 'controller/drive-controller';
import React, { useEffect, useRef, useState } from 'react';
import { Drive } from 'model/drive';
import styled from 'styled-components';
import { DriveSummaryComponent } from 'view/component/drive/drive-summary-component';
import { Column } from 'view/component/generic/column-component';

export const DriveListComponent: React.FunctionComponent = (props) => {
  const drives = useRef<Drive[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    drives.current = MockDriveController.fetchDrives();
    setLoaded(true);
  }, []);

  return (
    <Container {...props}>
      {drives.current.map((drive: Drive) => (
        <DriveSummaryComponent
          key={drive.id}
          imageUrl={drive.imageUrl}
          brand={drive.brand}
          model={drive.model}
          isShuckable={drive.isShuckable}
        />
      ))}
    </Container>
  );
};

const Container = styled(Column)`
  width: 100%;
`;
