import { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';


const usePaidApplicantData = () => {
    const axiosPublic = useAxiosPublic();
    const [paidUsers, setPaidUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPaidUsers = async () => {
            try {
                const res = await axiosPublic.get('/payments');
                setPaidUsers(res.data); // Adjust if your backend returns {data: [...]}
            } catch (err) {
                console.error('Error fetching paid users:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPaidUsers();
    }, []);

    return { paidUsers, loading, error };
};

export default usePaidApplicantData;
