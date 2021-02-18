import Greeter from './Greeter';
import React, { useState, useEffect } from 'react';

const App = () => {
    const [username, setUsername] = useState('')

    const [loaded, setLoaded] = useState(false);

    const [elipsies, addElipsies] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
          }, 3000);
    },[loaded]);

    for(let i = 0; i<3; i++) {
        setTimeout(() => {
            addElipsies(elipsies + '.')
        }, 751);
    }

    if (loaded === false) {
        return (
            <>
                <h1>Website Loading{elipsies}</h1>
                <button onClick={() => setLoaded(true)}>Load Site</button>
            </>
        )
    } else {
        return (
            <>
                <h1>Hello World!</h1>
                <Greeter name='Colter' phrase="Ha Ha! I'm" />
                <Greeter name='Alex' phrase="I didn't see you there, I'm" />
                <Greeter name='Bren' phrase="I got a weird name, I'm" />
                <input value={username} onChange={e => setUsername(e.target.value)} />
                <p>You are logging in as: {username}</p>
            </>
        );
    }

}

export default App;