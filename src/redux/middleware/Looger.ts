const Looger = (state) => (next) => (action) => {
  console.log(state);
  console.log(next);
  console.log(action);
};

export default Looger;
