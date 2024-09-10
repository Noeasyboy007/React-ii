import { createContext } from 'react';

const UserContext = createContext({
    user: {
        name: "Aritra",
        email: "aritra@gmail.com",
    }
});

export default UserContext;
