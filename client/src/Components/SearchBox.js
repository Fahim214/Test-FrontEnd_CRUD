import React, { useState } from "react";
import { Form, Row } from "react-bootstrap";

const SearchBox = () => {
  // let navigate = useNavigate()
  // const [keyword, setKeyword] = useState("")

  // const handleSubmit = (e) => {
  //   e.preventDefatult()
  //   if()
  // }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          name="keyword"
          placeholder="Search Products . . ."
          onChange={(e) => setKeyword(e.target.value)}
        ></Form.Control>
      </Form>
    </div>
  );
};

export default SearchBox;
