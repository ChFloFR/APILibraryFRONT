import React, { useEffect, useState } from "react";
import LivreDetail from "../../components/products/LivreDetail";
import apiBackend from "../../api/backend/api.Backend";
import { URL_BACK_BOOK_BY_ID } from "../../constants/urls/urlBackEnd";
import { useNavigate, useParams } from "react-router-dom";
import { URL_404 } from "../../constants/urls/urlFrontEnd";
import SuggestionsContainer from "../../components/products/SuggestionsContainer";

const LivreView = () => {
    const [book, setBook]= useState();

    let id = num.bookID;
    const navigate = useNavigate();

    useEffect(() => {
        apiBackend.post(URL_BACK_BOOK_BY_ID + `${id}`).then((response => {
            if (response.status === 200 ) {
                setProduit(response.data);
            }
        })).catch(error => {
            if(error.response.data["errorCode"] === "002" ){
                navigate(URL_404)
            }
        })
    },[updateDetail])

    return (
        <div className="w-full">
            <div className="w-11/12 sm:w-3/4 m-auto mt-12 mb-12 space-y-12">
                {book && <BookDetail {...book}/>}
                {product && (
                    <SuggestionsContainer
                        id={product.id}
                        idCategorie={product.id_categorie}
                        udpate={updateDetailComponent}
                        />
                )}
            </div>
        </div>
    )
    
}

export default LivreView