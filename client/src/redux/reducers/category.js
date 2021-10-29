const initialState = {
  category:[]
};

const category = (state = initialState, action) => {
  return {
    category:['Frontend', 'Backend',  'React', 'Vue', 'JavaScript', 'ETC']
  }
};

export { category };
