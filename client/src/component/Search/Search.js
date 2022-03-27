import React from 'react';
import { useDispatch } from 'react-redux';
import { searchAC } from '../../redux/actionCreators/contactAC'


function Search() {
  const dispath = useDispatch()

  return (
    <nav>
    <div className="nav-wrapper light-blue darken-4">
      <form >
        <div className="input-field">
          <input id="search" type="search" required onChange={(e)=>dispath(searchAC(e.target.value))}/>
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i  className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
   
   
  );
}

export default Search;
