import React, { useState, useEffect }  from "react";


const LivresView = () => {

    const [categorie, setCategorie] = useState([-1]);
    const [page, setPage] = useState(0);
    const [countPage, setCountPage] = useState(0);

    const handleCategorie = (idCategorie, nameCategorie) => {
        setCategorie([idCategorie, nameCategorie])
        setPage(0)
    }

    const handlePage = (numPage) => {
        setPage(numPage.selected.selected);
    }

    const handleCountPage = (count) =>{
        setCountPage(Math.ceil(count/20))
    }

    useEffect(()=>{
        if(location.state?.categorie){
            handleCategorie(location.state?.categorie, location.state?.name);
        }

    }, []);

    return(
        <div className="w-3/4 mx-auto border-2">
            <Helmet>
                <title>Tous les livres</title>
            
            </Helmet>
            <div className="mx-auto">
                <Categorie setCategorie={handleCategorie}/>
            </div>
            <LivreContainer categorie={categorie} setCategorie={handleCategorie} setCountPage={handleCountPage} page={page} limit={20} backArrow={backArrow}/>
            <Paginate setPage={handlePage} countPage={countPage} page={page}/>
        </div>
    );
};

export default LivresView