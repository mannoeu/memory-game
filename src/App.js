import React, { useEffect } from "react";
import { cards, embaralhar } from "./consts";
import ModalFinish from "./components/ModalFinish";
import "./App.css";

function App() {
  const [photos, setPhotos] = React.useState([]);

  useEffect(() => {
    setPhotos(embaralhar(cards));
  }, []);

  const [selectFirst, setSelectFirst] = React.useState(null);
  const [selectSecond, setSelectSecond] = React.useState(null);

  function handleSelectPhoto(index, show) {
    if (show) {
      return;
    }

    if (index === selectFirst || index === selectSecond) {
      return;
    }

    if (selectFirst === null) {
      setSelectFirst(index);
    } else if (selectSecond === null) {
      setSelectSecond(index);
    }
  }

  React.useEffect(() => {
    if (photos.length && selectFirst !== null && selectSecond !== null) {
      const item1 = photos[selectFirst];
      const item2 = photos[selectSecond];

      var array = photos;

      if (item1.id === item2.match_id) {
        item1.show = true;
        item2.show = true;

        array[selectFirst] = item2;
        array[selectSecond] = item1;

        setTimeout(() => {
          setSelectSecond(null);
          setSelectFirst(null);
        }, 500);
      } else {
        setTimeout(() => {
          setSelectSecond(null);
          setSelectFirst(null);
        }, 500);
      }
    }
  }, [photos, selectFirst, selectSecond]);

  const handleReinitialize = React.useCallback(() => {
    const array = [];

    cards.forEach((i) => {
      array.push({
        ...i,
        show: false,
      });
    });

    setPhotos(embaralhar(array));
  }, []);

  return (
    <div className="App">
      <span className="score">
        <strong>{photos.filter((item) => item.show).length / 2}</strong> pontos
      </span>
      {photos.every((item) => item.show) && (
        <ModalFinish onReinitialize={handleReinitialize} />
      )}
      <main className="grid-photos">
        {photos?.map((item, index) => (
          <div
            className={`item-photo ${
              index === selectFirst || index === selectSecond
                ? "selected"
                : "unselected"
            } ${item.show ? "show" : "hidden"}`}
            key={index}
            onClick={() => handleSelectPhoto(index, item.show)}
          >
            <img src={item.image_url} alt="Thumbnail" />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
