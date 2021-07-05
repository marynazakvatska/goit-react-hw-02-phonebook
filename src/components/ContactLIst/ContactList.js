import React from 'react';
import './ContactList.module.css';
import PropTypes from "prop-types";


const ContactList = ({ id, name, number }) => (
    <ul>
        <li key={id}>
              {name}:{number}
    </li>
      
  </ul>
);



ContactList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactList;
