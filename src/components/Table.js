import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { removeTable } from '../actions';
import './Table.scss';

export class Table extends React.PureComponent {
  render() {
    const { id, name, participants, removeTable } = this.props;
    return (
      <div className="table-content">
        <h6>{name}</h6>
        <div className="content-footer">
          <p>Free places: {12 - participants}</p>
          <button onClick={() => removeTable(id)}>Delete</button>
        </div>
      </div>
    );
  }
}

Table.propTypes = {
  removeTable: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  participants: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => ({
  removeTable: id => {
    dispatch(removeTable(id));
  },
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(Table);
