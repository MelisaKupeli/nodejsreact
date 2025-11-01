import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App.js';
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const Home = () => {

  // 🔹 API'den veri çekiyoruz (React Query + Axios)
  /* useQuery açıklaması:
  - queryKey → sorguya verilen benzersiz anahtar (cache için)
  - queryFn → API isteğini yapan fonksiyon (Axios ile)
  - data → API'den gelen sonuç (burada catData olarak yeniden adlandırıldı)
  - isLoading → veri çekilirken true olur
  - isError → hata olursa true olur
  - refetch → veriyi elle yeniden çekmek için kullanılır
  */
  const { data: catData, isLoading, isError, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  // const { username } = useContext(AppContext); // 🔸 Global state’ten username almak için (şu an kullanılmıyor)

  
  if (isError) return <div>Error occurred!</div>;
  if (isLoading) return <h1>Loading...</h1>;

  // 🔹 Veri geldiyse ekrana yazdır
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>{catData?.fact}</p>
      <button onClick={() => refetch()}>Update Data</button>
    </div>
  );
};
