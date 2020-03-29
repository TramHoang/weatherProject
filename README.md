# Rationale

For this assignment, I created a weather application online. The application will show the date, temperature, wind speed, humidity percentage as well as cloud cover at the time. For the development process, most of the code on the project is based on the video coding from Canvas. Firstly, I used API from dark sky to retrieve the information about the weather. 
```html
    // my API key
    var key = '85221f087641994187e373440c459733';

    //API call for the information
    var url = 'https://api.darksky.net/forecast/' + key + '/-35.2809,149.1300?units=auto&callback=?';
```
Then, I used the Javascript, particularly JQuery, to perform the functions for the website. 
```html
    //import JQuery
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
```
During this process, the icon function was the most problematic to me. I used [Skycon](https://darkskyapp.github.io/skycons/) for the icon. It took me time to write the code and do the research, but it still did not work. Luckily, Ben helped to fix it and the icon now works fine. The other function, I managed to do it based on the video instruction.

After sorting out all the functions that I needed to make the website working, I went to the designing phase. One of the questions in this assignment is how to design an interface with culture, aesthetics and experience. I researched and tried to brainstorm ideas of designing the interface. I came across to some of the websites such as [weatherzone application](http://apps.weatherzone.com.au/), [darksky](https://darksky.net/forecast/40.7127,-74.0059/us12/en)
during this process. I identified 4 essential information normally users want to know are the temperature, wind speed, humidity and cloud cover. As discussed above, I had tried to make these functions work first, then I fix the design later. I had been inspired by some of the sample and created my final design, as shown on the application.
>Design sample
![image of sample](https://miro.medium.com/max/1400/1*mCqi1iwRMne6lkR-y5BAXw.gif)
![image sample 2](https://d540vms5r2s2d.cloudfront.net/mad/uploads/mad_blog_5d50e696edd2c1565582998.png)

There is a hero image on the website that influenced the central theme for the application. The yellow colour creates the feel of a warm and colourful vibe. On top of the image will show the date and a small button box to let the user know that all the information is up to date. The icon and the temperature are located on the left corner of the image. The reason I did this because it creates neatly looking compare to when I put the icon and degree in the centre image. Under the image, I divided into three sections to display the wind speed, humidity and summary. I also put a small icon on each section, so the user can know what the number is displaying for.
In this stage, I used the framework from the [Skeleton](http://getskeleton.com/). It helps me with the responsive function of the website. Therefore, if the size is changed,  it will not affect much the overall order of the information displaying, and keep the consistence.
I also add my stylesheet CSS to adjust the hero image size, as well as the table under it, to display the information of wind speed, humidity and summary nicely.

In conclusion, I have a chance to apply all the knowledge that I learned to do the project, such as JQuery and revise the design theory. There are still some functions I want to add to the application, for example, showing the list of hourly or make it more interactive to the user. Overall I satisfied with the outcome.
