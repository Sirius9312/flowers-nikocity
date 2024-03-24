import { createRoot } from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.css'
import './index.scss';
import { App } from './App';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AllInfoPage } from './pages/AllInfoPage';
import { AlstromeriaPage } from './pages/AlstromeriaPage';
import { ContactsPage } from './pages/ContactsPage';
import { FlowersProvider } from './stores/FlowersContext';
import { SelectedFlowerPage } from './pages/SelectedFlowerPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { CartPage } from './pages/CartPage';
import { HeadChrysantemPage } from './pages/HeadChrysantemPage';
import { BranchChrysantemPage } from './pages/BranchChrysantemPage';
import { MultiflorChrysantemPage } from './pages/MultiflorChrysantemPage';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <Router>
    <FlowersProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="/chrysantema_golova">
            <Route index element={<HeadChrysantemPage />} />
          </Route>

          <Route path="/chrysantema_melkotsvetka">
            <Route index element={<BranchChrysantemPage />} />
          </Route>

          <Route path="/chrysantema_multiflora">
            <Route index element={<MultiflorChrysantemPage />} />
        </Route>*

          <Route path="/alstromeria">
            <Route index element={<AlstromeriaPage />} />
          </Route>

          <Route path="/allinfo">
            <Route index element={<AllInfoPage />} />
          </Route>

          <Route path="/contacts">
            <Route index element={<ContactsPage />} />
          </Route>

          <Route path="/selectedFlower/:flowerId"
            element={<SelectedFlowerPage />} />

          <Route path="/favourites">
            <Route index element={<FavouritesPage />} />
          </Route>

          <Route path="/cart">
            <Route index element={<CartPage />} />
          </Route>

          

          <Route path="*" element={<>Not Found Page</>} />
        </Route>
      </Routes>
    </FlowersProvider>
  </Router>
);
