import { Route, Routes } from 'react-router-dom';

import DashboardPage from './pages/Dashboard';
import HomePage from './pages/Home';
import KanbanPagePage from './pages/Kanban';
import LoginPage from './pages/Login';
import TeamsPage from './pages/Teams';
import Layout from './components/layout/Layout';

const App = () => {
    return (
      <Layout>
        <Routes>
          <Route path='/' exact element={<HomePage />}>
          </Route>
          <Route path='/kanban' exact element={<KanbanPagePage />}>
          </Route>
          <Route path='/teams' exact element={<TeamsPage />}>
          </Route>
          <Route path='/dashboard' exact element={<DashboardPage />}>
          </Route>
          <Route path='/login' exact element={<LoginPage />}>
          </Route>
        </Routes>
      </Layout>
    );
}

export default App;