import { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import NavButton from '../components/NavButton';
import cities from '../assets/cities.json';

export default function Cities() {
  const history = useHistory();
  const location = useLocation();
  const cityRef = useRef(null);
  const [megyeId, setMegyeId] = useState(null);

  const changeCityBorders = (index) => {
    for (let i = 0; i < [...cityRef.current.children].length; i++) {
      //  Change previously selected cities back to gray,
      //  if new city is selected from different county
      if (
        cityRef.current.children[i].attributes.checked &&
        cityRef.current.children[i].style.border === '4px solid green'
      ) {
        cityRef.current.children[i].attributes.checked = false;
        cityRef.current.children[i].style.border = '4px solid gray';
        setMegyeId(cityRef.current.children[index].attributes.megyeid.value);
      }

      //  Change every city to green, if they are in the same county
      if (
        cityRef.current.children[i].attributes.megyeid.value ===
        cityRef.current.children[index].attributes.megyeid.value
      ) {
        cityRef.current.children[i].attributes.checked = true;
        cityRef.current.children[i].style.border = '4px solid green';
        setMegyeId(cityRef.current.children[index].attributes.megyeid.value);
      }
    }
  };

  const handleClick = (index) => {
    //  Change city borders back to gray if the selected city is toggled again
    if (
      (cityRef.current.children[index].attributes.checked =
        true &&
        cityRef.current.children[index].style.border === '4px solid green')
    ) {
      return [...cityRef.current.children].forEach((item) => {
        item.attributes.checked = false;
        item.style.border = '4px solid gray';
        setMegyeId();
      });
    }

    changeCityBorders(index);
  };

  //  Handle url params
  useEffect(() => {
    if (megyeId) {
      history.push(`/cities/megye?${megyeId}`);
    } else {
      history.push('/cities');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [megyeId]);

  useEffect(() => {
    const setBordersFromUrl = (id) => {
      for (let item of [...cityRef.current.children]) {
        if (item.attributes.megyeid.value === id) {
          item.attributes.checked = true;
          item.style.border = '4px solid green';
          setMegyeId(id);
        }
      }
    };

    if (location.pathname.includes('/cities/megye')) {
      setBordersFromUrl(location.search.slice(1));
    }
  }, [location]);

  return (
    <>
      <NavButton url="/" text="Back" />

      <div className="cities-container" ref={cityRef}>
        {cities.map((item, index) => {
          return (
            <div
              key={item.id}
              checked={false}
              megyeid={item.megyeid}
              className="cities-div"
              onClick={() => handleClick(index)}
            >
              <p>{item.vnev}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
