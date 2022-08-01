import { Form, Button, Col } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { videoSearch } from "../actions";

const Search = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState();

  const validateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    let Search = search; 
    if (Search === undefined) {
      Search = '';
    };
    const urlFormat = encodeURIComponent(Search) ;
    dispatch(videoSearch(urlFormat));
  };

  return (
    <Col className="container">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="m-1"
          aria-label="Search"
          onChange={validateSearch}
        />
        <Button variant="btn btn-outline-secondary" className='m-1' onClick={handleSubmit} type='submit'>Search</Button>
      </Form> 
    </Col>
  );
};

export default Search;