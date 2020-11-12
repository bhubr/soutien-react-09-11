// Footer (avec liens vers réseaux sociaux)

import React from 'react';
import './Footer.css';

const liensReseaux =[
{
  link: 'Facebook.com',
  title: 'Facebook',
},
{
  link: 'Twitter.com',
  title: 'Twitter',
},
{
  link: 'Instagram.com',
  title: 'Instagram',
},
{
  link: 'LinkedIn.com',
  title: 'LinkedIn',
},
{
  link: 'GitHub.com',
  title: 'GitHub',
},
]

function Footer() {
  return (
    <div

    className="Footer">
      <nav className="Nav">
        <ul className="Menu">{liensReseaux.map(({link, title})=>(
          <li key={title}><a href={link}><span>&#127814; {title}</span></a></li>
        )

        )

        }
        </ul>
      </nav>
    </div>
  )
}



export default Footer;


