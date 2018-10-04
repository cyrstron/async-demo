const errors = require('./errors.json');

module.exports = (status) => {
  if (!status) {
    const statuses = Object.keys(errors);
    const keysLength = statuses.length;
    const index = Math.floor(Math.random() * keysLength);
    status = statuses[index];
  }    

  const message = errors[status];

  return {
    stat: status,
    message: message
  }
}