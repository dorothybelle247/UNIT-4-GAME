var random_result;
        var lost = 0;
        var win = 0;
        var previous = 0;
        
        var totalScore = 0;



        console.log(win);
        // game canvas
        // crystal images
        // $(".crystal").attr('class','red')
        // random_result=Math.floor(Math.random()*69)+30;
        // console.log(random_result);
        // $("#result").html("Random Result"+ random_result);
        // for(var i=0; i<4; i++){
        //     // random number between 1-12
        //     var random=Math.floor(Math.random()*11)+1;
        //     console.log(random);
        //     var crystal=$("<div>");
        //     crystal.attr({"class": 'crystal',
        //     "data-random":random});
        //     crystal.html(random);

        //     $(".crystals").append(crystal);
        //     console.log("me");
        // }
       // document.body.style.backgroundImage = "url('https://orig00.deviantart.net/3a90/f/2012/350/1/7/christmas_tree_gif_by_bennythebeast-d5o81hy.gif')";
        var resetAndStart = function () {
            $(".crystals").empty();
            var images = [
                'http://rs894.pbsrc.com/albums/ac148/lefkoilykoi/Christmas-Snow-Ball-10.gif~c200',
                'https://thumbs.gfycat.com/WearyVacantAkitainu-small.gif',
                'https://st2.depositphotos.com/1784806/9728/i/950/depositphotos_97285334-stock-photo-crystal-ball-in-the-winter.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYxLf3F5CHZ18I0xG54XnYecUCs_0pp7uuU45LKMP2THh6Zcu8nQ'
            ]
            random_result = Math.floor(Math.random() * 69) + 30;
            // console.log(random_result);
            $("#result").html("Random Result : " + random_result);
            for (var i = 0; i < 4; i++) {
                // random number between 1-12
                var random = Math.floor(Math.random() * 11) + 1;

                // $(".crystals").empty();
                //console.log(random);
                var crystal = $("<div>");
                crystal.attr({
                    "class": 'crystal',
                    "data-random": random
                });
                crystal.html(random);

                crystal.css({
                    "background-image": "url('" + (images[i]) + "')",
                    "background-size": "cover"
                });

                $(".crystals").append(crystal);
                //console.log("me");
            }
            $("#previous").html("Total Score" + previous);
        }
        resetAndStart();
        var reset = function () {

        }

        $(document).on('click', ".crystal", function () {
            var crystal = parseInt($(this).attr('data-random'));

           
            console.log(crystal);
            totalScore+=crystal;
            console.log(totalScore);
            if (totalScore > random_result) {
                console.log("you lost Sucker");
                console.log(lost);
                lost++;
                
                $("#lost").html(lost);
                totalScore = 0;
                resetAndStart();
                

            }

            else if (totalScore === random_result) {
                console.log("you Win")
                win++;
                $("#wins").html(win);
                totalScore = 0;
                resetAndStart();
            }


            //console.log(previous);
        });
    // 4 crystal images
    // individual crystal random number
    // new random number genarated with every single losses and win
    //expand image 
    // adding result until score is reached
    // losses start over
    // equal iss a win, increment