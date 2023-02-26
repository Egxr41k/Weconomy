class CountryBase{
    name;
    population;
    gdp;
    unemmploymentprc;
    poorprc;
    export;
    import;
    inflation;
    gdpGrputh;
}

class Russia extends CountryBase{
    name = "Russia";
    population = "145 478 097";
    gdp = "4328 млрд $";
    unemmploymentprc = "4,1%";
    poorprc = "12,3%";
    export = "332 млрд $";
    import = "296 млрд $";
    inflation = "8.9"
    gdpGrouth = new Map()
        .set(2021, 4.7)
        .set(2020, -2.7)
        .set(2019, 2.2)
        .set(2018, 2.8)
        .set(2017, 1.8)
        .set(2016, 0.2)
        .set(2015, -2.0)
        .set(2014, 0.7)
        .set(2013, 1.7)
        .set(2012, 4.0)
        .set(2011, 4.3);
}

class Canada extends CountryBase{
    name = "Canada";
    population = "38 718 60";
    gdp = "1,335 трлн $";
    unemmploymentprc = "5.8%";
    poorprc = "8,7%";
    export = "586 млрд $";
    import = "607 млрд $";
    inflation = "5,7%"
    gdpGrouth = new Map()
        .set(2021, 1.6)
        .set(2020, -5.4)
        .set(2019, 1.9)
        .set(2018, 2.4)
        .set(2017, 3.0)
        .set(2016, 1.0)
        .set(2015, 0.7)
        .set(2014, 2.9)
        .set(2013, 2.3)
        .set(2012, 1.8)
        .set(2011, 3.1);
}

class UnitedStates extends CountryBase{
    name = "United States"
    population = "328 915 700";
    gdp = "21,4 трлн $";
    unemmploymentprc = "4,0%";
    poorprc = "21,0%"
    export = "1,64 трлн $";
    import = "2,57 трлн $";
    inflation = "7,9%";
    gdpGrouth = new Map()
        .set(2021, 5.7)
        .set(2020, -3.5)
        .set(2019, 2.3)
        .set(2018, 2.9)
        .set(2017, 2.2)
        .set(2016, 2.4)
        .set(2015, 2.7)
        .set(2014, 2.8)
        .set(2013, 2.2)
        .set(2012, 2.3)
        .set(2011, 1.6);
}

class China extends CountryBase{
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

class Brazil extends CountryBase{
    name = "Brazil";
    population = "215 681 045";
    gdp = "1,73 трлн $";
    unemmploymentprc = "11,2%";
    poorprc = "13%"
    export = "209 млрд $";
    import = "166 млрд $";
    inflation = "9,7%"
    gdpGrouth = new Map()
        .set(2021, 4.6)
        .set(2020, 4.1)
        .set(2019, 1.4)
        .set(2018, 1.8)
        .set(2017, 1.3)
        .set(2016, -3.3)
        .set(2015, -3.5)
        .set(2014, 0.5)
        .set(2013, 3.0)
        .set(2012, 1.9)
        .set(2011, 4.0);
}

class Australia extends CountryBase{
    name = "Australia";
    population = "26 152 604";
    gdp = "1331 млрд $";
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
        .set(2011, 9.);
}

class India extends CountryBase{
    name = "India";
    population = "1,415 млрд";
    gdp = "2,623 трлн $";
    unemmploymentprc = "5%";
    poorprc = "75%";
    export = "291,8 млрд $";
    import = "394,43 млрд $";
    inflation = "4,4%";
    gdpGrouth = new Map()
        .set(2021, 5.4)
        .set(2020, -8.0)
        .set(2019, 4.0)
        .set(2018, 6.5)
        .set(2017, 6.8)
        .set(2016, 8.3)
        .set(2015, 8.0)
        .set(2014, 7.4)
        .set(2013, 6.4)
        .set(2012, 5.5)
        .set(2011, 5.2);
}

class Argentina extends CountryBase{
    name = "Argentina";
    population = "45 927 278";
    gdp = "383 млрд $";
    unemmploymentprc = "7%";
    poorprc = "42%";
    export = "54,88 млрд $";
    import = "42,36 млрд $";
    inflation = "4,7%";
    gdpGrouth = new Map()
        .set(2021, 10.3)
        .set(2020, -9.9)
        .set(2019, -2.1)
        .set(2018, -2.6)
        .set(2017, 2.8)
        .set(2016, -2.1)
        .set(2015, 2.7)
        .set(2014, -2.5)
        .set(2013, 2.4)
        .set(2012, -1.0)
        .set(2011, 6.0);
} 

class Kazakhstan extends CountryBase{
    name = "Kazakhstan";
    population = "19 245 793";
    gdp = "207 млрд $";
    unemmploymentprc = "7%";
    poorprc = "5,3%";
    export = "60,3 млрд $";
    import = "41,1 млрд $";
    inflation = "8,4%";
    gdpGrouth = new Map()
        .set(2021, 4.0)
        .set(2020, -2.6)
        .set(2019, 4.5)
        .set(2018, 4.1)
        .set(2017, 4.1)
        .set(2016, 1.1)
        .set(2015, 1.2)
        .set(2014, 4.2)
        .set(2013, 6.0)
        .set(2012, 4.8)
        .set(2011, 7.4);
}

class Algeria extends CountryBase{
    name = "Algeria";
    population = "45 137 119";
    gdp = "245 млрд $";
    unemmploymentprc = "11,7%";
    poorprc = "29%";
    export = "34,4 млрд $";
    import = "48,5 млрд $";
    inflation = "6,7%";
    gdpGrouth = new Map()
        .set(2021, 3.4)
        .set(2020, -5.5)
        .set(2019, 0.8)
        .set(2018, 1.2)
        .set(2017, 1.3)
        .set(2016, 3.2)
        .set(2015, 3.7)
        .set(2014, 3.8)
        .set(2013, 2.8)
        .set(2012, 3.4)
        .set(2011, 2.9);
}

class Congo extends CountryBase{
    name = "Dem. Rep. Congo";
    population = "48,9";
    gdp = "29,39 млрд $";
    unemmploymentprc = "63,9%";
    poorprc = "73,0%";
    export = "4,9 млрд $";
    import = "1,9 млрд $";
    inflation = "1,1%";
    gdpGrouth = new Map()
        .set(2021, 3.3)
        .set(2020, 0.8)
        .set(2019, 4.4)
        .set(2018, 5.8)
        .set(2017, 3.7)
        .set(2016, 2.4)
        .set(2015, 6.9)
        .set(2014, 9.5)
        .set(2013, 8.5)
        .set(2012, 7.1)
        .set(2011, 6.9);
}

class Greenland extends CountryBase{
    name = "Greenland";
    population = "56 772";
    gdp = "2,7 млрд $";
    unemmploymentprc = "5,1%";
    poorprc = "16,2%";
    export = "1,33 млрд $";
    import = "778 млн $";
    inflation = "1,9%";
    gdpGrouth = new Map()
        .set(2021, 3.4)
        .set(2020, -5.5)
        .set(2019, 0.8)
        .set(2018, 3.2)
        .set(2017, 0.5)
        .set(2016, 4.7)
        .set(2015, -2.5)
        .set(2014, 4.7)
        .set(2013, -1.3)
        .set(2012, 1.4)
        .set(2011, -0.5);
}

class SaudiArabia extends CountryBase{
    name = "Saudi Arabia";
    population = "34,8 млн";
    gdp = "700 млрд $";
    unemmploymentprc = "11,7%";
    poorprc = "18,9%";
    export = "185,7 млрд $";
    import = "131,3 млрд $";
    inflation = "2,2%";
    gdpGrouth = new Map()
        .set(2021, 9.6)
        .set(2020, -4.1)
        .set(2019, 0.3)
        .set(2018, 2.4)
        .set(2017, -0.7)
        .set(2016, 1.7)
        .set(2015, 4.1)
        .set(2014, 3.7)
        .set(2013, 2.7)
        .set(2012, 5.4)
        .set(2011, 10.0);
}

class Mexico extends CountryBase{
    name = "Mexico";
    population = "158 273 928";
    gdp = "1076 млрд $";
    unemmploymentprc = "3,0%";
    poorprc = "43,9%";
    export = "373 млрд $";
    import = "417 млрд $";
    inflation = "7,5%";
    gdpGrouth = new Map()
        .set(2021, 5.0)
        .set(2020, -5.5)
        .set(2019, 0.8)
        .set(2018, 1.2)
        .set(2017, 1.3)
        .set(2016, 3.2)
        .set(2015, 3.7)
        .set(2014, 3.8)
        .set(2013, 2.8)
        .set(2012, 3.4)
        .set(2011, 2.9);
}

class Indonesia extends CountryBase{
    name = "Indonesia";
    population = "279 081 380";
    gdp = "1058 млрд $";
    unemmploymentprc = "9.8%";
    poorprc = "8.7%";
    export = "141,6 млрд $";
    import = "163,3 млрд $";
    inflation = "6,7%";
    gdpGrouth = new Map()
        .set(2021, 5.0)
        .set(2020, -2.1)
        .set(2019, 5.0)
        .set(2018, 5.2)
        .set(2017, 5.1)
        .set(2016, 5.0)
        .set(2015, 4.9)
        .set(2014, 5.0)
        .set(2013, 5.6)
        .set(2012, 6.0)
        .set(2011, 6.2);
}

class Sudan extends CountryBase{
    name = "Sudan";
    population = "45 225 449";
    gdp = "26,11 млрд $";
    unemmploymentprc = "17,7%";
    poorprc = "79%";
    export = "3,6 млрд $";
    import = "10,5 млрд $";
    inflation = "5,3%";
    gdpGrouth = new Map()
        .set(2021, 0.9)
        .set(2020, -1.6)
        .set(2019, -1.3)
        .set(2018, 2.8)
        .set(2017, 4.7)
        .set(2016, 3.6)
        .set(2015, 4.0)
        .set(2014, 7.0)
        .set(2013, 6.8)
        .set(2012, 0.7)
        .set(2011, 0.0);
}

class Libya extends CountryBase{
    name = "Libya";
    population = "6 871 287";
    gdp = "25.4 млрд $";
    unemmploymentprc = "18,6%";
    poorprc = "7,4%";
    export = "30,4 млрд $";
    import = "13,4 млрд $";
    inflation = "3,9%";
    gdpGrouth = new Map()
        .set(2021, -60.3)
        .set(2020, -31.3)
        .set(2019, 2.5)
        .set(2018, 15.1)
        .set(2017, 26.7)
        .set(2016, -2.8)
        .set(2015, -8.9)
        .set(2014, -24.0)
        .set(2013, -13.6)
        .set(2012, 123.1)
        .set(2011, -62.1);
}

class Iran extends CountryBase{
    name = "Iran";
    population = "85 582 863";
    gdp = "203 млрд $";
    unemmploymentprc = "8.9%";
    poorprc = "14%";
    export = "96,6 млрд $";
    import = "41,2 млрд $";
    inflation = "35,6%";
    gdpGrouth = new Map()
        .set(2021, -5.5)
        .set(2020, 1.7)
        .set(2019, -6.8)
        .set(2018, -6.0)
        .set(2017, 3.8)
        .set(2016, 13.4)
        .set(2015, -1.3)
        .set(2014, 4.6)
        .set(2013, -0.2)
        .set(2012, -7.4)
        .set(2011, 2.6);
}

class Mongolia extends CountryBase{
    name = "Mongolia";
    population = "3 365 892";
    gdp = "13,14 млрд $";
    unemmploymentprc = "8,1%";
    poorprc = "27.8%";
    export = "762 млн $";
    import = "653 млн $";
    inflation = "14,4%";
    gdpGrouth = new Map()
        .set(2021, 1.4)
        .set(2020, -5.3)
        .set(2019, 5.2)
        .set(2018, 7.2)
        .set(2017, 5.3)
        .set(2016, 1.2)
        .set(2015, 2.4)
        .set(2014, 7.9)
        .set(2013, 11.6)
        .set(2012, 12.3)
        .set(2011, 17.3);
}

class Peru extends CountryBase{
    name = "Peru";
    population = "33 611 856";
    gdp = "202 млрд $";
    unemmploymentprc = "9,4%";
    poorprc = "30.1%";
    export = "38,7 млрд $";
    import = "50,8 млрд $";
    inflation = "6,8%";
    gdpGrouth = new Map()
        .set(2021, "3,4")
        .set(2020, 11.1)
        .set(2019, 2.2)
        .set(2018, 4.0)
        .set(2017, 2.5)
        .set(2016, 4.0)
        .set(2015, 3.3)
        .set(2014, 2.4)
        .set(2013, 5.9)
        .set(2012, 6.1)
        .set(2011, 6.3);
}