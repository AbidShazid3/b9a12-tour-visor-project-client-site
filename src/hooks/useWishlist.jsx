import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useWishlist = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: wishlists = [], refetch } = useQuery({
        queryKey: ['wishlists', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlists?email=${user.email}`)
            return res.data;
        }
    })

    return [wishlists, refetch]
};

export default useWishlist;