import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//import Othres from './Experience';

function Header() {
    const urlName = useLocation();
    const pageDetails = [
        {
            pageIndex: '1',
            pageUrl: '/',
            pageName: 'Home'
        },
        {
            pageIndex: '2',
            pageUrl: '/Experience',
            pageName: 'Experience'
        },
        {
            pageIndex: '3',
            pageUrl: '/Othres',
            pageName: 'Othres'
        }
    ]
    console.log(urlName);
    return (
       
            <div className="Header">
                <nav>
                    <ul>
                        {
                            pageDetails.map( (pageValue, pgId) =>{
                                return(
                                    <li className={urlName.pathname === pageValue.pageUrl ? 'activeM' : ''}><Link to={pageValue.pageUrl}>{pageValue.pageName}</Link></li>
                                )
                            })
                        }
                        {/* <li className={urlName.pathname === '/' ? 'activeM' : ''}> <Link to="/">Home</Link></li>
                        <li className={urlName.pathname === '/Othres' ? 'activeM' : ''}><Link to="/Othres">Othres</Link></li>
                        <li className={urlName.pathname === '/Experience' ? 'activeM' : ''}><Link to="/Experience">Experience</Link></li> */}
                    </ul>


                </nav>

            </div>
           
    )
}

export default Header;