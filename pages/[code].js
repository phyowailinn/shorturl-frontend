import { useRouter } from "next/router";
import { useEffect } from "react";

const Redirect = () => {
  const router = useRouter();
  const query = router?.query;

  useEffect(() => {
    const fetchAPI = async (code) => {
      let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/url/redirect`,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
      
      if (response?.status == 302) {
        console.log(response?.status)
        const { data } = await response.json();
        router.push(data.url)
      }

      if (response?.status == 410) {
        router.push('/redirect/notfounds')
      }
    }
    query.code && fetchAPI(query.code)
  }, [query]);

  return (
    <></>
  );
};

export default Redirect;
