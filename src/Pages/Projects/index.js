import React, { useState } from 'react';
import {dataProjects} from '../../data'
import Pagination from '../../components/Pagination'
import ShowProjects from './ShowProjects'

const Projects = () => {
  const [selectedProjects, setSelectedProjects] = useState([])
  const [style, setStyle] = useState([ 'page-item active', 'page-item', 'page-item', 'page-item', 'page-item', 'page-item', 'page-item' ]);
  const [initialShow, setInitialShow] = useState([true, false, false, false, false, false, false]);
  const tabs = [ 'All', 'MERN Stack', 'NodeJS', 'ReactJS', 'AngularJS', 'Desktop', 'Different Projects']

  const selectTypeOfProjects = (ID) => {
    setSelectedProjects(!ID ? dataProjects : dataProjects.filter(item => item.type === tabs[ID]))

    const styleVar = ['page-item', 'page-item', 'page-item', 'page-item', 'page-item', 'page-item', 'page-item' ];
    const initialShowVar = [false, false, false, false, false, false, false];

    styleVar[ID] = 'page-item active'
    initialShowVar[ID] = true

    setInitialShow(initialShowVar)
    setStyle(styleVar)
  }

  return (
    <div className="container-fluid">
      <div
        className="jumbotron jumbotron-fluid"
        style={{ overflow: 'hidden', background: '#fff' }}
      >

        <div className="container">

          <h1 className="display-5 d-flex justify-content-center">
            My Projects
          </h1>

          <div className="lead d-flex justify-content-center">
              <ul className="pagination pagination-lg my-4 row">
              <Pagination tabs={tabs} selectTypeOfTabs={selectTypeOfProjects} style={style}/>
              </ul>
          </div>

        </div>

        <div>
            {
              initialShow[0] ? <ShowProjects projects={dataProjects} /> : <ShowProjects projects={selectedProjects} />
            }
        </div>

      </div>
    </div>
  );
}

export default Projects;