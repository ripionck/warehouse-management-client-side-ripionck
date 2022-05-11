import React from 'react'
import { useMatch, useResolvedPath } from 'react-router';
import { Link } from 'react-router-dom';
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
             style={{ borderBottom: match ? "2px solid orange" : "none" }}
              to={to}
            {...props}
        >
            {children}
          </Link>
      </div>
    );
  }

export default CustomLink