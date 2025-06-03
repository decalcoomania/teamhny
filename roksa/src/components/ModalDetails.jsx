import React, { useState, useEffect } from 'react';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db, auth } from "../firebase";
import './ModalDetails.css';

const extractOriginalTitle = (imgPath) => {
  const fileName = imgPath.split('/').pop();
  return fileName.replace(/\.[^/.]+$/, '');
};

const ModalDetails = ({ item, onClose }) => {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const checkIfSaved = async () => {
      if (!auth.currentUser) return;
      const favDocRef = doc(db, "favorites", auth.currentUser.uid);
      const favDocSnap = await getDoc(favDocRef);
      if (favDocSnap.exists()) {
        const savedItems = favDocSnap.data().savedItems || [];
        setSaved(savedItems.some(i => i.title === item.title));
      }
    };
    checkIfSaved();
  }, [item]);

  const toggleSave = async () => {
    if (!auth.currentUser) {
      alert("Будь ласка, увійдіть, щоб зберігати улюблені.");
      return;
    }

    const favDocRef = doc(db, "favorites", auth.currentUser.uid);
    const favDocSnap = await getDoc(favDocRef);
    let savedItems = favDocSnap.exists() ? favDocSnap.data().savedItems || [] : [];

    if (saved) {
      await updateDoc(favDocRef, {
        savedItems: arrayRemove(item)
      });
      setSaved(false);
    } else {
      if (favDocSnap.exists()) {
        await updateDoc(favDocRef, {
          savedItems: arrayUnion(item)
        });
      } else {
        await setDoc(favDocRef, { savedItems: [item] });
      }
      setSaved(true);
    }
  };

  return (
    <div className="modall-overlay" onClick={onClose}>
      <div className="modall-content" onClick={e => e.stopPropagation()}>
        <button className="modall-close-btn" onClick={onClose}>X</button>
        <div className="modall-body">
          <div className="modall-left">
            <img src={item.img} alt={item.title} className="modall-img" />
            <button
              className={`save-btn ${saved ? 'saved' : ''}`}
              onClick={toggleSave}
            >
              ❤️ {saved ? 'Збережено' : 'Зберегти'}
            </button>
          </div>
          <div className="modall-right">
            <h2 className="modall-title">{item.title}</h2>
            <p className="modall-description">{item.fullDescription || item.description}</p>
            <div className="modall-info">
              <p><strong>Автор:</strong> {item.author || 'Невідомий'}</p>
              <p><strong>Оригінальна назва:</strong> {item.originalTitle || extractOriginalTitle(item.img)}</p>
              <p><strong>Рік першого видання:</strong> {item.year || '---'}</p>
              <p><strong>Жанр:</strong> {item.genre || '---'}</p>
            </div>
            <button className="modall-visit-btn" onClick={() => window.open(item.link || '#', '_blank')}>
              Перейти на офіційний сайт
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
