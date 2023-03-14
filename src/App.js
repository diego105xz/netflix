import React, {useEffect, useState} from "react";
import TMdb from "./TMdb";

export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () =>{
      //Pegando a lista Total
      let list = await TMdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return(
    <div className="page">
      Header
      Destaque
      As Listas
      rodape
      PAREI AS 45MIN
    </div>
  );
}