import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import { Box, Flex } from '@chakra-ui/react';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <Flex>
      <Sidebar />
      <Box w="100%">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/posts" component={PostsList} />
          <Route exact path="/posts/:category" component={PostsList} />
          <Route exact path="/posts/:category/:id" component={PostDetails} />
          <Redirect to="/" />
        </Switch>
      </Router>
      </Box>
      </Flex>
    </>
  );
}

export default App;
