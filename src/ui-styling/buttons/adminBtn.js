import React from "react";
import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from 'react-bootstrap';

// trash can with white border
function AdminBtn() {
    const customButtonStyle = {
        backgroundColor: '#825CA7',
        borderColor: '#825CA7',
      };
      return (
        < Button style={customButtonStyle} className="rounded-pill px-4" >
          Admin Tools
        </Button >
      );
}

export default AdminBtn;