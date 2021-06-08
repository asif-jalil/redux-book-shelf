export const loadBooks = (payload) => {
   return (dispatch, getState) => {
      fetch("http://localhost:8080/books")
         .then((res) => res.json())
         .then((data) =>
            dispatch({
               type: "LOAD_BOOKS",
               payload: data.data,
            })
         );
   };
};

export const loadReadingList = (payload) => {
   return (dispatch, getState) => {
      fetch("http://localhost:8080/reading-list")
         .then((res) => res.json())
         .then((data) =>
            dispatch({
               type: "READING_LIST",
               payload: data.data,
            })
         );
   };
};

export const addToReadingList = (payload) => {
   const newPayload = { ...payload };
   delete newPayload._id;
   return (dispatch, getState) => {
      fetch("http://localhost:8080/add-to-reading-list", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(newPayload),
      })
         .then((res) => res.json())
         .then((data) =>
            dispatch({
               type: "ADD_TO_READING_LIST",
               payload: data,
            })
         );
   };
};

export const removeFromReadingList = (payload) => {
   return (dispatch, getState) => {
      fetch(`http://localhost:8080/remove-from-reading-list/${payload.id}`, {
         method: "DELETE"
      })
         .then((res) => res.json())
         .then((data) => {
            dispatch({
               type: "REMOVE_FROM_READING_LIST",
               payload: payload,
            });
         });
   };
};

export const loadFinishedBook = (payload) => {
   return (dispatch, getState) => {
      fetch("http://localhost:8080/finished-list")
         .then((res) => res.json())
         .then((data) =>
            dispatch({
               type: "LOAD_FINISHED_BOOK",
               payload: data.data,
            })
         );
   };
};

export const addToFinishedList = (payload) => {
   const newPayload = { ...payload };
   delete newPayload._id;

   return (dispatch, getState) => {
      fetch("http://localhost:8080/add-to-finished-list", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newPayload),
      })
         .then((res) => res.json())
         .then((data) => {
            if (data) {
               fetch(
                  `http://localhost:8080/remove-from-reading-list/${payload.id}`,
                  {
                     method: "DELETE",
                  }
               )
                  .then((res) => res.json())
                  .then((data2) =>
                     dispatch({
                        type: "ADD_TO_FINISHED_LIST",
                        payload: payload,
                     })
                  );
            }
         });
   };
};
