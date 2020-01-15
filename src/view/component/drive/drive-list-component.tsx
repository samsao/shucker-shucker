import { MockDriveController } from 'controller/drive-controller';
import React, { useEffect, useState } from 'react';
import { Drive } from 'model/drive';
import { DriveSummaryComponent } from 'view/component/drive/drive-summary-component';
import styled from 'styled-components';

export const DriveListComponent: React.FunctionComponent = ({ props }) => {
  const [drivesFetched, setDrivesFetched] = useState<boolean>(false);
  return (
    <Container {...props}>
      {new MockDriveController()
        .fetchDrives()
        .subscribe((drives) =>
          drives.map((drive: Drive) => (
            <DriveSummaryComponent
              key={drive.id}
              imageUrl={drive.imageUrl}
              brand={drive.brand}
              model={drive.model}
              isShuckable={drive.isShuckable}
            />
          )),
        )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
