import { useState, useEffect } from 'react';


const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(() => {

        const handelOnline = () => {
            setIsOnline(true);
        }
        const handelOffline = () => {
            setIsOnline(false);
        }

        window.addEventListener("online", handelOnline);
        window.addEventListener("offline", handelOffline);
        
        return () => {
            window.removeEventListener("online", handelOnline);
            window.removeEventListener("offline", handelOffline);
        }
    }, []);

    return isOnline; //return true or false
}

export default useOnline
