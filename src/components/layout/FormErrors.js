import React from 'react';

export const EmailErrors = ({ emailErrors }) => (
  <div className="formErrors">
    {Object.keys(emailErrors).map((fieldName, i) => {
      if (emailErrors[fieldName].length > 0) {
        return (
          <p
            style={{ color: 'red', fontWeight: 'bold' }}
            key={i}
            className="pl-3"
          >
            {fieldName} {emailErrors[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);

export const NameErrors = ({ nameErrors }) => (
  <React.Fragment className="formErrors">
    {Object.keys(nameErrors).map((fieldName, i) => {
      if (nameErrors[fieldName].length > 0) {
        return (
          <p
            key={i}
            className="pl-3"
            style={{ color: 'red', fontWeight: 'bold' }}
          >
            {fieldName} {nameErrors[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </React.Fragment>
);

export const NameErrorsIcon = ({ nameErrors }) => (
  <React.Fragment className="formErrors">
    {Object.keys(nameErrors).map((fieldName, i) => {
      if (nameErrors[fieldName].length > 0) {
        return (
          <React.Fragment key={i}>
            <i
              className="fas fa-exclamation-triangle"
              style={{ color: 'red', fontWeight: 'bold' }}
            ></i>
          </React.Fragment>
        );
      } else {
        return '';
      }
    })}
  </React.Fragment>
);

export const EmailErrorsIcon = ({ emailErrors }) => (
  <div className="formErrors">
    {Object.keys(emailErrors).map((fieldName, i) => {
      if (emailErrors[fieldName].length > 0) {
        return (
          <div key={i}>
            <i
              className="fas fa-exclamation-triangle"
              style={{ color: 'red', fontWeight: 'bold' }}
            ></i>
          </div>
        );
      } else {
        return '';
      }
    })}
  </div>
);

export const PhonenumberErrors = ({ phonenumberErrors }) => (
  <div className="formErrors">
    {Object.keys(phonenumberErrors).map((fieldName, i) => {
      if (phonenumberErrors[fieldName].length > 0) {
        return (
          <p
            key={i}
            className="pl-3"
            style={{ color: 'red', fontWeight: 'bold' }}
          >
            {fieldName} {phonenumberErrors[fieldName]}
          </p>
        );
      } else {
        return '';
      }
    })}
  </div>
);
export const PhoneErrorsIcon = ({ phonenumberErrors }) => (
  <div className="formErrors">
    {Object.keys(phonenumberErrors).map((fieldName, i) => {
      if (phonenumberErrors[fieldName].length > 0) {
        return (
          <div key={i}>
            <i
              className="fas fa-exclamation-triangle"
              style={{ color: '#FF0000', fontWeight: 'bold' }}
            ></i>
          </div>
        );
      } else {
        return '';
      }
    })}
  </div>
);
