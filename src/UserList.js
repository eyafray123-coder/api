import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

function UserList() {
  // Étape 6 : état listOfUser
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Étape 5 : appel axios dans useEffect
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Erreur lors du chargement des utilisateurs.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="message">Chargement...</p>;
  if (error) return <p className="message error">{error}</p>;

  // Étape 7 : map de listOfUser
  return (
    <div className="container">
      <h1>Liste des utilisateurs</h1>
      <div className="grid">
        {listOfUser.map((user) => (
          <div className="card" key={user.id}>
            <h2>{user.name}</h2>
            <p><strong>Username :</strong> {user.username}</p>
            <p><strong>Email :</strong> {user.email}</p>
            <p><strong>Téléphone :</strong> {user.phone}</p>
            <p><strong>Ville :</strong> {user.address.city}</p>
            <p><strong>Entreprise :</strong> {user.company.name}</p>
            <p><strong>Site web :</strong> {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;