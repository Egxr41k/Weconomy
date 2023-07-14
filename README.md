# Weconomy
Single Page application that allows to discover the economic stats of a different countries, based on code from [this](https://www.youtube.com/watch?v=9ZB1EgaJnBU&ab_channel=CurranKelleher) video

Now only the 20 largest countries(by area) are available.

##!!comercical project!!
![Preview](https://github.com/Egxr41k/Weconomy/blob/master/sample.png?raw=true)

All information is taken from open sources and is contained in 20 classes, one for each country:

```js
class China extends CountryBase {
    name = "China"
    population = "1,402 млрд";
    gdp = "18 трлн $";
    unemmploymentprc = "4,2%";
    poorprc = "6,1%";
    export = "2,011 трлн $";
    import = "1,437 трлн $";
    inflation = "2,3%";
    gdpGrouth = new Map()
        .set(2021, 8.1)
        .set(2020, 2.3)
        .set(2019, 5.9)
        .set(2018, 6.7)
        .set(2017, 6.9)
        .set(2016, 6.8)
        .set(2015, 7.0)
        .set(2014, 7.4)
        .set(2013, 7.8)
        .set(2012, 7.9)
        .set(2011, 9.6);
}
```
###@Egxr41k 2022

