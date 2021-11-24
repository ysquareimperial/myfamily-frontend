import React, { useEffect, useState } from "react";
import { _customNotify } from "../Notifications/Helpers";
import { api_url } from "../redux/actions";
import { _fetchApi } from "../redux/actions/api";
import PostComp from "./PostComp";

function PostContainer() {
  const [results, setResults] = useState([]);
  const getPost = () => {
    _fetchApi(`${api_url}/getPosting`, (data) => {
      if (data.results) {
        setResults(data.results);
        _customNotify("Fetch Successfull");
      }
    });
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      {results.map((item, index) => (
        <PostComp key={index} item={item.text} date={item.date} />
      ))}
    </div>
  );
}

export default PostContainer;
