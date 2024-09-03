import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultBreadcrumb, BreadcrumbWithOverflow, BreadcrumbSkeletonExample } from './components/Breadcrumb';
import Dashboard from './page/Dashboard';
import { Button } from '@carbon/react';
import Demo from './page/Demo';
import Ghgdashboard from './page/Ghgdashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ghgdashboard />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/ghg" element={<Ghgdashboard />} />
        {/* 其他路由可以在這裡添加 */}
      </Routes>
    </Router>
  );
}

export default App;
