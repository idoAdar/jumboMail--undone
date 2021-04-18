import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchBrands } from './store/action';

import Head from './components/Head/Head';
import Row from './components/Row/Row';
import Serach from './components/Search/Serach';

import { Table } from 'react-bootstrap';
import './App.css';

const App = props => {
  useEffect(() => {
    props.get();
  }, [])

  return (
      <div className="App">
        <Serach />
        <Table striped bordered hover>
          {props.brands && (
            <Fragment>
                <Head />
                <tbody>
                  {props.brands.map(record => {
                    return <Row key={Math.random()} record={record}/>
                  })}
                </tbody>
            </Fragment>
          )}
        </Table>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    brands: state.brands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get: () => dispatch(fetchBrands())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
