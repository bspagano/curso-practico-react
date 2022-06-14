 import { useEffect,useState } from "react";
 import  axios from "axios";


 const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);
	const load = async () => {
		const response = await axios(API);
		setProducts(response.data);
	}
	useEffect(() => {
		load()
	}, [])
	
	return products;
};

export default useGetProducts;