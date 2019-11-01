import React, { Component } from 'react';
import { DropdownButton, ButtonToolbar, Dropdown } from 'react-bootstrap';
//import { WSA_E_NO_MORE } from 'constants';

export class TopMenuBar extends Component {
  render() {
    return (
      <div className="topMenuBarHeader">

        <ButtonToolbar>
          {['Electronics', 'TVs & Appliances', 'Men', 'Women', 'Baby & Kids', 'Home & Furniture', 'Sports,Books & More', 'Offer'].map(
            variant => (
              <DropdownButton
                title={variant}
                variant={variant.toLowerCase()}
                id={`dropdown-variants-${variant}`}
                key={variant}
                className="TopNavBar"
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton>
            ),
          )}
        </ButtonToolbar>
      </div>
    )
  }
}

export default TopMenuBar
