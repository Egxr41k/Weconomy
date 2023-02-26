const map = d3.select('.map');

const countriesDB = [
    new Russia(),
    new Canada(),
    new UnitedStates(),
    new China(),
    new Brazil(),
    new Australia(),
    new India(),
    new Argentina(),
    new Kazakhstan(),
    new Algeria(),
    new Congo(),
    new Greenland(),
    new SaudiArabia(),
    new Mexico(),
    new Indonesia(),
    new Sudan(),
    new Libya(),
    new Iran(),
    new Mongolia(),
    new Peru()
];

console.log(1);
const projection = d3.geoNaturalEarth1();
const pathGenerator = d3.geoPath().projection(projection);

Promise.all([
    d3.tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'),
    d3.json('https://unpkg.com/world-atlas@1.1.4/world/50m.json')
]).then(([tsvData, topoJSONdata]) => {
    
    const countryName = tsvData.reduce((accumulator, d) => {
        accumulator[d.iso_n3] = d.name;
        return accumulator;
    }, {});
  
    const countries = topojson.feature(topoJSONdata, topoJSONdata.objects.countries);
    map.selectAll('path')
    .data(countries.features)
    .enter()
    .append('path')
        .attr('class', 'country')
        .attr('d', pathGenerator)
        .on("click",  d => {
            for(country of countriesDB){
                if(countryName[d.id] == country.name) {
                    d3.select('h2.name').text(`вибрана країна: ${country.name}`)
                    d3.select('.population').text(`населення: ${country.population}`)
                    d3.select('.gdp').text(`ввп: ${country.gdp}`)
                    d3.select('.unemmploymentprc').text(`відсоток безробіття: ${country.unemmploymentprc}`)
                    d3.select('.poorprc').text(`відсоток бідності: ${country.poorprc}`)
                    d3.select('.export').text(`експорт: ${country.export}`)
                    d3.select('.import').text(`імпорт: ${country.import}`)
                    d3.select('.inflation').text(`інфляція: ${country.inflation}`)
                    
                    d3.select('.chart').selectAll("*").remove();

                    var margin = {top: 50, right: 50, bottom: 50, left: 50}, 
                        width = 800 - margin.left - margin.right,
                        height = 400 - margin.top - margin.bottom;
                        n = 10;

                    var xScale = d3.scaleLinear()
                        .domain([0, n-1])
                        .range([0, width]);

                    if(country.name === 'Libya'){
                        var yScale = d3.scaleLinear()
                            .domain([-150, 150])
                            .range([height, 0]);
                    } else{
                        var yScale = d3.scaleLinear()
                        .domain([-10, 10])
                        .range([height, 0]);
                    }

                    var line = d3.line()
                        .x(function(d, i) { return xScale(i); })
                        .y(function(d) { return yScale(d.y); })
                        .curve(d3.curveMonotoneX)

                    
                    var dataset = d3.range(n)
                    .map(function(d) {
                        return {"y": country.gdpGrouth.get(2011 + d)}
                    })

                    var svg = d3.select(".chart")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                    svg.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + height + ")")
                        .call(d3.axisBottom(d3.scaleLinear()
                        .domain([2011, 2021])
                        .range([0, width]))); 

                    svg.append("g")
                        .attr("class", "y axis")
                        .call(d3.axisLeft(yScale));

                    svg.append("path")
                        .datum(dataset)
                        .attr("class", "line")
                        .attr("d", line); 

                    svg.selectAll(".dot")
                        .data(dataset)
                        .enter().append("circle")
                        .attr("class", "dot")
                        .attr("cx", function(d, i) { return xScale(i) })
                        .attr("cy", function(d) { return yScale(d.y) })
                        .attr("r", 5);
                }
            }
        })
    .append('title')
        .text(d => countryName[d.id]);
});
