import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";


const useAdmitCount = () => {
    const axiosPublic = useAxiosPublic();
    const [admitCardCount, setAdmitCardCount] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPaidUsers = async () => {
            try {
                const res = await axiosPublic.get('/admitCardCounts');
                setAdmitCardCount(res.data);
                // console.log("admit card count",res.data) // Adjust if your backend returns {data: [...]}
            } catch (err) {
                console.error('Error fetching paid users:', err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPaidUsers();
    }, [axiosPublic]);

    return { admitCardCount, loading, error };
};


export default useAdmitCount;