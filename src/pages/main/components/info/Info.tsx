import React from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { infoStates } from '../../config/enums';
import UserTable from '../user/userTable/UserTable';
import './style.css'
import UserPieCharts from '../user/userCharts/UserPieCharts';
import UserLineCharts from '../user/userCharts/UserLineCharts';
import FilesTable from '../files/FilesTable';

function Info(): JSX.Element | null {
  const containerState = useAppSelector((state) => state.containerState.name);

  function getInfo(): JSX.Element | null {
    switch (containerState) {
      case infoStates.USERS: {
        return (
          <div className='users'>
            <p>USERS</p>
            <div className='charts_wrapper'>
              <UserPieCharts />
              <UserLineCharts />
            </div>

            <UserTable />
          </div>

        )
      }
      case infoStates.COMMENTS: {
        return <p>COMMENTS</p>
      }
      case infoStates.FILES: {
        return (
          <>
            <p>FILES</p>
            <FilesTable />
          </>
        )

      }
      case infoStates.STATISTICS: {
        return <p>STATISTICS</p>
      }
      case infoStates.PROJECT: {
        return <p>PROJECT</p>
      }
      default: {
        return null;
      }
    }
  }

  return getInfo();
}

export default Info;