/* Magic Mirror Config
 * Modified by The Homies.
 * See https://github.com/MichMich/MagicMirror#configuration for details.
 */

var config = {
    address: "0.0.0.0",
    port: 8080,
    ipWhitelist: [], // For now, we allow all IP's
    language: "en",
    timeFormat: 24,
    units: "metric",

    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left"
        },
        {
            module: "currentweather",
            position: "top_right",	// This can be any of the regions.
            // Best results in left or right regions.
            config: {
                // See 'Configuration options' for more information.
                // location: "Wellington,New Zealand",
                locationID: "2179538", //Location ID from http://openweathermap.org/help/city_list.txt
                appid: "c9bf65f4810ef8324e5298c8461e1f6c" //openweathermap.org API key.
            }
        },
        {
            module: "newsfeed",
            position: "bottom_bar",
            config: {
                feeds: [
                    {
                        title: "New York Times",
                        url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true
            }
        },
        {
            disabled: false,
            module: "MMM-WeatherBackground",
            config: {
                opacity: "0.3", //This is the color behind the modules so you can see them better.   Higher the number the darker the colo
                defaultCollection: "featured",
                collections: {
                    "rain": "4352572",
                    "sunny": "4352574",
                    "clouds": "4352576",
                    "cloudy": "4352576",
                    "windy": "4352575",
                    "heavy rain": "4352572",
                    "thunderstorm": "4352669",
                    "snow": "4352573",
                    "fog": "4352579",
                    "clear night": "4352568",
                    "cloudy night": "4352568",
                    "cloudy night": "4352568",
                    "cloudy night": "4352568",
                    "night rain": "4352568",
                    "night rain": "4352568",
                    "night thunderstorm": "4352568",
                    "night snow": "4352568",
                    "windy night": "4352568"
                }
            }
        }
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
