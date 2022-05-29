import React from "react";

const Denied = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <div>
        <h2 className="text-center">Access Denied</h2>
        <p className='text-center'>You don't have permission to view this page</p>
      </div>
    </div>
  );
};

export default Denied;
