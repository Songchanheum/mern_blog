import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PostsList from './container/post/PostsList';
import PostDetails from './container/post/PostDetails';
import Header from './container/common/Header';
import Sidebar from './container/common/Sidebar';
import Home from './container/common/Home';
import { Box, Flex } from '@chakra-ui/react';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Flex>
        <Sidebar />
        <Box w="100%">
          <Header />
          <BrowserRouter basename="/mern_blog">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Home} />
              <Route exact path="/posts" component={PostsList} />
              <Route exact path="/posts/:category" component={PostsList} />
              <Route exact path="/posts/:category/:id" component={PostDetails} />
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
          F
        </Box>
      </Flex>
    </>
  );
}

export default App;
