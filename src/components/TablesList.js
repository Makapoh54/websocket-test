import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';
import './Table.scss';

const TablesList = ({ tables }) => (
  <div>
    <section className="table">
      {tables.map(table => (
        <Table key={table.id} {...table} />
      ))}
    </section>
    <h6>Tables amount: {tables.length}</h6>
  </div>
);

TablesList.propTypes = {
  tables: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      participants: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default connect(
  state => ({
    tables: state.tables,
  }),
  {},
)(TablesList);
