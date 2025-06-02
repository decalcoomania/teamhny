import React, { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import './SavedItemsSlots.css'; // Стилі для слотів

const SavedItemsSlots = () => {
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const fetchSaved = async () => {
      if (!auth.currentUser) return;

      const favDocRef = doc(db, "favorites", auth.currentUser.uid);
      const favDocSnap = await getDoc(favDocRef);
      if (favDocSnap.exists()) {
        setSavedItems(favDocSnap.data().savedItems || []);
      }
    };

    fetchSaved();
  }, []);

  // Показуємо максимум 6 елементів
  const slots = savedItems.slice(0, 6);

  return (
    <div className="images-wrapper">
      <div className="image-row">
        {slots.slice(0, 3).map((item, idx) => (
          <img key={idx} src={item.img} alt={item.title} className="standalone-image" />
        ))}
      </div>
      <div className="image-row">
        {slots.slice(3, 6).map((item, idx) => (
          <img key={idx} src={item.img} alt={item.title} className="standalone-image" />
        ))}
      </div>
    </div>
  );
};

export default SavedItemsSlots;
