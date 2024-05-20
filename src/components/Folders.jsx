import React, { useState } from 'react';
import './folders.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFolder } from '@fortawesome/free-regular-svg-icons';

const Folders = ({explorer}) => {
  const [expand, setExpand] = useState(false);
  
  if (explorer.isFolder){

    return (
      <div className='folder'>
        <div onClick={()=> {setExpand(!expand)}}>
          <span>
            <FontAwesomeIcon className='folderIcon' icon={faFolder} />
            {explorer.name}
          </span>
        </div>
        <div className='childItems'>
          {expand ? explorer.items.map((exp) => {
            return (
              <Folders key={exp.id} explorer={exp} />
            )
          }) : ''}
        </div>
      </div>
    )
  } else{
    return (
      <span className='file'> 
        < FontAwesomeIcon className='fileIcon' icon={faFile} />
        {explorer.name}
      </span>
    )
  }
}

export default Folders