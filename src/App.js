import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultBreadcrumb, BreadcrumbWithOverflow, BreadcrumbSkeletonExample } from './components/Breadcrumb';
import Dashboard from './page/Dashboard';
import { Button } from '@carbon/react';
import Demo from './page/Demo';
import Ghgdashboard from './page/Ghgdashboard';
import L1org from './page/L1org';
import L2site from './page/L2site';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ghgdashboard />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/ghg" element={<Ghgdashboard />} />
        <Route path="/l1org" element={<L1org />} />
        <Route path="/l2site" element={<L2site />} />
        {/* 其他路由可以在這裡添加 */}
      </Routes>
    </Router>
  );
}

export default App;
