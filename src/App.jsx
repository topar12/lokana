import React from 'react';
import useMobile from './hooks/useMobile';
import MobileLayout from './components/layout/MobileLayout';
import DesktopLayout from './components/layout/DesktopLayout';

function App() {
    const isMobile = useMobile();

    return isMobile ? <MobileLayout /> : <DesktopLayout />;
}

export default App;
