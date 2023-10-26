import { useLocation } from 'react-router-dom';

function useActiveTab() {
    const location = useLocation();

    const isActiveTab = (path) => {
        return location.pathname === path;
    };

    return isActiveTab;
}

export default useActiveTab;
