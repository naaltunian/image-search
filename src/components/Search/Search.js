import React from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

const Search = () => {
  return(
    <div>
      <form>
        <FormGroup
          controlId="formBasicText"

        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            
            placeholder="Enter text"

          />
          <FormControl.Feedback />

        </FormGroup>
      </form>
    </div>
  )
}

export default Search;
