import * as Table from 'reactabular-table';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class MyListMesure extends Component {

        constructor() {
            super();
            this.state = {
                mesures: [],
                hasErrored: false,
                isLoading: false
            }
    }
    fetchData(url) {
        this.setState({ isLoading: true });
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                this.setState({ isLoading: false });
                return response;
            })
            .then((response) => response.json())
            .then((mesures) => this.setState({ Mesures })) // ES6 property value shorthand for { mesure: mesures }
            .catch(() => this.setState({ hasErrored: true }));
    }
    componentDidMount() {
        this.fetchData('http://5a16ac12df32450012ff46d9.mockapi.io/mesure');
      }


    render() { 
        if (this.state.hasErrored) {
            return <p>Sorry! There was an error loading the mesures</p>;   } 
            if (this.state.isLoading) {
                return <p>Loading…</p>;
            }  
          return (
                <ul>
                    {this.state.mesures.map((mesure) => (
                        <li key={mesure.LIBELLE}>
                            {mesure.Mesure.Val}
                        </li>
                    ))}
                </ul>
            );
}
    }
export default MyListMesure;