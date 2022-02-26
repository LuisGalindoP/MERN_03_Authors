import React, {useState, useEffect} from 'react';
import {Router} from '@reach/router'

import AllAuthors from "./components/allAuthors";
import NewAuthor from "./components/newAuthor";
import UpdateAuthor from "./components/updateAuthor"

function App() {
    const [authors, setAuthors] = useState([]);
  return (
    <div>
      <Router>
        <AllAuthors path={'/'}
            authors = {authors}
            setAuthors={setAuthors}
        />
        <NewAuthor path={'/new'}
            authors = {authors}
            setAuthors={setAuthors}
        />
        <UpdateAuthor path={'/edit/:id'}/>
      </Router>
    </div>
  );
}

export default App;
