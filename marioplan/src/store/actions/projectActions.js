export const createProject = project => {
  return (dispatch, getState, { getFirestore }) => {
    //make async call to database
    const fireStore = getFirestore();
    fireStore.collection("projects").add({
        ...project,
        authorFirstName: "Net",
        authorLastName: "Marques",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
