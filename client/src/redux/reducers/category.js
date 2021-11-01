const initialState = {
  category:[]
};

const category = (state = initialState, action) => {
  return {
    category:{
      post:['Frontend', 'Backend',  'React', 'Vue', 'JavaScript', 'ETC'],
      baseball:['Play','Repair']
    }
  }
};

export { category };
