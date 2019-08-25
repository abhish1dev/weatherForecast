import moment from 'moment-timezone';
import each from 'async/each';
import ResponseObject from '../Helpers/ResponseObject';
import Message from '../Helpers/Message';
import Cities from '../../dummyData/cities';
import CitiesWeather from '../../dummyData/citiesWeather';

const debug = require('debug')('weatherForecast: Controller/Weather');

class WeatherForecast {

  /**
   * Get cities from dummy data
   * @return Promise
   */


  static getCities(req, res, next) {
    res.status(200).json(new ResponseObject(200, Message.cities, Cities));
  }

  /**
   * Get cities weather from dummy data
   * @return Promise
   */


  static async getCitiesWeather(req, res, next) {
    const cityId = req.params.cityId;
    const cityWeather = CitiesWeather[cityId];
    const cityTimezone = await Cities.filter(
      (data) => {
        return data.id == cityId;
      }
    );
    let resultArr = [];
    let i = 0;
    const statusMessage = (cityWeather) ? Message.citiesForecast : Message.empty;
    if (cityWeather) {
      each(cityWeather, (weather, callback) => {
        weather.day = moment().add(i, 'days').tz(cityTimezone[0].timeZone).format('dddd');
        resultArr.push(weather);
        i++;
        callback();
      }, (err) => {
        if (err) {
          res.status(500).json(new ResponseObject(500, err));
        } else {
          resultArr[0].cityTimezone = moment().tz(cityTimezone[0].timeZone).format('MMMM Do YYYY, h:mm:ss a');
          res.status(200).json(new ResponseObject(200, statusMessage, resultArr));
        }
      });
    } else {
      res.status(200).json(new ResponseObject(200, statusMessage, cityWeather));
    }
  }
}

export default WeatherForecast;
