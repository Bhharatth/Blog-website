import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>"Lorem, ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          expedita deleniti nemo consequatur, quidem iste maxime aliquid esse
          impedit? Quam minima animi odio. Ducimus a quos, quia ad dolore, eaque
          praesentium distinctio quasi maiores exercitationem, laudantium eius
          possimus. Asperiores rem reprehenderit magni eligendi voluptatibus
          tempora. Autem voluptatum rem accusantium eligendi provident fugit
          error suscipit sapiente corporis corrupti dignissimos sunt aspernatur
          architecto animi vel, tempore, quasi sint? Ab ducimus, id quis
          repudiandae doloremque tempora similique, magnam fugiat illum
          dignissimos, quia nostrum nobis. Quaerat voluptates magni tempore
          tempora accusantium nihil quidem sint saepe eius, adipisci quisquam
          cumque recusandae consequuntur molestias expedita voluptas.
        </p>
      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  );
};

export default Single;
