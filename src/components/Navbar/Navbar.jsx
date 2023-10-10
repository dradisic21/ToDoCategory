import React, { useState, useEffect } from "react";
import { Button } from "../UI/Button";
import "../../styles/Navbar.scss";

export function Navbar() {
  const [categories, setCategories] = useState(() => {
    const savedCategories = JSON.parse(localStorage.getItem("categories"));
    return (
      savedCategories || ["All Tasks", "Shopping", "House", "Work", "Personal"]
    );
  });

  const handleAddCategory = () => {
    //popup napraviti 
    const newCategory = prompt("Unesite naziv nove kategorije:");
    if (newCategory) {
      setCategories([...categories, newCategory]);
    }
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  return (
    <div className="navbar-container">
      <div className="avatar-img">
        <img src="../../assets/avatar.jpg" alt="avatar" />
      </div>
      <div className="user-name">
        <p>Dino</p>
      </div>
      <div>
        <div className="title">
          <h3>My list</h3>
          <div className="button-add_task">
            <Button
              className="add-task"
              name="+"
              type="button"
              onClick={handleAddCategory}
            />
          </div>
        </div>
        <div>
          {categories.map((category, index) => (
            <div className="categories" key={index}>
              <div className="list">
                <span className="categories-name">{category}</span>
                <div className="button-list">
                  <Button
                    className="delete-category"
                    name="x"
                    onClick={() => handleDeleteCategory(index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
