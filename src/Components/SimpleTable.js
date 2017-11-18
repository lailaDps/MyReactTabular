import * as Table from 'reactabular-table';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import   '../style/tableau.css';


class SimpleTable extends Component {
  constructor(props) {
    super(props);
    this.countries = {
      fi: 'Finland',
      dk: 'Denmark'
    };

    this.state = {
      rows: [
        {
          id: 100,
          name: 'John',
          tools: {
            hammer: true
          },
          country: 'fi'
        },
        {
          id: 101,
          name: 'Jack',
          tools: {
            hammer: false
          },
          country: 'dk'
        }
      ],

      columns: [
        {
          property: 'name',
          header: {
            label: 'Name',
            transforms: [
              label => ({
                onClick: () => alert(`clicked ${label}`)
              })
            ]
          }
        },
        {
          property: 'tools',
          header: {
            label: 'Active',
            transforms: [
              label => ({
                onClick: () => alert(`clicked ${label}`)
              })
            ]
          },
          cell: {
            formatters: [
              tools => tools.hammer ? 'Hammertime' : 'nope'
            ]
          }
        },
        {
          property: 'country',
          header: {
            label: 'Country',
            transforms: [
              label => ({
                onClick: () => alert(`clicked ${label}`)
              })
            ]
          },
          cell: {
            formatters: [
              country => this.countries[country]
            ]
          }
        },
      ]
    };
  }

  render() {

    return (
      <Table.Provider className="pure-table pure-table-striped"
        columns={this.state.columns} >
        <Table.Header
          className="header"
          onRow={(row, { rowIndex }) => {
            return {
              className: rowIndex % 2 ? 'odd-row' : 'even-row',
            }
          }}
        />
        <Table.Body rows={this.state.rows} rowKey="id" 
        onRow={(row, { rowIndex }) => {
          // Important! This gets called only when the row is updated. It is
          // preferable to handle even/odd styling through CSS unless you
          // override default shouldComponentUpdate behavior or use virtualization.
          return {
            className: rowIndex % 2 ? 'odd-row' : 'even-row',
          }
        }
      }
        
        /></Table.Provider>
    )
  }
}
export default SimpleTable;