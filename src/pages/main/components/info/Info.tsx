import React from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { infoStates } from '../../config/enums';

function Info(): JSX.Element | null {
  const containerState = useAppSelector((state) => state.containerState.name);

  function getInfo(): JSX.Element | null {
    switch (containerState) {
      case infoStates.USERS: {
        return <p>USERS</p>;
      }
      case infoStates.COMMENTS: {
        return <p>COMMENTS</p>;
      }
      case infoStates.FILES: {
        return <p>FILES</p>;
      }
      case infoStates.STATISTICS: {
        return <p>STATISTICS</p>;
      }
      case infoStates.PROJECT: {
        return <p>PROJECT</p>;
      }
      default: {
        return null; 
      }
    }
  }

  return getInfo();
}

export default Info;