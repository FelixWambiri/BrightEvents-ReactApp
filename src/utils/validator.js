export const eventValidator =  data => {
    const errors = {};
    if(!data.name) errors.name ="can`t be blank";
    if(!data.category) errors.category = "can`t be blank";
    if(!data.location) errors.location = "can`t be blank";
    if(!data.date_hosted) errors.date_hosted = "can`t be blank";
    if(!data.description) errors.description = "can`t be blank";
    return errors;
};