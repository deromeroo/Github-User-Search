import {useEffect, useState} from 'react';
import axios from 'axios'; 

const useGithubUsers = (api) => {

    const [user, setUser] = useState({});

	useEffect( () => {

		async function fetchData() {
			try {
				const response = await axios(api);
				setUser(response.data);
			} catch (error) {
				setUser(error.response.data.message)
			}
		};

		fetchData();
	}, [api]);

    return user;
};

export default useGithubUsers;