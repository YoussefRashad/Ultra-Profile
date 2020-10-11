import React from 'react';

const Pagination = ({ tabs, style, selectTypeOfTabs }) => {
  return (
    <>
        {
          tabs.map ((item, index) => {
            return (
              <li 
                className={style[index]}
                key={index} 
                onClick={() => selectTypeOfTabs(index)}
              >
                <button className="pagination page-link" value={item} >
                  {item}
                </button>
              </li>
            );
          })
        }
    </>
  );
};

export default Pagination;





