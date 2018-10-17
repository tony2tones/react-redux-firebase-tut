const initState = {
    projects: [
        {id:'1', title: 'Toasty toast toast', content: 'yadda yadda yadda yadda'},
        {id:'2', title: 'Toasty ', content: 'yadda yadda yadda yadda'},
        {id:'3', title: 'Toby Toby', content: 'yadda yadda yadda yadda'}
    ]
};

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;
