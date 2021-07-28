import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async country => {
  let newUrl = country ? `${url}/countries/${country}` : url;

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(newUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, recovered, deaths, reportDate }) => ({
      confirmed: confirmed.total,
      recovered: recovered.total,
      deaths: deaths.total,
      reportDate
    }));
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries }
    } = await axios.get(`${url}/countries`);

    return countries.map(({ name }) => name);
  } catch (error) {
    return error;
  }
};
