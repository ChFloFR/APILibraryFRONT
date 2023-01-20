import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icone/Book_25711.png";


function Footer(){
    return(
        <footer className="bg-slate-400">
            <div className="bg-amber-200">
                <div className="w-3/4">
                    <img 
                    className="h-auto max-w-xs"
                    src={logo}
                    alt="Logo Livre Site"
                    />
                </div>
            </div>
        
        </footer>
    )
}

export default Footer