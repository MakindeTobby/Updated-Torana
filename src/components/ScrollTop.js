

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Only scroll to the top if no hash fragment is present
        if (!hash) {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}

