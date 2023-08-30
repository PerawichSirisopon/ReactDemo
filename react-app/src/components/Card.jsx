import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Basic React.JS</h3>
                <p className="card-text">
                    การใช้งาน React เบื้องต้น สำหรับการสร้างเว็ปแอปพลิเคชั่น
                </p>
                <a href="#" className="btn btn-info">
                    อ่านต่อ
                </a>
            </div> 
        </div>
    );
};
export default Card;