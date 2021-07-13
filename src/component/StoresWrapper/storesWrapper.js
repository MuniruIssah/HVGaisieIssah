import React from 'react'
import { Button, Row, Col } from "reactstrap";
import SearchBar from '../SearchBar/searchBar';
import StoreRadio from '../StoreRadio/storeRadio';
import StoresList from '../StoresList/storesList';
import "./styles.css";



 const StoresWrapper = ({dummyListOfShops,onSelect,onSearch}) => {
    return (
        <Row className='row'>
       <Col xs={{ size: 10, offset: 1 }} sm="10" md={{ size: 6, offset: 3 }}>
            <div className='storesWrapper'>
              <SearchBar onSearch={onSearch}/>
              <StoresList list={dummyListOfShops} onSelect={onSelect} />
            </div>
        </Col>
      </Row> 
    );
}

export default StoresWrapper;