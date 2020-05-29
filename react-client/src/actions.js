export const setDetailsHandler = formData => dispatch => {
    console.log(formData);
    fetch('/setDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
    .then(res => res.json())
    .then(item => { 
        console.log(item);
        dispatch({type: 'SET_DETAILS', payload: item})
    })
    .catch(err => console.log(err));
}

export const getDetailsHandler = formData => dispatch => {
  console.log(formData);
  fetch('/getDetails')
  .then(res => res.json())
  .then(item => { 
      console.log(item);
      dispatch({type: 'GET_DETAILS', payload: item})
  })
  .catch(err => console.log(err));
}
