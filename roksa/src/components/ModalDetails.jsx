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
      // Видаляємо елемент
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>Закрити</button>
        <div className="modal-body">
          <div className="modal-left">
            <img src={item.img} alt={item.title} className="modal-img" />
            <button
              className={`save-btn ${saved ? 'saved' : ''}`}
              onClick={toggleSave}
            >
              ❤️ {saved ? 'Збережено' : 'Зберегти'}
            </button>
          </div>
          <div className="modal-right">
            <h2 className="modal-title">{item.title}</h2>
            <p className="modal-description">{item.fullDescription || item.description}</p>
            <div className="modal-info">
              <p><strong>Автор:</strong> {item.author || 'Невідомий'}</p>
              <p><strong>Оригінальна назва:</strong> {item.originalTitle || extractOriginalTitle(item.img)}</p>
              <p><strong>Рік першого видання:</strong> {item.year || '---'}</p>
              <p><strong>Жанр:</strong> {item.genre || '---'}</p>
            </div>
            <button className="modal-visit-btn" onClick={() => window.open(item.link || '#', '_blank')}>
              Перейти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetails;
