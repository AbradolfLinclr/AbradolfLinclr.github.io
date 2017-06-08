$(document).ready(function() {
    $('#searchTable').DataTable();

  var intro = introJs();
   intro.setOptions({
            steps: [
              { 
                intro: "Hello! </b> Welcome to my tutorial!"
              },
              { 
                intro: "I know most of these functions are very basic, but this wasn't for you, it was experience for me."
              },
               { 
                intro: "Couldn't tell you why this blue box is here. Forget that, Let's Begin!"
              },
              {
                element: '#step1',
                intro: "This would be the upper Nav-Bar.",
                position: 'bottom-middle-aligned'
              },
              {
                element: '#step2',
                intro: "I should probably update the date, huh?",
                position: 'bottom-left-aligned'
              },
              {
                element: '#step3',
                intro: 'This would be the lower Nav-Bar.',
                position: 'bottom-middle-aligned'
              },
              {
                element: '#step4',
                intro: "Drop down combo-box for FY options.",
                position: 'bottom-middle-aligned'
              },
              {
                element: '#step5',
                intro: 'Drop down combo-box for Program options.'
              },
                {
                element: '#step6',
                intro: "Drop down combo-box for Peo options.",
                position: 'bottom'
              },
                {
                element: '#step7',
                intro: "Radio button for Summary options.",
                position: 'bottom'
              },
                {
                element: '#step8',
                intro: "Radio button for Phase II options.",
                position: 'bottom'
              },
                {
                element: '#step9',
                intro: "Home button, clicking it won't do anything. You're already home!",
                position: 'bottom'
              },
                {
                element: '#step10',
                intro: "Right Dashboard with Print Option! Be sure to check out each Graph!",
                position: 'left'
              },
               {
                element: '#step11',
                intro: "Overall Topic Allocation Chart! Very Interactive! Go ahead, click it!",
                position: 'left'
              },
              {
                element: '#step12',
                intro: "SBIR Topic Allocations by Fiscal Year! Also Interactive! Enjoy!\n I had some sizing issues, cut off the header. No Biggie. ",
                position: 'left'
              },
              {
                element: '#step13',
                intro: 'Overall Phase III Transition Rate! You guessed it! Interactive as well! Unfortunately it got cut off as well :(',
                position: 'left'
              },
              {
                element: '#step14',
                intro: "You're going to love this function! Search by PEO type, if I had more time it would be searchable through any category!",
                position: 'right'
              },
              {
                element: '#step15',
                intro: 'Does anyone ever read this stuff?',
                position: 'right'
              },
                {
                element: '#step16',
                intro: "Summary Table! Ch-Ch-Check it out!",
                position: 'right'
              },
                {
                element: '#step17',
                intro: "Bottom Dashboard, Sorry you can look but you can't Print! Check out each interactive graph! Another sizing issue wahh.",
                position: 'top'
              },
                {
                element: '#step18',
                intro: "Phase I, II, II.5 Awards - ALL PEO's! This guy was cool to make. 0-7 Color Option, unfortunately didn't have time to make a legend for it! Also some title/background color issues. Poke away!",
                position: 'top'
              },
                {
                element: '#step19',
                intro: "Phase I, II, II.5 Contract Counts! You know what to do! Another sizing issue...",
                position: 'top'
              },
                {
                element: '#step20',
                intro: "Return on Investment Percent by Solicitation Year - ALL! Don't touch me! Not sure why the responsive feature stopped working. sizing...",
                position: 'top'
              },
                  {
                element: '#step21',
                intro: "Print the right dashboard! Don't try it just yet, haven't made a click function for it!",
                position: 'top'
              },
                { 
                intro: "This project was a lot of fun! Hopefully, I get to go back to it and fix a couple of these features. Would love to add a cvs file reading feature for current data which all the charts/tables read from! ",
                scrollToElement: true
              },
              { 
                intro: "Hope you enjoyed it!"
              },
            ]
          });

          intro.start();

    
} );

var PEO_UW = [2, 7, 8, 11, 11, 11, 6, 4, 3, 2, 8];
var PEO_T = [15, 4, 10, 15, 20, 16, 12, 13, 6, 6, 8];
var PEO_A = [20, 26, 28, 38, 30, 20, 18, 9, 10, 11, 15];
var JSF = [10, 28, 24, 18, 21, 11, 10, 10, 8, 6, 9];
var CTO = [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2];
var AIR = [8, 10, 10, 4, 3, 2, 4, 3, 2, 3, 1];
var xAxis = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"]


// SBIR TOPIC ALLOCATIONS BY FISCAL YEAR        BAR GRAPH
var ctx = document.getElementById("bar");
var myChart = new Chart(ctx, {
   type: 'bar',
    data: {
        labels: xAxis,
        datasets: [
        {	
            label: 'PEO (U & W)',
            data: PEO_UW,
						backgroundColor: "rgba(255, 255, 0, 0.7)",
						hoverBackgroundColor: "rgba(255, 255, 0, 0.7)",
						hoverBorderWidth: 2,
						hoverBorderColor: 'lightgrey'
        },
        {
            label: 'PEO (T)',
            data: PEO_T,
						backgroundColor: "rgba(225, 58, 55, 0.7)",
						hoverBackgroundColor: "rgba(225, 58, 55, 0.7)",
						hoverBorderWidth: 2,
						hoverBorderColor: 'lightgrey'
        },
          {
            label: 'PEO (A)',
            data: PEO_A,
						backgroundColor: "rgba(0, 0, 128, 0.7)",
						hoverBackgroundColor: "rgba(0, 0, 128, 0.7)",
						hoverBorderWidth: 2,
						hoverBorderColor: 'lightgrey'
        },
          {
            label: 'JSF',
            data: JSF,
						backgroundColor: "rgba(128, 0, 0, 0.7)",
						hoverBackgroundColor: "rgba(128, 0, 0, 0.7)",
						hoverBorderWidth: 2,
						hoverBorderColor: 'lightgrey'
        },
          {
            label: '4.0T CTO',
            data: CTO,
						backgroundColor: "rgba(128, 128, 128, 0.7)",
						hoverBackgroundColor: "rgba(128, 128, 128, 0.7)",
						hoverBorderWidth: 2,
						hoverBorderColor: 'lightgrey'
        },
          {
            label: 'AIR 1.0',
            data: AIR,
						backgroundColor: "rgba(0, 255, 255, 0.7)",
						hoverBackgroundColor: "rgba(0, 255, 255, 0.7)",
						hoverBorderWidth: 2,
						hoverBorderColor: 'lightgrey'
        },
        ]//DATA SETS
    },//DATA
    options: {
      layout: {
      padding: 100,
    },
      title: 
      {
        fontSize: 30,
        fontColor: "rgba(0,0,102, 1)",
        display: true,
        text: "SBIR Topic Allocations by Fiscal Year"
      },
      tooltips: 
      {
          position:'nearest',
					mode: 'label', 
      }, 
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{ 
          stacked: true, 
          gridLines: { display: false },
        }],
        yAxes: [{ 
          stacked: true, 
          ticks: {
            callback: function(value) { return (value + ".0"); },
          }, 
        }]
      }, // SCALES
      legend: 
      {
        display: true,
        position: 'right'}
    } // OPTIONS
}); // BAR CHART



// OVERALL TOPIC ALLOCATION                LINE GRAPH 1

var SBIR = [70, 72, 86, 88, 91, 65, 62, 38, 39, 42, 46]
var STTR = [13, 12, 11, 12, 15, 11, 8, 9, 10, 9, 7]
var ctx = document.getElementById("line1").getContext("2d");
var lineChart = new Chart(ctx, {
   type: 'line',
    data: {
        labels: xAxis,
        datasets: 
      [{
        label: "SBIR",
        data: SBIR,
        borderColor: "rgba(0,0,128, 1)",
        backgroundColor: "rgba(0,0,128, 1)",
        pointBackgroundColor: "rgba(0,0,128, 1)",
        pointBorderColor: "rgba(0,0,128,1)",
        showline: true,
        borderWidth: 1,
        fill: false,
        lineTension: .1
      },
       {    
         label: "STTR",
         data: STTR,
         borderColor: "rgba(255,0,0, 1)",
         backgroundColor: "rgba(255,0,0, 1)",
         pointBackgroundColor: "rgba(255,0,0, 1)",
         pointBorderColor: "rgba(255,0,0, 1)",
         showline: true,
         borderWidth: 1,
         fill: false,
         lineTension: .1
       }]//DATA SET
    },//DATA
  options : 
  {
    layout: 
    {
      padding: 100,
    },
    title: 
    {
      fontSize: 30,
      fontColor: "rgba(0,0,102, 1)",
      display: true,
      text: "Overall Topic Allocation"
    },
    legend: 
    {
      padding: 30,
      display: true,
      position: 'right',
    },
    tooltips: 
    {
      position: 'nearest',
					mode: 'label',
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: 
    {
      xAxes: 
      [{   
        gridLines: { display: false },
      }],
      yAxes: 
      [{
        gridLines: {display:true},
        ticks:
        { 
          min: 0,
          max: 100,
          fixedStepSize: 10
        }
      }],//Y AXES
  }//SCALES
}//OPTIONS
}); //LINE GRAPH



// LINE CHART 2

var xAxis1 = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];
var ctx = document.getElementById("line2").getContext("2d");
var lineChart2 = new Chart(ctx, {
   type: 'line',
    data: {
        labels: xAxis1,
        datasets: 
      [{
        label: "Phase II.5",
        data: [90, 72, 86, 88, 91, 65, 62, 38, 39, 42, 46],
        borderColor: "rgba(0,0,128, 1)",
        backgroundColor: "rgba(0,0,128, 1)",
        pointBackgroundColor: "rgba(0,0,128, 1)",
        pointBorderColor: "rgba(0,0,128,1)",
        showline: true,
        borderWidth: 1,
        fill: false,
        lineTension: .1
      },
       {
         label: "Phase II",
         data: [13, 12, 11, 12, 15, 11, 8, 9, 10, 9, 7],
         borderColor: "rgba(255,0,0, 1)",
         backgroundColor: "rgba(255,0,0, 1)",
         pointBackgroundColor: "rgba(255,0,0, 1)",
         pointBorderColor: "rgba(255,0,0, 1)",
         showline: true,
         borderWidth: 1,
         fill: false,
         lineTension: .1
       }]//DATA SET
    }, //DATA
  options : 
  {
    layout: 
    {
      padding: 100,
    },
    title: 
    {
      fontSize: 30,
      fontColor: "rgba(0,0,102, 1)",
      display: true,
      text: "Overall Phase III Transition Rate\n"
      + "(%PII -> PIII or PII.5 -> PIII)"
    },
    legend: 
    {
      padding: 30,
      display: true,
      position: 'right',
    },
    tooltips: 
    {
      position: 'nearest',
					mode: 'label',
      callbacks: 
      { 
        label: function(tooltipItems, data)
        { 
          return data.datasets[tooltipItems.datasetIndex].label +  " " +  tooltipItems.yLabel + ' %';
        }// FUNCTION
      }// CALLBACK
         },// TOOLTIPS
    responsive: true,
    maintainAspectRatio: false,
    scales: 
    {
      xAxes: 
      [{ 
        gridLines: { display: false },
      }],
      yAxes: 
      [{
        gridLines: {display:true},
        ticks: 
        {
          min: 0,
          max: 100,
          fixedStepSize: 20,
          callback:  function(value, index, values) 
          {
                        return value + "%";
          }
        }//TICKS
      }],//YAXIS
  }//SCALES
}//OPTIONS
});//CHART



//MULTIPLE BAR CHART

var xAxis = ["1.0","JSF","OTHER","PEO (A)"," PEO (T)","PEO (UW)"]
var ctx = document.getElementById("multipleBar");
var myChart = new Chart(ctx, {
   type: 'bar',
   data: {
        labels: xAxis,
        datasets: 
     [{
            label: "Phase I",
            backgroundColor: "#126180",
            data: [200,650,800,960, 620, 400]
        },
        {
            label: "Phase II",
            backgroundColor: "#AF002A",
            data: [130,220,350,350, 220, 180]
        },
        {
            label: "Phase II.5",
            backgroundColor: "#B5A642",
            data: [40,40,40,80, 100, 120]
        }
      ],//DATA SETS
   },//DATA
  options: 
  {
    layout: 
    {
      padding: 100,
    },
    title: 
    {
      fontSize: 30,
      fontColor: "rgba(0,0,102, 1)",
      display: true,
      text: "Phase I, II, and II.5 Contract Counts - ALL PEOs"
    },
    tooltips: 
    {
      position:'nearest',
      mode: 'label',
    },
    responsive: true,
    maintainAspectRatio: false,
    scales:
    {
      xAxes: 
      [{ 
        gridLines: { display: false },
      }],
      yAxes: 
      [{ 
        ticks: 
        {
          min: 0,
          max: 1200,
          fixedStepSize: 200,
          stepSize: 100,
          callback: function(value) { return (value); },
        }, //TICKS  
      }], //YAXES
    }, // SCALES
    legend: {display: true,
                position: 'right'}
    }//OPTIONS
   });//CHART



// RETURN ON INVESTMENT PERCENTAGE          LINE CHART 3

var xAxis2 = ["2006","2007","2008","2009","2010","2011","2012","2013","2014"]
var ctx = document.getElementById("line3").getContext("2d");
var lineChart2 = new Chart(ctx, {
   type: 'line',
    data: 
  {  
    labels: xAxis2,
    datasets: 
    [{
              label: "1.0",
              data: [0, 36, 28, 4, 9, 6, 3, 0, 0],
              borderColor: "#006A4E",
              backgroundColor: "#006A4E",
              pointBackgroundColor: "#006A4E",
              pointBorderColor: "#006A4E",
              showline: true,
              borderWidth: 1,
              fill: false,
              lineTension: .1
            },
            {
                label: "JSF",
                data: [0, 10, 6, 2, 0, 0, 0, 0, 0],
              borderColor: "	#1DACD6",
              backgroundColor: "	#1DACD6",
              pointBackgroundColor: "	#1DACD6",
              pointBorderColor: "	#1DACD6",
              showline: true,
              borderWidth: 1,
              fill: false,
              lineTension: .1
            },
          {
              label: "PEO (A)",
              data: [36, 6, 0, 12, 18, 5, 10, 0, 2],
              borderColor: "	#79443B",
              backgroundColor: "	#79443B",
              pointBackgroundColor: "	#79443B",
              pointBorderColor: "	#79443B",
              showline: true,
              borderWidth: 1,
              fill: false,
              lineTension: .1
            },
          {
              label: "PEO (T)",
              data: [19, 0, 12, 1, 7, 9, 21, 19, 0],
              borderColor: "	#B5A642",
              backgroundColor: "	#B5A642",
              pointBackgroundColor: "	#B5A642",
              pointBorderColor: "	#B5A642",
              showline: true,
              borderWidth: 1,
              fill: false,
              lineTension: .1
            },
          {
              label: "PEO (UW)",
              data: [62, 22, 9, 68, 13, 10, 7, 4, 41],
              borderColor: "#062A78",
              backgroundColor: "#062A78",
              pointBackgroundColor: "#062A78",
              pointBorderColor: "#062A78",
              showline: true,
              borderWidth: 1,
              fill: false,
              lineTension: .1
            },
        ]//DATA SET
    }, //DATA
  options : 
  {
    layout: 
    {
      padding: 100,
    },
    title: 
    {
      fontSize: 30,
      fontColor: "rgba(0,0,102, 1)",
      display: true,
      text: "Return on Investment Percent by Solicitation Year - ALL"
    },
    legend: 
    {
      padding: 30,
      display: true,
      position: 'right',
    },
    tooltips: 
    {
      position: 'nearest',
					mode: 'label',
    },
    responsive: true,
    maintainAspectRatio: false,
    scales:
    { 
      xAxes:
      [{   
        gridLines: { display: false },
      }],
      yAxes: 
      [{
        gridLines: {display:true},
        ticks: 
        {
          min: 0,
          max: 80,
          fixedStepSize: 10,
          callback: 
          function(value, index, values) 
          {
                        return value;
          }
        }//TICKS
      }],//YAXES
  }//SCALES
}//OPTIONS
});//GRAPH



//  MAP CHART

google.charts.load('current', {'packages':['geochart']});
      google.charts.setOnLoadCallback(drawRegionsMap);
      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
['State', 'Stats'],
['US-AL',0 ],
['US-AK', 1],
['US-AZ',2 ],
['US-AR',3 ],
['US-CA',4 ],
['US-CO',5 ],
['US-CT',6 ],
['US-DE',7],
['US-DC', 8],
['US-FL', 0],
['US-GA',1 ],
['US-HI',2 ],
['US-ID',3 ],
['US-IL',4 ],
['US-IN',5 ],
['US-IA',6 ],
['US-KS',7 ],
['US-KY',8 ],
['US-LA',0 ],
['US-ME',1 ],
['US-MT',2 ],
['US-NE',3 ],
['US-NV',4 ],
['US-NH',5 ],
['US-NJ',6 ],
['US-NM',7 ],
['US-NY',3 ],
['US-NC',1 ],
['US-ND',2 ],
['US-OH',3 ],
['US-OK',4 ],
['US-OR',1 ],
['US-MD',5 ],
['US-MA',40 ],
['US-MI',1 ],
['US-MN',1 ],
['US-MS',1 ],
['US-MO',1 ],
['US-PA',1 ],
['US-RI',1 ],
['US-SC',1 ],
['US-SD',14],
['US-TN',1 ],
['US-TX',1 ],
['US-UT',1 ],
['US-VT',1 ],
['US-VA',14 ],
['US-WA',1 ],
['US-WV',1 ],
['US-WI',15 ],
['US-WY',1 ]
        ]);//DATA
        var options = {
          backgroundColor: {
            //ERROR CODE?
          },
          width: 400, 
          height: 347,
          region: "US", 
          resolution: "provinces",
          colorAxis:     
          {
            colors: ['grey', 'green', 'purple', 'blue','red','teal', 'brown','yellow', 'white' ],
            minValue: 0,
            maxValue:7
          },        
        }//OPTIONS
          
  var geochart = new google.visualization.GeoChart(document.getElementById('MAP'));
  geochart.draw(data, options);
      }//DRAW REGIONS MAP


