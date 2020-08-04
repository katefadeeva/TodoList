import React, {Component} from "react";

import './item-add-form.css';

export default class ItemAddForm extends Component {
  render() {
    const { onItemAdded } = this.props;

    return (
        <div className="item-add-form">
          <button type="button"
                  className="btn btn-info"
                  onClick={ () => onItemAdded('Hello world') }> Add Item
          </button>
        </div>
    );
  }
}
