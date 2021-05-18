function changeText(text)
        {
            var display = document.getElementById('details');
            display.innerHTML = "";
            display.innerHTML = text;
        }
              
        function defaultText()
        {
            var display = document.getElementById('details');
            display.innerHTML = "";
            display.innerHTML = "here are all the skills and strengths I have developed in the last two years.";
        }
