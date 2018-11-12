export const createProject = project => {
  return (dispatch, getState, { getFirestore }) => {
    //make async call to database
    const fireStore = getFirestore();
    // const profile = getState().firebase.profile;
    fireStore.collection("projects").add({
        ...project,
        authorFirstName: "Tony",
        authorLastName: "Marques",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
