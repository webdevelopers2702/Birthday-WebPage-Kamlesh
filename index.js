memory_track = 0;
track=1;
option_tracker = 0;

function displayCake() 
{
    var disp_cake = document.getElementById("cake1");
    disp_cake.className = disp_cake.className.replace(/\bdisplay-none\b/g, "cake");

    var start_btn = document.getElementById("start-btn");
    start_btn.classList.add("display-none");

    var start_btn2 = document.getElementById("start-btn2");
    start_btn2.classList.remove("display-none");

    var body = document.getElementById("body-init");
    body.classList.add("body-start");

    var bulbs_off = document.getElementById("bulbs-off");
    bulbs_off.classList.remove("display-none");
    bulbs_off.classList.add("bulb-container");

    var bulbs_on = document.getElementById("bulbs-on");
    bulbs_on.classList.remove("display-none");
    bulbs_on.classList.add("bulb-container");
}

function blowCandle() 
{
    var audio = document.getElementById("background-audio");
    audio.play();

    var body = document.getElementById("body-init");
    body.classList.remove("body-start");
    body.classList.add("body-active");

    var disp_cake = document.getElementById("cake1");
    disp_cake.classList.add("display-none");

    var start_btn = document.getElementById("start-btn2");
    start_btn.classList.add("display-none");

    var disp_balloons = document.getElementById("balloons");
    balloons.className = balloons.className.replace(/\bdisplay-none\b/g, "balloon-panel");

    var disp_sidemenu = document.getElementById("side-menu");
    disp_sidemenu.className = disp_sidemenu.className.replace(/\bdisplay-none\b/g, "sidebar");

    var title = document.getElementById("title-container");
    title.className = title.className.replace(/\bdisplay-none\b/g, "title-container");

    var slideshow = document.getElementById("photo-slideshow");
    slideshow.className = slideshow.className.replace(/\bdisplay-none\b/g, "");

    var envelope = document.getElementById("envelope");
    envelope.classList.remove("display-none");

    var message_container = document.getElementById("message_container");
    message_container.classList.add("messages");
    message_container.classList.remove("display-none");

    var messages = document.getElementById("messages");
    messages.classList.add("change-content");
    messages.classList.remove("display-none");

    option_tracker = 1;
}

function toggleSideBar() 
{
    document.getElementById("side-menu").classList.toggle("active");
}

function showHome() 
{
    option_tracker = 1;

    var audio = document.getElementById("background-audio");
    audio.play();

    var quiz = document.getElementById("quiz");
    quiz.classList.add("display-none");

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz1.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz2.classList.add("display-none");

    var quiz4 = document.getElementById("quiz4");
    quiz4.classList.add("display-none");

    var quiz5 = document.getElementById("quiz5");
    quiz5.classList.add("display-none");

    var quiz6 = document.getElementById("quiz6");
    quiz6.classList.add("display-none");

    var quiz7 = document.getElementById("quiz7");
    quiz7.classList.add("display-none");

    var quiz8 = document.getElementById("quiz8");
    quiz8.classList.add("display-none");

    var quiz9 = document.getElementById("quiz9");
    quiz9.classList.add("display-none");

    var quiz10 = document.getElementById("quiz10");
    quiz10.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")

    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    var video3 = document.getElementById("video3");
    var video4 = document.getElementById("video4");
    var video5 = document.getElementById("video5");
    var video6 = document.getElementById("video6");
    var video7 = document.getElementById("video7");
    var video8 = document.getElementById("video8");
    var video9 = document.getElementById("video");
    var video10 = document.getElementById("video10");

    video1.pause();
    video2.pause();
    video3.pause();
    video4.pause();
    video5.pause();
    video6.pause();
    video7.pause();
    video8.pause();
    video9.pause();
    video10.pause();

    var slideshow = document.getElementById("photo-slideshow");
    slideshow.classList.remove("display-none");

    var envelope = document.getElementById("envelope");
    envelope.classList.remove("display-none");

    var bulbs_off = document.getElementById("bulbs-off");
    bulbs_off.classList.remove("display-none");
    bulbs_off.classList.add("bulb-container");

    var bulbs_on = document.getElementById("bulbs-on");
    bulbs_on.classList.remove("display-none");
    bulbs_on.classList.add("bulb-container");

    var title_position = document.getElementById("title-container");
    title_position.classList.remove("title-container-hide-bulbs");
    title_position.classList.add("title-container");

    toggleSideBar();
}

function showQuizes() 
{
    option_tracker = 3;

    var background_audio = document.getElementById("memory-background-audio");
    
    var slideshow = document.getElementById("photo-slideshow");
    slideshow.classList.add("display-none");

    var envelope = document.getElementById("envelope");
    envelope.classList.add("display-none");

    var quiz = document.getElementById("quiz");
    quiz.classList.remove("display-none");

    var video1 = document.getElementById("video1");
    video1.classList.add("display-none");

    var video2 = document.getElementById("video2");
    video2.classList.add("display-none");

    var video3 = document.getElementById("video3");
    video3.classList.add("display-none");

    var video4 = document.getElementById("video4");
    video4.classList.add("display-none");

    var video5 = document.getElementById("video5");
    video4.classList.add("display-none");

    var video6 = document.getElementById("video6");
    video6.classList.add("display-none");

    var video7 = document.getElementById("video7");
    video7.classList.add("display-none");

    var video8 = document.getElementById("video8");
    video8.classList.add("display-none");

    var video9 = document.getElementById("video9");
    video9.classList.add("display-none");

    var video10 = document.getElementById("video10");
    video10.classList.add("display-none");

    var bulbs_off = document.getElementById("bulbs-off");
    bulbs_off.classList.add("display-none");
    bulbs_off.classList.remove("bulb-container");

    var bulbs_on = document.getElementById("bulbs-on");
    bulbs_on.classList.add("display-none");
    bulbs_on.classList.remove("bulb-container");

    var title_position = document.getElementById("title-container");
    title_position.classList.add("title-container-hide-bulbs");
    title_position.classList.remove("title-container");

    toggleSideBar();

    showQuiz1();
}

function showQuiz1() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.remove("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.add("display-none");

    var quiz4 = document.getElementById("quiz4");
    quiz4.classList.add("display-none");

    var quiz5 = document.getElementById("quiz5");
    quiz5.classList.add("display-none");

    var quiz6 = document.getElementById("quiz6");
    quiz6.classList.add("display-none");

    var quiz7 = document.getElementById("quiz7");
    quiz7.classList.add("display-none");
    
    var quiz8= document.getElementById("quiz8");
    quiz8.classList.add("display-none");
    
    var quiz9 = document.getElementById("quiz9");
    quiz9.classList.add("display-none");

    var quiz10 = document.getElementById("quiz10");
    quiz10.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")
}

function showQuiz2() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.remove("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.add("display-none");

    var quiz4 = document.getElementById("quiz4");
    quiz4.classList.add("display-none");

    var quiz5 = document.getElementById("quiz5");
    quiz5.classList.add("display-none");

    var quiz6 = document.getElementById("quiz6");
    quiz6.classList.add("display-none");

    var quiz7 = document.getElementById("quiz7");
    quiz7.classList.add("display-none");
    
    var quiz8= document.getElementById("quiz8");
    quiz8.classList.add("display-none");
    
    var quiz9 = document.getElementById("quiz9");
    quiz9.classList.add("display-none");

    var quiz10 = document.getElementById("quiz10");
    quiz10.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")
}

function showQuiz3() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.remove("display-none");

    var quiz4 = document.getElementById("quiz4");
    quiz4.classList.add("display-none");

    var quiz5 = document.getElementById("quiz5");
    quiz5.classList.add("display-none");

    var quiz6 = document.getElementById("quiz6");
    quiz6.classList.add("display-none");

    var quiz7 = document.getElementById("quiz7");
    quiz7.classList.add("display-none");
    
    var quiz8= document.getElementById("quiz8");
    quiz8.classList.add("display-none");
    
    var quiz9 = document.getElementById("quiz9");
    quiz9.classList.add("display-none");

    var quiz10 = document.getElementById("quiz10");
    quiz10.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")
}

function showQuiz4() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.add("display-none");

    var quiz4 = document.getElementById("quiz4");
    quiz4.classList.remove("display-none");

    var quiz5 = document.getElementById("quiz5");
    quiz5.classList.add("display-none");

    var quiz6 = document.getElementById("quiz6");
    quiz6.classList.add("display-none");

    var quiz7 = document.getElementById("quiz7");
    quiz7.classList.add("display-none");
    
    var quiz8= document.getElementById("quiz8");
    quiz8.classList.add("display-none");
    
    var quiz9 = document.getElementById("quiz9");
    quiz9.classList.add("display-none");

    var quiz10 = document.getElementById("quiz10");
    quiz10.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")
}

function showQuiz5() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.add("display-none");

    var quiz4 = document.getElementById("quiz4");
    quiz4.classList.add("display-none");

    var quiz5 = document.getElementById("quiz5");
    quiz5.classList.remove("display-none");

    var quiz6 = document.getElementById("quiz6");
    quiz6.classList.add("display-none");

    var quiz7 = document.getElementById("quiz7");
    quiz7.classList.add("display-none");
    
    var quiz8= document.getElementById("quiz8");
    quiz8.classList.add("display-none");
    
    var quiz9 = document.getElementById("quiz9");
    quiz9.classList.add("display-none");

    var quiz10 = document.getElementById("quiz10");
    quiz10.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")
}

function showQuiz6() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.add("display-none");

    var quiz4 = document.getElementById("quiz4");
    quiz4.classList.add("display-none");

    var quiz5 = document.getElementById("quiz5");
    quiz5.classList.add("display-none");

    var quiz6 = document.getElementById("quiz6");
    quiz6.classList.remove("display-none");

    var quiz7 = document.getElementById("quiz7");
    quiz7.classList.add("display-none");
    
    var quiz8= document.getElementById("quiz8");
    quiz8.classList.add("display-none");
    
    var quiz9 = document.getElementById("quiz9");
    quiz9.classList.add("display-none");

    var quiz10 = document.getElementById("quiz10");
    quiz10.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")
}

function showQuiz7() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.add("display-none");

    var quiz4 = document.getElementById("quiz4");
    quiz4.classList.add("display-none");

    var quiz5 = document.getElementById("quiz5");
    quiz5.classList.add("display-none");

    var quiz6 = document.getElementById("quiz6");
    quiz6.classList.add("display-none");

    var quiz7 = document.getElementById("quiz7");
    quiz7.classList.remove("display-none");
    
    var quiz8= document.getElementById("quiz8");
    quiz8.classList.add("display-none");
    
    var quiz9 = document.getElementById("quiz9");
    quiz9.classList.add("display-none");

    var quiz10 = document.getElementById("quiz10");
    quiz10.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")
}

function showQuiz8() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.add("display-none");

    var quiz4 = document.getElementById("quiz4");
    quiz4.classList.add("display-none");

    var quiz5 = document.getElementById("quiz5");
    quiz5.classList.add("display-none");

    var quiz6 = document.getElementById("quiz6");
    quiz6.classList.add("display-none");

    var quiz7 = document.getElementById("quiz7");
    quiz7.classList.add("display-none");
    
    var quiz8= document.getElementById("quiz8");
    quiz8.classList.remove("display-none");
    
    var quiz9 = document.getElementById("quiz9");
    quiz9.classList.add("display-none");

    var quiz10 = document.getElementById("quiz10");
    quiz10.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")
}

function showQuiz9() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.add("display-none");

    var quiz4 = document.getElementById("quiz4");
    quiz4.classList.add("display-none");

    var quiz5 = document.getElementById("quiz5");
    quiz5.classList.add("display-none");

    var quiz6 = document.getElementById("quiz6");
    quiz6.classList.add("display-none");

    var quiz7 = document.getElementById("quiz7");
    quiz7.classList.add("display-none");
    
    var quiz8= document.getElementById("quiz8");
    quiz8.classList.add("display-none");
    
    var quiz9 = document.getElementById("quiz9");
    quiz9.classList.remove("display-none");

    var quiz10 = document.getElementById("quiz10");
    quiz10.classList.add("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")
}

function showQuiz10() 
{
    audio = document.getElementById("background-audio");
    audio.play();

    var quiz1 = document.getElementById("quiz1");
    quiz1.classList.add("display-none");

    var quiz2 = document.getElementById("quiz2");
    quiz2.classList.add("display-none");

    var quiz3 = document.getElementById("quiz3");
    quiz3.classList.add("display-none");

    var quiz4 = document.getElementById("quiz4");
    quiz4.classList.add("display-none");

    var quiz5 = document.getElementById("quiz5");
    quiz5.classList.add("display-none");

    var quiz6 = document.getElementById("quiz6");
    quiz6.classList.add("display-none");

    var quiz7 = document.getElementById("quiz7");
    quiz7.classList.add("display-none");
    
    var quiz8= document.getElementById("quiz8");
    quiz8.classList.add("display-none");
    
    var quiz9 = document.getElementById("quiz9");
    quiz9.classList.add("display-none");

    var quiz10 = document.getElementById("quiz10");
    quiz10.classList.remove("display-none");

    var post_quiz = document.getElementById("post-quiz");
    post_quiz.classList.add("display-none")
}

function checkQuiz1() 
{
    answers = "2004"
    var submit = document.getElementById("submit-quiz1");
    var video = document.getElementById("video1");
    var input_value1 = document.getElementById("quiz-textbox1_1").value;

    submit.addEventListener("click", checkAnswer(1, input_value1, answers, video));
    video.addEventListener("ended", closeFullScreen);
    video.addEventListener("ended", showQuiz2, false);
    video.addEventListener("ended", removeVideoAttribute(video), false);   
}

function checkQuiz2() 
{
    answers = "DHANASHREE"
    var submit = document.getElementById("submit-quiz2");
    var video = document.getElementById("video2");
    var input_value1 = document.getElementById("quiz-textbox2_1").value;

    submit.addEventListener("click", checkAnswer(2, input_value1, answers, video));
    video.addEventListener("ended", closeFullScreen);
    video.addEventListener("ended", showQuiz3, false);
    video.addEventListener("ended", removeVideoAttribute(video), false);   
}

function checkQuiz3() 
{
    answers = "KRISHA"
    var submit = document.getElementById("submit-quiz3");
    var video = document.getElementById("video3");
    var input_value1 = document.getElementById("quiz-textbox3_1").value;

    submit.addEventListener("click", checkAnswer(3, input_value1, answers, video));
    video.addEventListener("ended", closeFullScreen);
    video.addEventListener("ended", showQuiz4, false);
    video.addEventListener("ended", removeVideoAttribute(video), false);   
}

function checkQuiz4() 
{
    answers = "DISHANI"
    var submit = document.getElementById("submit-quiz4");
    var video = document.getElementById("video4");
    var input_value1 = document.getElementById("quiz-textbox4_1").value;

    submit.addEventListener("click", checkAnswer(4, input_value1, answers, video));
    video.addEventListener("ended", closeFullScreen);
    video.addEventListener("ended", showQuiz5, false);
    video.addEventListener("ended", removeVideoAttribute(video), false);   
}

function checkQuiz5() 
{
    answers = "SWAAHA"
    var submit = document.getElementById("submit-quiz5");
    var video = document.getElementById("video5");
    var input_value1 = document.getElementById("quiz-textbox5_1").value;

    submit.addEventListener("click", checkAnswer(5, input_value1, answers, video));
    video.addEventListener("ended", closeFullScreen);
    video.addEventListener("ended", showQuiz6, false);
    video.addEventListener("ended", removeVideoAttribute(video), false);   
}

function checkQuiz6() 
{
    answers = "SAMIKSHA"
    var submit = document.getElementById("submit-quiz6");
    var video = document.getElementById("video6");
    var input_value1 = document.getElementById("quiz-textbox6_1").value;

    submit.addEventListener("click", checkAnswer(6, input_value1, answers, video));
    video.addEventListener("ended", closeFullScreen);
    video.addEventListener("ended", showQuiz7, false);
    video.addEventListener("ended", removeVideoAttribute(video), false);   
}

function checkQuiz7() 
{
    answers = "SIDDHI"
    var submit = document.getElementById("submit-quiz7");
    var video = document.getElementById("video7");
    var input_value1 = document.getElementById("quiz-textbox7_1").value;

    submit.addEventListener("click", checkAnswer(7, input_value1, answers, video));
    video.addEventListener("ended", closeFullScreen);
    video.addEventListener("ended", showQuiz8, false);
    video.addEventListener("ended", removeVideoAttribute(video), false);   
}

function checkQuiz8() 
{
    answers = "KARISHMA"
    var submit = document.getElementById("submit-quiz8");
    var video = document.getElementById("video8");
    var input_value1 = document.getElementById("quiz-textbox8_1").value;

    submit.addEventListener("click", checkAnswer(8, input_value1, answers, video));
    video.addEventListener("ended", closeFullScreen);
    video.addEventListener("ended", showQuiz9, false);
    video.addEventListener("ended", removeVideoAttribute(video), false);   
}

function checkQuiz9() 
{
    answers = "SHIOULI"
    var submit = document.getElementById("submit-quiz9");
    var video = document.getElementById("video9");
    var input_value1 = document.getElementById("quiz-textbox9_1").value;

    submit.addEventListener("click", checkAnswer(9, input_value1, answers, video));
    video.addEventListener("ended", closeFullScreen);
    video.addEventListener("ended", showQuiz10, false);
    video.addEventListener("ended", removeVideoAttribute(video), false);   
}

function checkQuiz10() 
{
    answers = "FAMILY"
    var submit = document.getElementById("submit-quiz10");
    var video = document.getElementById("video10");
    var input_value1 = document.getElementById("quiz-textbox10_1").value;

    submit.addEventListener("click", checkAnswer(10, input_value1, answers, video));
    video.addEventListener("ended", closeFullScreen);
    video.addEventListener("ended", showHome, false);
    video.addEventListener("ended", removeVideoAttribute(video), false);   
}

function capitalizeTextboxContents(quiz_no)
{
    if(quiz_no === 1)
    {
        var input_value1 = document.getElementById("quiz-textbox1_1");
        input_value1.value = input_value1.value.toUpperCase();
    }
    else if(quiz_no === 2)
    {
        var input_value1 = document.getElementById("quiz-textbox2_1");
        input_value1.value = input_value1.value.toUpperCase();
        
    }
    else if(quiz_no === 3)
    {
        var input_value1 = document.getElementById("quiz-textbox3_1");
        input_value1.value = input_value1.value.toUpperCase();
    }
    else if(quiz_no === 4)
    {
        var input_value1 = document.getElementById("quiz-textbox4_1");
        input_value1.value = input_value1.value.toUpperCase();
    }
    else if(quiz_no === 5)
    {
        var input_value1 = document.getElementById("quiz-textbox5_1");
        input_value1.value = input_value1.value.toUpperCase();
    }
    else if(quiz_no === 6)
    {
        var input_value1 = document.getElementById("quiz-textbox6_1");
        input_value1.value = input_value1.value.toUpperCase();
    }
    else if(quiz_no === 7)
    {
        var input_value1 = document.getElementById("quiz-textbox7_1");
        input_value1.value = input_value1.value.toUpperCase();
    }
    else if(quiz_no === 8)
    {
        var input_value1 = document.getElementById("quiz-textbox8_1");
        input_value1.value = input_value1.value.toUpperCase();
    }
    else if(quiz_no === 9)
    {
        var input_value1 = document.getElementById("quiz-textbox9_1");
        input_value1.value = input_value1.value.toUpperCase();
    }
    else if(quiz_no === 10)
    {
        var input_value1 = document.getElementById("quiz-textbox10_1");
        input_value1.value = input_value1.value.toUpperCase();
    }
}

function removeVideoAttribute(video) 
{
    video.setAttribute("hidden");
    video.removeAttribute("autoplay");
    video.classList.add("display-none");
}

function checkAnswer(quiz_no, input_values, answers, video) 
{
    if(quiz_no === 1)
    {
        if(input_values === answers)
        {
            audio = document.getElementById("background-audio")
            audio.pause();
            video.classList.remove("display-none");
            video.removeAttribute("hidden")
            video.setAttribute("autoplay", "");
            openFullScreen(video);
            video.currentTime = 0;
            video.play();

            document.getElementById("quiz-textbox1_1").value = "";
        }
        else
        {
            alert("Wrong answer");
        }
    }
    else if(quiz_no === 2)
    {
        if(input_values === answers)
        {
            audio = document.getElementById("background-audio")
            audio.pause();
            video.classList.remove("display-none");
            video.removeAttribute("hidden")
            video.setAttribute("autoplay", "");
            openFullScreen(video);
            video.currentTime = 0;
            video.play();

            document.getElementById("quiz-textbox2_1").value = "";
        }
        else
        {
            alert("Wrong answer");
        }
    }
    else if(quiz_no === 3)
    {
        if(input_values === answers)
        {
            audio = document.getElementById("background-audio")
            audio.pause();
            video.classList.remove("display-none");
            video.removeAttribute("hidden")
            video.setAttribute("autoplay", "");
            openFullScreen(video);
            video.currentTime = 0;
            video.play();

            document.getElementById("quiz-textbox3_1").value = "";
        }
        else
        {
            alert("Wrong answer");
        }
    } 
    else if(quiz_no === 4)
    {
        if(input_values === answers)
        {
            audio = document.getElementById("background-audio")
            audio.pause();
            video.classList.remove("display-none");
            video.removeAttribute("hidden")
            video.setAttribute("autoplay", "");
            openFullScreen(video);
            video.currentTime = 0;
            video.play();

            document.getElementById("quiz-textbox4_1").value = "";
        }
        else
        {
            alert("Wrong answer");
        }
    } 
    else if(quiz_no === 5)
    {
        if(input_values === answers)
        {
            audio = document.getElementById("background-audio")
            audio.pause();
            video.classList.remove("display-none");
            video.removeAttribute("hidden")
            video.setAttribute("autoplay", "");
            openFullScreen(video);
            video.currentTime = 0;
            video.play();

            document.getElementById("quiz-textbox5_1").value = "";
        }
        else
        {
            alert("Wrong answer");
        }
    } 
    else if(quiz_no === 6)
    {
        if(input_values === answers)
        {
            audio = document.getElementById("background-audio")
            audio.pause();
            video.classList.remove("display-none");
            video.removeAttribute("hidden")
            video.setAttribute("autoplay", "");
            openFullScreen(video);
            video.currentTime = 0;
            video.play();

            document.getElementById("quiz-textbox6_1").value = "";
        }
        else
        {
            alert("Wrong answer");
        }
    } 
    else if(quiz_no === 7)
    {
        if(input_values === answers)
        {
            audio = document.getElementById("background-audio")
            audio.pause();
            video.classList.remove("display-none");
            video.removeAttribute("hidden")
            video.setAttribute("autoplay", "");
            openFullScreen(video);
            video.currentTime = 0;
            video.play();

            document.getElementById("quiz-textbox7_1").value = "";
        }
        else
        {
            alert("Wrong answer");
        }
    } 
    else if(quiz_no === 8)
    {
        if(input_values === answers)
        {
            audio = document.getElementById("background-audio")
            audio.pause();
            video.classList.remove("display-none");
            video.removeAttribute("hidden")
            video.setAttribute("autoplay", "");
            openFullScreen(video);
            video.currentTime = 0;
            video.play();

            document.getElementById("quiz-textbox8_1").value = "";
        }
        else
        {
            alert("Wrong answer");
        }
    } 
    else if(quiz_no === 9)
    {
        if(input_values === answers)
        {
            audio = document.getElementById("background-audio")
            audio.pause();
            video.classList.remove("display-none");
            video.removeAttribute("hidden")
            video.setAttribute("autoplay", "");
            openFullScreen(video);
            video.currentTime = 0;
            video.play();

            document.getElementById("quiz-textbox9_1").value = "";
        }
        else
        {
            alert("Wrong answer");
        }
    } 
    else if(quiz_no === 10)
    {
        if(input_values === answers)
        {
            audio = document.getElementById("background-audio")
            audio.pause();
            video.classList.remove("display-none");
            video.removeAttribute("hidden")
            video.setAttribute("autoplay", "");
            openFullScreen(video);
            video.currentTime = 0;
            video.play();

            document.getElementById("quiz-textbox10_1").value = "";
        }
        else
        {
            alert("Wrong answer");
        }
    } 
}

function openFullScreen(video) 
{
    if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
      }
}

function closeFullScreen()
{
    if (document.exitFullscreen) 
    {
        document.exitFullscreen();
    } 
    else if (document.mozCancelFullScreen) 
    {
        document.mozCancelFullScreen();  
    } 
    else if (document.webkitExitFullscreen) 
    { 
        document.webkitExitFullscreen();
    } 
    else if (document.msExitFullscreen) 
    {
        document.msExitFullscreen();
    }
}
