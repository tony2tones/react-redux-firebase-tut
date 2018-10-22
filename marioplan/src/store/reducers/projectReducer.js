const initState = {
  projects: [
    {
      id: "1",
      title: "Toasty toast toast",
      content: "yadda yadda yadda yadda"
    },
    { id: "2", title: "Toasty ", content: "yadda yadda yadda yadda" },
    { id: "3", title: "Toby Toby", content: "yadda yadda yadda yadda" }
  ]
};
/*eslint-disable */
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
  return state;
};

export default projectReducer;
