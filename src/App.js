import { useEffect, useState } from "react";
import { connect } from "react-redux";

import HeaderComponent from "./components/header";
import Filter from "./components/filter";
import CharacterCard from "./components/characterCard";
import './App.css';
import cardAction from "./action/cardData";

const App = (props) => {
  const [cardDetails, setCardDetails] = useState({})
  const [filterValues, setFilterValues] = useState({
    name: '',
    gender: '',
    species: '',
  })
  const [sort, setSort] = useState(true)

  const {characterDetails}=props
  const sortDetails=()=>{
    if(characterDetails  && characterDetails.results){
      let arrayCard=characterDetails.results
      if (sort) {
        arrayCard=arrayCard.sort((a,b) => a.id - b.id);
      }
      else{
        arrayCard=arrayCard.sort((a,b) => b.id - a.id);
      }
      setCardDetails({...characterDetails,results:arrayCard})
    }
  }

  useEffect(() => {
    sortDetails()
  }, [characterDetails,sort]);

 
  useEffect(() => {
    props.getDetails(filterValues)
  }, [filterValues]);


  const onChangeValues = (field, value) => {
    setFilterValues({ ...filterValues, [field]: value })

  }

  const clearFilter = () => {
    setFilterValues({
      name: '',
      gender: '',
      species: "",
    })
  }

 
  const onChangeSort = async() => {
      await setSort(!sort)
  }


  return (
    <div id="app">
      <HeaderComponent />
      <Filter filterValues={filterValues} clearFilter={clearFilter}
        onChangeValues={onChangeValues} sort={sort}
        onChangeSort={onChangeSort} />

      <div className="MuiGrid-root MuiGrid-container MuiGrid-item">
        <CharacterCard cardDetails={cardDetails} />
      </div>

    </div>

  );
}

const mapStateToProps = (state) => {
  const { characterDetails } = state.characterCard;
  return { characterDetails }
}


export default connect(mapStateToProps, { ...cardAction })(App);
