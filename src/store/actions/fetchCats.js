import * as actionTypes from "../actionKeys/actionTypes";

const fetchedCats = val => {
  return {
    type: actionTypes.FETCH_CATS,
    fetchedCatsResult: val
  };
};

const networkCheck = val => {
  return {
    type: actionTypes.NETWORK_CHECK,
    networkResult: val
  };
};

const getImageLinks = val => {
  return {
    type: actionTypes.FETCH_CAT_IMAGES,
    fetchCatImagesResult: val
  };
};

const getImageLinksFetcher = async val => {
  try {
    const response = await fetch(val, {
      headers: {
        "x-api-key": "4783aadd-3049-430b-bf78-bcd8b13db4e0"
      }
    });
    const data = await response.json();
    if (data.hasOwnProperty("url")) {
      return data;
    } else {
      return;
    }
  } catch (err) {
    console.log(err);
  }
};

export const fetchCats = () => {
  return dispatch => {
    fetch("https://api.thecatapi.com/v1/categories", {
      headers: {
        "x-api-key": "4783aadd-3049-430b-bf78-bcd8b13db4e0"
      }
    })
      .then(json => json.json())
      .then(data => {
        const array = [];
        for (const props of data) {
          array.push(`https://api.thecatapi.com/v1/images/${props.id}`);
        }
        const res = array.map(x => {
          const dispatch = new getImageLinksFetcher(x);
          return dispatch;
        });
        Promise.all(res)
          .then(data => {
            const res = data.filter(el => {
              return el != null;
            });
            return res;
          })
          .then(imgs => {
            dispatch(getImageLinks(imgs));
          })
          .catch(err => console.error(err));
      })
      .then(() => {
        console.log("network is ON");
        dispatch(networkCheck(true));
      })
      .catch(error => {
        console.log("network is OFF");
        dispatch(networkCheck(false));
        console.error(error);
      });
  };
};
