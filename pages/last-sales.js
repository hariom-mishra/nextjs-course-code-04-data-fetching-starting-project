import { useEffect, useState } from "react";
import useSWR from "swr";
function LastSalesPage() {
  const [sales, setSales] = useState();
  // const [isloading, setIsLoading] = useState(false)

  const { data, error } = useSWR(
    "https://nextjs-course-24c7d-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then(res => res.json())
  );
  useEffect(() => {
    if (data) {
      const transformedData = [];

      for (const key in data) {
        transformedData.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedData);
    }
  }, [data]);

  // useEffect(()=>{
  //     setIsLoading(true);
  //     fetch('https://nextjs-course-24c7d-default-rtdb.firebaseio.com/sales.json')
  //     .then(
  //         response=> response.json()
  //     ).then(
  //         data=> {
  //             const transformedData =[]

  //             for(const key in data){
  //                 transformedData.push({
  //                     id:key,
  //                     username:data[key].username,
  //                     volume: data[key].volume
  //                 })
  //             }

  //             setSales(transformedData)
  //             setIsLoading(false);
  //         }
  //     )
  // },[])
  if (error) {
    return <p>failed to load</p>;
  }

  if (!data || !sales) {
    return <p>loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username}-{sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;
