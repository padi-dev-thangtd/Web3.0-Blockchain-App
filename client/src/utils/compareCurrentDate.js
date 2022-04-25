import moment from 'moment';

export const compareCurrentDate = (endDate, startDate) => {
  const currentDate = moment().format('YYYY/MM/DD');
  const endDateFormat = moment(endDate, 'DD/MM/YYYY').format('YYYY/MM/DD');
  const startDateFormat = moment(startDate, 'DD/MM/YYYY').format('YYYY/MM/DD');
  if (
    moment(currentDate).isAfter(endDateFormat) &&
    endDateFormat != startDateFormat
  ) {
    return true;
  }
  return false;
};
