import React from 'react'
import DateAndLabels from './DateAndLabels';
import WeatherCard from './WeatherCard';

const weatherData = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1705546800,
            "main": {
                "temp": 62.83,
                "feels_like": 62.96,
                "temp_min": 62.83,
                "temp_max": 68.04,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 944,
                "humidity": 88,
                "temp_kf": -2.89
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 3.53,
                "deg": 227,
                "gust": 3.51
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-18 03:00:00"
        },
        {
            "dt": 1705557600,
            "main": {
                "temp": 68.34,
                "feels_like": 68.25,
                "temp_min": 68.34,
                "temp_max": 79.38,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 944,
                "humidity": 72,
                "temp_kf": -6.13
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 3.2,
                "deg": 206,
                "gust": 3.74
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-18 06:00:00"
        },
        {
            "dt": 1705568400,
            "main": {
                "temp": 77.99,
                "feels_like": 77.79,
                "temp_min": 77.99,
                "temp_max": 85.57,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 941,
                "humidity": 49,
                "temp_kf": -4.21
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 5
            },
            "wind": {
                "speed": 6.96,
                "deg": 219,
                "gust": 8.57
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-18 09:00:00"
        },
        {
            "dt": 1705579200,
            "main": {
                "temp": 85.41,
                "feels_like": 82.78,
                "temp_min": 85.41,
                "temp_max": 85.41,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 941,
                "humidity": 26,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 5
            },
            "wind": {
                "speed": 6.87,
                "deg": 244,
                "gust": 7.47
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-18 12:00:00"
        },
        {
            "dt": 1705590000,
            "main": {
                "temp": 72.05,
                "feels_like": 71.26,
                "temp_min": 72.05,
                "temp_max": 72.05,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 942,
                "humidity": 49,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 9
            },
            "wind": {
                "speed": 8.68,
                "deg": 278,
                "gust": 17.47
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-18 15:00:00"
        },
        {
            "dt": 1705600800,
            "main": {
                "temp": 67.55,
                "feels_like": 67.06,
                "temp_min": 67.55,
                "temp_max": 67.55,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 942,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 13
            },
            "wind": {
                "speed": 5.86,
                "deg": 290,
                "gust": 6.98
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-18 18:00:00"
        },
        {
            "dt": 1705611600,
            "main": {
                "temp": 65.91,
                "feels_like": 65.21,
                "temp_min": 65.91,
                "temp_max": 65.91,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 941,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 14
            },
            "wind": {
                "speed": 4.47,
                "deg": 298,
                "gust": 4.61
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-18 21:00:00"
        },
        {
            "dt": 1705622400,
            "main": {
                "temp": 64.81,
                "feels_like": 63.91,
                "temp_min": 64.81,
                "temp_max": 64.81,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 941,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 11
            },
            "wind": {
                "speed": 2.37,
                "deg": 107,
                "gust": 3.85
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-19 00:00:00"
        },
        {
            "dt": 1705633200,
            "main": {
                "temp": 71.29,
                "feels_like": 70.43,
                "temp_min": 71.29,
                "temp_max": 71.29,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 944,
                "humidity": 49,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 5
            },
            "wind": {
                "speed": 1.54,
                "deg": 359,
                "gust": 2.15
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-19 03:00:00"
        },
        {
            "dt": 1705644000,
            "main": {
                "temp": 82.83,
                "feels_like": 81.27,
                "temp_min": 82.83,
                "temp_max": 82.83,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 945,
                "humidity": 32,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 5.46,
                "deg": 58,
                "gust": 4.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-19 06:00:00"
        },
        {
            "dt": 1705654800,
            "main": {
                "temp": 87.82,
                "feels_like": 84.83,
                "temp_min": 87.82,
                "temp_max": 87.82,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 941,
                "humidity": 25,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.67,
                "deg": 94,
                "gust": 2.75
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-19 09:00:00"
        },
        {
            "dt": 1705665600,
            "main": {
                "temp": 87.3,
                "feels_like": 84.24,
                "temp_min": 87.3,
                "temp_max": 87.3,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 941,
                "humidity": 24,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.01,
                "deg": 90,
                "gust": 3.15
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-19 12:00:00"
        },
        {
            "dt": 1705676400,
            "main": {
                "temp": 74.75,
                "feels_like": 74.28,
                "temp_min": 74.75,
                "temp_max": 74.75,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 942,
                "humidity": 50,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 7.36,
                "deg": 252,
                "gust": 12.95
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-19 15:00:00"
        },
        {
            "dt": 1705687200,
            "main": {
                "temp": 70.63,
                "feels_like": 70.59,
                "temp_min": 70.63,
                "temp_max": 70.63,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 942,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 8.23,
                "deg": 305,
                "gust": 13.18
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-19 18:00:00"
        },
        {
            "dt": 1705698000,
            "main": {
                "temp": 68.65,
                "feels_like": 68.5,
                "temp_min": 68.65,
                "temp_max": 68.65,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 941,
                "humidity": 70,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 14
            },
            "wind": {
                "speed": 4.94,
                "deg": 327,
                "gust": 6.78
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-19 21:00:00"
        },
        {
            "dt": 1705708800,
            "main": {
                "temp": 67.06,
                "feels_like": 66.85,
                "temp_min": 67.06,
                "temp_max": 67.06,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 942,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 26
            },
            "wind": {
                "speed": 3,
                "deg": 70,
                "gust": 3.4
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-20 00:00:00"
        },
        {
            "dt": 1705719600,
            "main": {
                "temp": 72.66,
                "feels_like": 72.3,
                "temp_min": 72.66,
                "temp_max": 72.66,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 945,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 35
            },
            "wind": {
                "speed": 5.21,
                "deg": 15,
                "gust": 6.96
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-20 03:00:00"
        },
        {
            "dt": 1705730400,
            "main": {
                "temp": 83.77,
                "feels_like": 82.26,
                "temp_min": 83.77,
                "temp_max": 83.77,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 945,
                "humidity": 34,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 37
            },
            "wind": {
                "speed": 6.38,
                "deg": 43,
                "gust": 4.34
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-20 06:00:00"
        },
        {
            "dt": 1705741200,
            "main": {
                "temp": 88.56,
                "feels_like": 85.68,
                "temp_min": 88.56,
                "temp_max": 88.56,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 942,
                "humidity": 26,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 34
            },
            "wind": {
                "speed": 1.99,
                "deg": 354,
                "gust": 3.36
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-20 09:00:00"
        },
        {
            "dt": 1705752000,
            "main": {
                "temp": 88,
                "feels_like": 85.12,
                "temp_min": 88,
                "temp_max": 88,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 941,
                "humidity": 26,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 38
            },
            "wind": {
                "speed": 4.36,
                "deg": 39,
                "gust": 4.92
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-20 12:00:00"
        },
        {
            "dt": 1705762800,
            "main": {
                "temp": 75.76,
                "feels_like": 75.2,
                "temp_min": 75.76,
                "temp_max": 75.76,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 943,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 5.37,
                "deg": 285,
                "gust": 10.71
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-20 15:00:00"
        },
        {
            "dt": 1705773600,
            "main": {
                "temp": 71.02,
                "feels_like": 70.65,
                "temp_min": 71.02,
                "temp_max": 71.02,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 943,
                "humidity": 60,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 5
            },
            "wind": {
                "speed": 5.93,
                "deg": 303,
                "gust": 8.34
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-20 18:00:00"
        },
        {
            "dt": 1705784400,
            "main": {
                "temp": 69.48,
                "feels_like": 68.9,
                "temp_min": 69.48,
                "temp_max": 69.48,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 941,
                "humidity": 59,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 10
            },
            "wind": {
                "speed": 5.37,
                "deg": 353,
                "gust": 6.35
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-20 21:00:00"
        },
        {
            "dt": 1705795200,
            "main": {
                "temp": 67.95,
                "feels_like": 67.12,
                "temp_min": 67.95,
                "temp_max": 67.95,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 942,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 51
            },
            "wind": {
                "speed": 5.08,
                "deg": 44,
                "gust": 5.39
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-21 00:00:00"
        },
        {
            "dt": 1705806000,
            "main": {
                "temp": 73.83,
                "feels_like": 72.93,
                "temp_min": 73.83,
                "temp_max": 73.83,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 945,
                "humidity": 43,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 7.52,
                "deg": 34,
                "gust": 10.51
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-21 03:00:00"
        },
        {
            "dt": 1705816800,
            "main": {
                "temp": 84.54,
                "feels_like": 82.81,
                "temp_min": 84.54,
                "temp_max": 84.54,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 945,
                "humidity": 33,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 86
            },
            "wind": {
                "speed": 6.67,
                "deg": 63,
                "gust": 5.77
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-21 06:00:00"
        },
        {
            "dt": 1705827600,
            "main": {
                "temp": 90.09,
                "feels_like": 87.08,
                "temp_min": 90.09,
                "temp_max": 90.09,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 942,
                "humidity": 25,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 37
            },
            "wind": {
                "speed": 1.68,
                "deg": 208,
                "gust": 3.36
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-21 09:00:00"
        },
        {
            "dt": 1705838400,
            "main": {
                "temp": 89.56,
                "feels_like": 86.25,
                "temp_min": 89.56,
                "temp_max": 89.56,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 941,
                "humidity": 23,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 42
            },
            "wind": {
                "speed": 2.06,
                "deg": 16,
                "gust": 3.78
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-21 12:00:00"
        },
        {
            "dt": 1705849200,
            "main": {
                "temp": 74.34,
                "feels_like": 73.87,
                "temp_min": 74.34,
                "temp_max": 74.34,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 943,
                "humidity": 51,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 11
            },
            "wind": {
                "speed": 9.89,
                "deg": 267,
                "gust": 17.69
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-21 15:00:00"
        },
        {
            "dt": 1705860000,
            "main": {
                "temp": 70.84,
                "feels_like": 70.3,
                "temp_min": 70.84,
                "temp_max": 70.84,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 943,
                "humidity": 57,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 15
            },
            "wind": {
                "speed": 7.74,
                "deg": 284,
                "gust": 11.16
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-21 18:00:00"
        },
        {
            "dt": 1705870800,
            "main": {
                "temp": 69.04,
                "feels_like": 68.23,
                "temp_min": 69.04,
                "temp_max": 69.04,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 942,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 65
            },
            "wind": {
                "speed": 1.36,
                "deg": 4,
                "gust": 5.95
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-21 21:00:00"
        },
        {
            "dt": 1705881600,
            "main": {
                "temp": 67.03,
                "feels_like": 66.16,
                "temp_min": 67.03,
                "temp_max": 67.03,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 942,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 70
            },
            "wind": {
                "speed": 2.13,
                "deg": 60,
                "gust": 2.39
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-22 00:00:00"
        },
        {
            "dt": 1705892400,
            "main": {
                "temp": 74.08,
                "feels_like": 73.26,
                "temp_min": 74.08,
                "temp_max": 74.08,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 945,
                "humidity": 44,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 59
            },
            "wind": {
                "speed": 3.51,
                "deg": 37,
                "gust": 4.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-22 03:00:00"
        },
        {
            "dt": 1705903200,
            "main": {
                "temp": 85.32,
                "feels_like": 82.8,
                "temp_min": 85.32,
                "temp_max": 85.32,
                "pressure": 1014,
                "sea_level": 1014,
                "grnd_level": 945,
                "humidity": 27,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 66
            },
            "wind": {
                "speed": 5.46,
                "deg": 56,
                "gust": 4.34
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-22 06:00:00"
        },
        {
            "dt": 1705914000,
            "main": {
                "temp": 91.04,
                "feels_like": 87.46,
                "temp_min": 91.04,
                "temp_max": 91.04,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 942,
                "humidity": 21,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 79
            },
            "wind": {
                "speed": 0.76,
                "deg": 52,
                "gust": 2.62
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-22 09:00:00"
        },
        {
            "dt": 1705924800,
            "main": {
                "temp": 90.45,
                "feels_like": 86.76,
                "temp_min": 90.45,
                "temp_max": 90.45,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 942,
                "humidity": 20,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 3.51,
                "deg": 55,
                "gust": 3.78
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-01-22 12:00:00"
        },
        {
            "dt": 1705935600,
            "main": {
                "temp": 75.54,
                "feels_like": 74.68,
                "temp_min": 75.54,
                "temp_max": 75.54,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 943,
                "humidity": 40,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.63,
                "deg": 270,
                "gust": 13.09
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-22 15:00:00"
        },
        {
            "dt": 1705946400,
            "main": {
                "temp": 71.26,
                "feels_like": 70.39,
                "temp_min": 71.26,
                "temp_max": 71.26,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 943,
                "humidity": 49,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 7.29,
                "deg": 292,
                "gust": 9.15
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-22 18:00:00"
        },
        {
            "dt": 1705957200,
            "main": {
                "temp": 70.07,
                "feels_like": 68.94,
                "temp_min": 70.07,
                "temp_max": 70.07,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 941,
                "humidity": 46,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 97
            },
            "wind": {
                "speed": 4.54,
                "deg": 51,
                "gust": 6.13
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-22 21:00:00"
        },
        {
            "dt": 1705968000,
            "main": {
                "temp": 68.54,
                "feels_like": 67.21,
                "temp_min": 68.54,
                "temp_max": 68.54,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 942,
                "humidity": 45,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 75
            },
            "wind": {
                "speed": 5.37,
                "deg": 31,
                "gust": 5.44
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-01-23 00:00:00"
        }
    ],
    "city": {
        "id": 1269920,
        "name": "Hubli",
        "coord": {
            "lat": 15.3518,
            "lon": 75.138
        },
        "country": "IN",
        "population": 840214,
        "timezone": 19800,
        "sunrise": 1705541369,
        "sunset": 1705582155
    }
}

const filterFirstOccurrenceOfDay = (data) => {
    const result = [];
    const seenDays = new Set();
  
    for (const entry of data) {
      // Extracting day from timestamp (ignoring time)
      const day = new Date(entry.dt_txt.split(" ")[0]).toLocaleDateString();
  
      if (!seenDays.has(day)) {
        seenDays.add(day);
        result.push(entry);
      }
    }
  
    return result;
  };

const Main = ({isLoading}) => {
    const filteredWeatherData = filterFirstOccurrenceOfDay(weatherData.list);

  if(isLoading)  
  return (
    <div className='pt-12 max-sm:pt-2 flex justify-center items-center'>
        <aside className='w-10 h-10 border-black border-t-2 rounded-full animate-spin'></aside>
    </div>
)
  return (
    <div className=' pt-12 max-sm:pt-0'>
        <main className='flex space-x-11 max-sm:space-x-0 max-sm:flex-col max-sm:space-y-3'>
            <DateAndLabels date={filteredWeatherData[0].dt}/>
            <ul className='grow flex space-x-8 max-sm:flex-col max-sm:space-x-0 max-sm:space-y-5 max-sm:px-[15%]'>
                {filteredWeatherData?.map((data,index)=>{
                    if(index<5)
                    return (<WeatherCard key={index} data={data}/>)
                })}
                
            </ul>
        </main>
    </div>
  )
}

export default Main