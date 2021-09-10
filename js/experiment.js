// ---------------------------------------------------------------------------
// INSTRUCTIONS SETUP
// ---------------------------------------------------------------------------



// IMPORT
//import * as instructions from './instructions.js';
var instructions = {
    welcome: `
        <div class="introBox">    
        <h1>Welcome</h1>

        <p>If you would like to participate in our experiment, please press the button below.</p>
        
        <p>The experiment will enter full screen mode.</p>
        </div>`,
    consent: `
        <div class="consentBox">
        <h1>Consent to Participate in the Aesthetics Study</h1>

        <p>This is a psychology experiment being conducted by Dr. Peter Dayan, 
        director of the Max Planck Institute for Biological Cybernetics, and the 
        members of his lab. In order to consent to participate, you MUST meet the 
        following criteria:</p>

        <p>
        - 18 years of age or older<br>
        - Fluent speaker of English<br>
        - Have not previously participated in this experiment<br></p>

        <p>This study is designed to look at how people learn how to make decisions 
        to accomplish their goals. In this task, you will be asked to make choices, 
        play games, and answer questions related to those games. The study will take 
        about 40 minutes and will pay $12/hour plus a attention-dependent bonus of 
        up to a maximum of $1. The performance bonus is explained in more detail in 
        the instructions that follow.</p> 

        <p>Your participation in this research is voluntary. You may refrain from 
        answering any questions that make you uncomfortable and may withdraw your 
        participation at any time without penalty by exiting this task and alerting 
        the experimenter. You may choose not to complete certain parts of the task 
        or answer certain questions. You may contact us at the address provided 
        below if you have additional questions or concerns.</p> 

        <p>Other than monetary compensation, participating in this study will 
        provide no direct benefits to you. But we hope that this research will 
        benefit society at large by contributing towards establishing a scientific 
        foundation for improving people's learning and cognitive control abilities.</p>

        <p>Your online username may be connected to your individual responses, but 
        we will not be asking for any additional personally identifying information, 
        and we will handle responses as confidentially as possible. We cannot however 
        guarantee the confidentiality of information transmitted over the Internet. 
        We will be keeping de-identified data collected as part of this experiment 
        indefinitely. Data used in scientific publications will remain completely 
        anonymous.</p>

        <p>If you have any questions about the study, feel free to contact our lab. 
        Dr. Dayan and his lab members can be reached at kyblab.tuebingen@gmail.com.</p>

        <p>By selecting the 'consent' option below, I acknowledge that I am 18 years or 
        older, that I am a fluent speaker of English, that I have read this consent 
        form, and that I agree to take part in the research.</p>
        </div>
    `,
    overview: `
        <div class="introBox">
        <h1>Overview</h1>

        <p>Thank you for participating in our study.<br> 
        This study consists of four main parts and will take about 45 minutes in
        total to complete.</p>

        <p>In the first part, you will see a series of images. We will ask you
        to tell us your opinion on each of them. <i>(~ 7 min)</i></p>

        <p>In the second part, we will show you the images from the first part again.
        You will be free to view each image for as long as you want before moving
        on to the next. <i>(15 min)</i></p>
        
        <p>The third part will be the same task as the first part. <i>(~ 7 min)</i></p>
        
        <p>At the end of the study, we will also ask you some questions about
        yourself. <i>(~ 10 min)</i></p>

        <p>We will give you detailed instructions before the start of each part of 
        the study.<br> 
        We ask you not to take breaks during each of the study\'s individual parts. 
        Please feel free to take breaks as needed between the three parts of this 
        study.</p>
        
        <p>Click on the button below to start the experiment.</p>
        </div>`,
    rating1: `
        <div class="introBox">
        <h1>Rating</h1>

        <p>In the first part of the study, you will rate several different images 
        according to how much you like them. You will use a slider ranging from
        'not at all' to 'very much' to indicate how much you like each image. Please
        try to use the full range of the slider. That is, rate the image you like
        the least 'not at all' and the image you liked the most 'very much'.</p>

        <p>Focus on your own impression. It does not matter how others would judge 
        them. It also does not matter what the image depicts. Simply tell us how 
        much you like the image.<br>
        Again, there are no right or wrong answers. We simply want to know your 
        personal opinion.</p>

        <p>Click on 'Continue' to start the ratings.</p>
        </div>`,
    viewingMainTask: `
        <div class="introBox">
        <h1>Viewing: Main Task</h1>

        <p>In the second part of the study you will view the pictures again that you just saw.
        You can think of this part of the study as if you were browsing through an 
        Instagram feed. You will see one image at a time as well as a small 
        preview of the next image. You can look at each image as long as you want 
        to, and you can move to the next image by clicking the 'View Next Image' button.</p>

        <img class="introImage" src="images/instruction/normalTrial.png">

        <p>You will spend a total of 15 minutes looking at the images. Once you 
        have seen all images, the same images will repeat in random 
        order until the 15 minutes are over.<br>
        Follow your interest and view each image as long as you want.</p>

        <p>There are no right or wrong answers, we simply want you to follow your 
        own taste and interests.</p>

        <p>Click on 'Next' to continue.</p>
        </div>`,
    viewingSecondaryTask: `
        <div class="introBox">
        <h1>Viewing: Side Task</h1>

        <p>While viewing the images, we ask you to pay close attention to the main 
        image. If you pay attention troughout the whole viewing phase we endow 
        you with a $1 bonus</p>

        <p>To make sure that you pay close attention to each image, a red dot 
        will appear from time to time on the main image. When you see the red dot 
        just click on it with your cursor to show us that you are indeed 
        paying attention. You will continue with the next image. If you fail to 
        click on the red dot within 10 seconds, we will deduct $0.20 from your 
        bonus. We will give you feedback each time you miss the red dot. The 
        dot will always appear inside the main image. It will be easy to spot 
        as long as you pay attention to the image.</p>

        <img class="introImage" src="images/instruction/redDotTrial.png">
        <img class="introImage" src="images/instruction/redDotMissedTrial.png">

        <p>Remember, this task is just designed to keep you focused on the main 
        image. The dot is going to be easy to spot. It will only appear a few 
        times, so you do not have to look for it the whole time. Your main 
        task is still just to view the images as long as you want.</p>

        <p>Click on 'Next' to start with a few practice trials.</p>
        </div>`,
    viewingSummary: `
        <div class="introBox">
        <h1>Viewing: Summary</h1>

        <p>Remember: You will now view these images for 15 minutes. Look at 
        each image as long as you like to. You can proceed to the next image, 
        shown as a thumbnail, by clicking the 'View Next Image' button.</p>

        <p>From time to time a red dot will appear on some of the images, which 
        you must click on with your mouse. These events will be quite rare. As 
        long as you pay attention to the main image, the red dot will be easy 
        to spot. This task only exists to check whether you look at the image 
        or not.</p> 

        <p>The viewing of the images is your main task.</p>

        <p>Click on 'Continue' to start the viewing part.</p>
        </div>`,
    rating2: `
        <div class="introBox">
        <h1>Rating</h1>

        <p>Thank you for completing the second part of our study.</p>

        <p>In the third part, you will rate the images again. This part is equal to
        the first part except that the images are presented in a different order.</p>
        
        <p>Remember, try to use the full range of the slider. That is, rate the image
        you like the least 'not at all' and the image you liked the most 'very much'.
        Focus on your own impression. It does not matter how others would judge 
        them or what the image depicts. Simply tell us how much you like the image.<br>
        Again, there are no right or wrong answers. We simply want to know your 
        personal opinion.</p>

        <p>Click on 'Continue' to start the ratings.</p>
        </div>`,
    questions: `
        <div class="introBox">
        <h1>Final Questions</h1>

        <p>Thank you for rating the images.</p>

        <p>In this last part of our study we will ask you some questions about 
        yourself. This helps our research.</p>

        <p>Click on 'Continue' to start the questions.</p>
        </div>`,
    end: `
        <div class="introBox">
        <h1>Thank you for participating in our study!</h1>

        <p>For any questions or comments please refer to:<br>
        <a href="mailto: kyblab.tuebingen@gmail.com?subject=Feedback Aesthetics Experiment">
        kyblab.tuebingen@gmail.com</a></p>

        <p>You can close this window now.</p>
        </div>`
}



// CREATE TIMELINE
var timeline = [];





// ---------------------------------------------------------------------------
// STIMULUS SETUP
// ---------------------------------------------------------------------------



// INSTRUCTION IMAGES
var instructionFiles = ["images/instruction/normalTrial.png",
    "images/instruction/redDotTrial.png",
    "images/instruction/redDotMissedTrial.png"
]



// CREATE PRACTICE STIMULUS ARRAY
var practiceFiles = ["images/practice/alpaca0.jpg",
    "images/practice/alpaca1.jpg",
    "images/practice/alpaca2.jpg",
    "images/practice/alpaca3.jpg",
    "images/practice/alpaca4.jpg",
    "images/practice/alpaca5.jpg"
];

var practiceStimuli = [];
for(var i = 0; i < (practiceFiles.length - 1); i++) {
    practiceStimuli[i] = {
        main: practiceFiles[i],
        thumbnail: practiceFiles[i + 1]
    };
};
//console.log("practiceStimuli: ", practiceStimuli);



// CREATE VIEWING STIMULUS ARRAY (1000+ IMAGES)
// https://stackoverflow.com/questions/30622369/easiest-way-to-get-list-of-files-in-the-server-directory
/*$.getJSON('./img', imageList => {
    console.log("getJSON: ", imageList);
});*/

// basic stimulus parameter
var imageAmount = 1000;
var files = ["images/experiment/101_start.png",
    "images/experiment/37_start.png",
    "images/experiment/41_start.png",
    "images/experiment/5_start.png",
    "images/experiment/57_start.png",
    "images/experiment/64_start.png",
    "images/experiment/92_start.png",
    "images/experiment/pair_101_57_out_tensor(0.3333).png",
    "images/experiment/pair_101_57_out_tensor(0.5000).png",
    "images/experiment/pair_101_57_out_tensor(0.6667).png",
    "images/experiment/pair_101_64_out_tensor(0.3333).png",
    "images/experiment/pair_101_64_out_tensor(0.5000).png",
    "images/experiment/pair_101_64_out_tensor(0.6667).png",
    "images/experiment/pair_101_92_out_tensor(0.3333).png",
    "images/experiment/pair_101_92_out_tensor(0.5000).png",
    "images/experiment/pair_101_92_out_tensor(0.6667).png",
    "images/experiment/pair_37_101_out_tensor(0.3333).png",
    "images/experiment/pair_37_101_out_tensor(0.5000).png",
    "images/experiment/pair_37_101_out_tensor(0.6667).png",
    "images/experiment/pair_37_41_out_tensor(0.3333).png",
    "images/experiment/pair_37_41_out_tensor(0.5000).png",
    "images/experiment/pair_37_41_out_tensor(0.6667).png",
    "images/experiment/pair_37_57_out_tensor(0.3333).png",
    "images/experiment/pair_37_57_out_tensor(0.5000).png",
    "images/experiment/pair_37_57_out_tensor(0.6667).png",
    "images/experiment/pair_37_64_out_tensor(0.3333).png",
    "images/experiment/pair_37_64_out_tensor(0.5000).png",
    "images/experiment/pair_37_64_out_tensor(0.6667).png",
    "images/experiment/pair_37_92_out_tensor(0.3333).png",
    "images/experiment/pair_37_92_out_tensor(0.5000).png",
    "images/experiment/pair_37_92_out_tensor(0.6667).png",
    "images/experiment/pair_5_101_out_tensor(0.3333).png",
    "images/experiment/pair_5_101_out_tensor(0.5000).png",
    "images/experiment/pair_5_101_out_tensor(0.6667).png",
    "images/experiment/pair_5_41_out_tensor(0.3333).png",
    "images/experiment/pair_5_41_out_tensor(0.5000).png",
    "images/experiment/pair_5_41_out_tensor(0.6667).png",
    "images/experiment/pair_5_64_out_tensor(0.3333).png",
    "images/experiment/pair_5_64_out_tensor(0.5000).png",
    "images/experiment/pair_5_64_out_tensor(0.6667).png",
    "images/experiment/pair_5_92_out_tensor(0.3333).png",
    "images/experiment/pair_5_92_out_tensor(0.5000).png",
    "images/experiment/pair_5_92_out_tensor(0.6667).png",
    "images/experiment/pair_64_41_out_tensor(0.3333).png",
    "images/experiment/pair_64_41_out_tensor(0.5000).png",
    "images/experiment/pair_64_41_out_tensor(0.6667).png",
    "images/experiment/pair_64_57_out_tensor(0.3333).png",
    "images/experiment/pair_64_57_out_tensor(0.5000).png",
    "images/experiment/pair_64_57_out_tensor(0.6667).png",
    "images/experiment/pair_92_57_out_tensor(0.3333).png",
    "images/experiment/pair_92_57_out_tensor(0.5000).png",
    "images/experiment/pair_92_57_out_tensor(0.6667).png",
    "images/experiment/pair_92_64_out_tensor(0.3333).png",
    "images/experiment/pair_92_64_out_tensor(0.5000).png",
    "images/experiment/pair_92_64_out_tensor(0.6667).png",
]

// setting up random file order & calculating iteration amount
var fileSequence = jsPsych.randomization.shuffle(files); // create random file sequence
iterationAmount = Math.ceil(imageAmount / fileSequence.length); // calculates the neccessary number of iterations
//console.log("Before Loop Shuffled Array: ", fileSequence);
console.log("Loop Iterations for Creating Stimulus Sequence: ", iterationAmount);

// for loop for creating an 1000+ image sequence  
for(var i = 0; i < iterationAmount; i++) {
    var newArray = jsPsych.randomization.shuffle(files);
    var lastElement = fileSequence[fileSequence.length - 1]; // last element of old array
    var firstElement = newArray[0]; // first element of new array
    if(lastElement == firstElement) { // if last and first element are the same?
        newArray.shift(); // removes the first item of an array
        newArray.push(firstElement); // removes first element from beginning and moves it to the end
    }
    fileSequence = fileSequence.concat(newArray);
}

// put object with main & thumbnail image into an array
var viewingStimuli = [];
for(var i = 0; i < (fileSequence.length - 1); i++) {
    viewingStimuli[i] = {
        main: fileSequence[i],
        thumbnail: fileSequence[i + 1]
    };
};
console.log("viewingStimuli: ", viewingStimuli);



// CREATE RATING STIMULUS ARRAY (55 IMAGES)

// number of used images (currently: 55 images)
var numberOfFiles = files.length;

// slider positions
var sliderMinPosition = 1;
var sliderMaxPosition = 500;

var sliderPositions = []
for(var i = sliderMinPosition; i < sliderMaxPosition; i++) {
    sliderPositions.push(i);
}
console.log("Slider Positions: ", sliderPositions);
sliderPositions = jsPsych.randomization.shuffle(sliderPositions);
console.log("Shuffled Positions: ", sliderPositions);

// create random sequences
var rating1Stimuli = [];
var rating2Stimuli = [];
var temp1 = jsPsych.randomization.shuffle(files);
var temp2 = jsPsych.randomization.shuffle(files);

// create 2 independent arrays for each rating part
for(var i = 0; i < numberOfFiles; i++) {
    rating1Stimuli[i] = { // creating array for rating1
        stimulus: temp1[i],
        slider: sliderPositions[i]
    };
    rating2Stimuli[i] = { // creating array for rating2
        stimulus: temp2[i],
        slider: sliderPositions[i + numberOfFiles] // for new slider positions
    }; 
};
console.log("rating1Stimuli: ", rating1Stimuli);
console.log("rating2Stimuli: ", rating2Stimuli);





// ---------------------------------------------------------------------------
// VIEWING TRIAL SETUP
// ---------------------------------------------------------------------------



// PARAMETER FOR VIEWING PHASE
var viewingTime = 900000; // 900,000 ms = 900 sec = 15 min
var startTime;
var timeIsUp = false;
var html = ""
var viewingButtonLabel = "View Next Image";
var viewingButtonVerticalMargin = "20px";
var minimumResponseTime = 500; // 0.2 sec
var thumbnailCaption = "Up Next";
var thumbnailWidth = 60;
var imageWidth = 350;
var circleRadius = 10;
var circleSize = 2 * circleRadius;
var circleCenter = circleRadius;
var circleColor = "'red'";



// PARAMETER FOR ATTENTION CHECK
var durationAttentionCheckTimer;
var untilAttentionCheckTimer;
var attentionCheckStarted = false;
var attentionCheckStatus = "";
var trialStartTime;
var currentOnset;
var attentionCheckMaxResponseTime = 10000; // 10 sec
var attentionCheckOnsetTime = jsPsych.randomization.shuffle([0.500, 1500, 2500, 3500, 4500]); // range from 0 - 4 seconds
var possibleTimepoints = [];
var attentionCheckTimepoints = [];
var cutoffSize = 0.1; // the first and last 20% of time wont be selected



// STARTS GLOBAL TIMER FOR WHOLE VIEWING PHASE
function startViewingTimer() {
    startTime = performance.now(); 
    //console.log("Timer started: ", startTime);
    viewingTimer = setTimeout(function() {
        var endTime = performance.now();
        //console.log("Timer finished: ", endTime);
        console.log("Timer intervall: ", endTime - startTime);
        timeIsUp = true;
        jsPsych.endCurrentTimeline();
    }, viewingTime)
}



// GENERATE RANDOM POINTS FOR ATTENTION CHECK
for(var i = 0; i < viewingTime; i++) { // creating array with all possible timepoints between start and max. duration
    possibleTimepoints[i] = i+1;
}

sliceBegin = possibleTimepoints.length * cutoffSize; // selecting random timepoints for attention check
sliceEnd = possibleTimepoints.length - sliceBegin;
//console.log("sliceBegin: ", sliceBegin);
//console.log("SliceEnd: ", sliceEnd);
possibleTimepoints = possibleTimepoints.slice(sliceBegin, sliceEnd);
attentionCheckTimepoints = jsPsych.randomization.sampleWithoutReplacement(possibleTimepoints, 5);
attentionCheckTimepoints.sort(function(a, b) {return a-b});
console.log("Timepoints: ", attentionCheckTimepoints);



// MAKES THE RED DOT VISIBLE
function showRedDot () {
    attentionCheckStarted = true;
    attentionCheckStatus = "running";

    console.log("SHOWS RED DOT! + STATUS: ", attentionCheckStatus);
    document.getElementById("dotElement").style.visibility = "visible";
    durationAttentionCheckTimer = setTimeout(showFeedbackText, attentionCheckMaxResponseTime);
}



// MAKES FEEDBACK TEXT VISIBLE, THAT THE ATTENTION CHECK WAS MISSED --> TOO SLOW
function showFeedbackText() {
    attentionCheckStatus = "too slow";

    document.getElementById("feedbackText").style.visibility = "visible";
    document.getElementById("dotElement").style.visibility = "hidden";
}



// AFTER CLICK ON RED DOT --> FINISH TRIAL
function finishTrialAfterRedDotClick() {
    attentionCheckStarted = false;
    attentionCheckStatus = "passed"

    console.log("PASSED! + RED DOT CLICK");
    clearTimeout(durationAttentionCheckTimer);
    var currentTrial = jsPsych.currentTrial();
    var data = {
        attention_check: attentionCheckStatus,
        stimulus: currentTrial.stimulus, 
        calculated_reaction_time: performance.now() - trialStartTime,
        onset_time: currentOnset
    }
    jsPsych.finishTrial(data);
}



// CREATES THE VIEWING PROCEDURE
function createViewingProcedure(images, attentionCheckTime, attentionCheckOnset) {

    var createdProcedure = {
        timeline: [
            {
                type: "timed-html-button-response",
                choices: [viewingButtonLabel],
                margin_vertical: viewingButtonVerticalMargin,
                minimum_rt: minimumResponseTime,

                on_start: function() {
                    trialStartTime = performance.now();
                },

                data: {
                    image_name: jsPsych.timelineVariable("main"),
                    thumbnail_name: jsPsych.timelineVariable("thumbnail")
                },

                on_finish: function(data) {
                    clearTimeout(untilAttentionCheckTimer);
                    clearTimeout(durationAttentionCheckTimer);

                    if(attentionCheckStarted) { // checks if red dot already appeared
                        if(attentionCheckStatus == "too slow") { // checks if too slow
                            data.attention_check = "too slow";
                            data.onset_time = currentOnset;
                        } else { // when red dot appeared but the 'Next' button was clicked
                            data.attention_check = "ignored";
                            data.onset_time = currentOnset; 
                        }   
                    }

                    if(attentionCheckStatus == "not seen") { // checks if too slow
                        data.attention_check = "not seen";
                        data.onset_time = currentOnset;
                    }

                    attentionCheckStarted = false;
                    attentionCheckStatus = "";
                },

                stimulus: function() {
    
                    html = "<div id='feedbackText' class='feedbackAttentionCheck'>You have missed the attention check.<br>Please pay attention to the image!</div>"
    
                    html += "<div class='container'>";
    
                    // left: empty block (needed to center the other images)
                    html += "<div style='width:" + thumbnailWidth + "px;'></div>";
    
                    // center: main image
                    if(attentionCheckTime.length > 0) {
                        var currentDuration = performance.now() - startTime;
                        //console.log("now: ", performance.now());
                        //console.log("start: ", startTime);
                        //console.log("Current Duration: ", currentDuration);
                        if(currentDuration > attentionCheckTime[0]) {
                            attentionCheckTime.shift() // removes used timepoint
                            untilAttentionCheckTimer = setTimeout(showRedDot, attentionCheckOnset[0]);
                            attentionCheckStatus = "not seen";
                            currentOnset = attentionCheckOnset[0];
                            console.log("Current Attention Check Onset: ", currentOnset);
                            attentionCheckOnset.shift();

                            html += "<div class='centerContainer'><img class='centerImage' src='"
                            html += jsPsych.timelineVariable("main");
                            html += "' width='" + imageWidth + "'>";
                            html += "<svg id='dotElement' class='overlayAttentionCheck' width='" + circleSize + "' height='" + circleSize + "'>";
                            html += "<circle cx='" + circleCenter + "' cy='" + circleCenter + "' r='" + circleRadius + "' fill=" + circleColor + "onclick='finishTrialAfterRedDotClick()' />";
                            html += "</svg></div>";
                        } else {
                            html += "<div class='centerContainer'><img class='centerImage' src='"
                            html += jsPsych.timelineVariable("main");
                            html += "' width='" + imageWidth + "'></div>";
                        }
                    } else {
                        html += "<div class='centerContainer'><img class='centerImage' src='"
                        html += jsPsych.timelineVariable("main");
                        html += "' width='" + imageWidth + "'></div>";
                    }
    
                    // right: thumbnail
                    html += "<div><img src='";
                    html += jsPsych.timelineVariable("thumbnail");
                    html += "' width='" + thumbnailWidth + "'><br>" + thumbnailCaption + "</div></div>";
    
                    // present HTML code
                    console.log("HTML Code: ", html);
                    return html;
                }
            }
        ],

        // stimulus sequence
        timeline_variables: images
    };

    // return whole jsPsych trial
    return createdProcedure;
}





// ---------------------------------------------------------------------------
// DEFINE TRIALS: INTRO TRIALS
// ---------------------------------------------------------------------------



// TRIAL: ENTER FULLSCREEN
var fullscreen = {
    type: "fullscreen",
    fullscreen_mode: true,
    message: instructions.welcome,
    button_label: 'Start'
}
timeline.push(fullscreen);



// TRIAL: PRELOAD IMAGES
var preloadExperiment = {
    type: 'preload',
    images: [instructionFiles, practiceFiles, files]
};
timeline.push(preloadExperiment);



// TRIAL: CONSENT FORM TRIAL
var consent = {
    type: "html-button-response",
    stimulus: instructions.consent,
    choices: ["Yes, I consent to participate", "No, I do not consent to participate"],
    on_finish: function(data){
        if(data.response == 1){
            jsPsych.endExperiment('<p>You did not consent to participate. You can close this window now.</p><p>Thank you for your time!</p>');
        }
    }    
}
timeline.push(consent);



// TRIAL: EXPERIMENT OVERVIEW
var introOverview = {
    type: "html-button-response",
    stimulus: instructions.overview,
    choices: ["Start Experiment"]
}
timeline.push(introOverview);





// ---------------------------------------------------------------------------
// DEFINE TRIALS: RATING PHASE 1
// ---------------------------------------------------------------------------



// TRIAL: INSTRUCTION RATING PART
var introRating1Part = {
    type: "html-button-response",
    stimulus: instructions.rating1,
    choices: ["Continue"]
}
timeline.push(introRating1Part);



// TRIAL: RATE IMAGES
var html = "";
var ratingSize = "350";
var ratingQuestion = "<br>How much do you like this image?";

var rating1Procedure = {
    timeline: [
        {
            type: "html-slider-response",
            labels: ["not at all", "very much"],
            button_label: "Continue",
            min: 0,
            max: 500,
            slider_start: jsPsych.timelineVariable("slider"),
            require_movement: true,
            data: {
                image_name: jsPsych.timelineVariable("stimulus")
            },
            stimulus: function() {
                html = "<img src='";
                html += jsPsych.timelineVariable("stimulus");
                html += "' height = '";
                html += ratingSize;
                html += "'>";
                html += ratingQuestion;

                return html;
            }
        }
    ],
    timeline_variables: rating1Stimuli
};
timeline.push(rating1Procedure);





// ---------------------------------------------------------------------------
// DEFINE TRIALS: INTRO + PRACTICE TRIALS
// ---------------------------------------------------------------------------



// TRIAL: FIRST INSTRUCTIONS
var introViewingPart = {
    type: "instructions",
    pages: [
        instructions.viewingMainTask,
        instructions.viewingSecondaryTask,
    ],
    show_clickable_nav: true
}
timeline.push(introViewingPart);



// TRIAL: VIEWING TIMER
var viewingTimerTrial = {
    type: 'call-function',
    func: function() {
        startViewingTimer();
    }
};
timeline.push(viewingTimerTrial);



// TRIAL: PRACTICE PROCEDURE
var practiceProcedure = createViewingProcedure(practiceStimuli, [5000], [1000]);
timeline.push(practiceProcedure);



// TRIAL: VIEWING TIMER
var clearViewingTimer = {
    type: 'call-function',
    func: function() {
        clearTimeout(viewingTimer);
    }
};
timeline.push(clearViewingTimer);



// TRIAL: FIRST INSTRUCTIONS
var introViewingSummary = {
    type: "html-button-response",
    stimulus: instructions.viewingSummary,
    choices: ["Continue"]
}
timeline.push(introViewingSummary);





// ---------------------------------------------------------------------------
// DEFINE TRIALS: VIEWING PHASE
// ---------------------------------------------------------------------------



// TRIAL: START GLOBAL VIEWING TIMER
var timerViewing = {
    type: 'call-function',
    func: function() {
        startViewingTimer();
    }
};
timeline.push(timerViewing);



// TRIAL: VIEWING PROCEDURE
var viewingProcedure = createViewingProcedure(viewingStimuli, attentionCheckTimepoints, attentionCheckOnsetTime);



// LOOP TRIAL: REPEATS VIEWING PROCEDURE UNTIL VIEWING TIME IS UP
var viewingLoop = {
    timeline: [viewingProcedure],
    loop_function: function() {
        if(timeIsUp) {
            return false;
        } else {
            return true;
        }
    }
};
timeline.push(viewingLoop);



// TRIAL: END GLOBAL VIEWING TIMER
var clearTimer = {
    type: 'call-function',
    func: function() {
        clearTimeout(viewingTimer);
    }
};
timeline.push(clearTimer);





// ---------------------------------------------------------------------------
// DEFINE TRIALS: RATING PHASE 2
// ---------------------------------------------------------------------------



// TRIAL: INSTRUCTION RATING PART
var introRating2Part = {
    type: "html-button-response",
    stimulus: instructions.rating2,
    choices: ["Continue"]
}
timeline.push(introRating2Part);



// TRIAL: RATE IMAGES
var rating2Procedure = {
    timeline: [
        {
            type: "html-slider-response",
            labels: ["not at all", "very much"],
            button_label: "Continue",
            min: 0,
            max: 500,
            slider_start: jsPsych.timelineVariable("slider"),
            require_movement: true,
            data: {
                image_name: jsPsych.timelineVariable("stimulus")
            },
            stimulus: function() {
                html = "<img src='";
                html += jsPsych.timelineVariable("stimulus");
                html += "' height = '";
                html += ratingSize;
                html += "'>";
                html += ratingQuestion;

                return html;
            }
        }
    ],
    timeline_variables: rating2Stimuli
};
timeline.push(rating2Procedure);





// ---------------------------------------------------------------------------
// DEFINE TRIALS: FINAL QUESTIONS
// ---------------------------------------------------------------------------



// TRIAL: INSTRUCTION FINAL QUESTIONS
var introFinalQuestions = {
    type: "html-button-response",
    stimulus: instructions.questions,
    choices: ["Continue"]
}
timeline.push(introFinalQuestions);



// TRIAL: DEMOGRAPHIC DATA
var demographicQuestions = {
    type: "survey-html-form",
    button_label: "Continue",
    html: `
        <p class="spaceUnderneath"><b>What gender do you identify with?</b><br>
        <input type="radio" id="male" name="gender" value="male"><label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" required><label for="female">Female</label>
        <input type="radio" id="other" name="gender" value="other"><label for="other">Other</label></p>
        
        <p class="spaceUnderneath"><b>How old are you (in years)?</b><br>
        <input type="text" id="age" name="age" required></p>

        <p class="spaceUnderneath"><b>What is your highest education?</b><br>
        <input type="radio" id="elementarySchool" name="education" value="elementarySchool"><label for="elementarySchool">Elementary School</label>
        <input type="radio" id="highSchool" name="education" value="highSchool"><label for="highSchool">High School</label>
        <input type="radio" id="college" name="education" value="college"><label for="college">College</label>
        <input type="radio" id="bachelorMaster" name="education" value="bachelorMaster" required><label for="bachelorMaster">Bachelor / Master</label>
        <input type="radio" id="phD" name="education" value="phd"><label for="phd">Ph.D.</label></p>

        <p class="spaceUnderneath"><b>What is your nationality?</b><br>
        <input type="text" id="nationality" name="nationality" required></p>
    `
};
timeline.push(demographicQuestions);



// TRIAL: QUESTIONS ABOUT IMAGES, STRATEGIES AND DOGS
var questionOptions1 = ["strongly dislike", "dislike", "neither like nor dislike", "like", "strongly like"];
var questionOptions2 = ["less than 5 min", "5 - 15 min", "15 - 30 min", "30 - 60 min", "1h - 2h", "more than 2h"];
var questionOptions3 = ["strongly disagree", "disagree", "neither agree nor disagree", "agree", "strongly agree"]
var questionOptions4 = ["yes", "no"];
var questionOptions5 = questionOptions4;
var questionOptions6 = questionOptions1;

var otherQuestions = {
    type: "survey-multi-choice",
    questions: [
        {prompt: "How much do you enjoy browsing images on apps like Instagram or the internet?", name: "imageBrowsingLiking", options:questionOptions1, required: true, horizontal: true},
        {prompt: "How much time do you spend browsing images on apps like Instagram or the internet per day?", name: "imageBrowsingDuration", options:questionOptions2, required: true, horizontal: true},
        {prompt: "Looking at the images was boring to me.", name: "boredom", options:questionOptions3, required: true, horizontal: true},
        {prompt: "Do you currently have a dog?", name: "dogPresent", options:questionOptions4, required: true, horizontal: true},
        {prompt: "Did you have a dog in the past?", name: "dogPast", options:questionOptions5, required: true, horizontal: true},
        {prompt: "Do you like dogs?", name: "dogLiking", options:questionOptions6, required: true, horizontal: true}
    ]
};
timeline.push(otherQuestions);



// TRIAL: DEMOGRAPHIC DATA
var strategyQuestions = {
    type: "survey-html-form",
    button_label: "Continue",
    html: `
        <p class="spaceUnderneath"><b>While clicking through our images, did you follow any specific strategies? <i>(optional)</i></b><br>
        <textarea id="strategies" name="strategies" cols="50" rows="5"></textarea></p>

        <p class="spaceUnderneath"><b>What made you switch to the next image?</b><br>
        <label for="switchReason">not wanting to continue looking at the current image</label>
        <input style="width:300px;" type="range" id="switchReason" name="switchReason" min="0" max="100">
        <label for="switchReason">wanting to look at the next image</label></p>

        <p class="spaceUnderneath"><b>If you had the option to move backwards as well as forwards through the images, would you have used it?</b><br>
        <input type="radio" id="yes" name="previousImage" value="yes" required><label for="yes">yes</label>
        <input type="radio" id="no" name="previousImage" value="no"><label for="no">no</label></p>
    `
};
timeline.push(strategyQuestions);



// TRIAL: COMMENT FIELD
var comments = {
    type: "survey-text",
    button_label: "Continue",
    questions: [
        {
            prompt: "<p><b>Finally, do you have any comments on the experiment? <i>(optional)</i></b></p>",
            name: "comments",
            rows: 8,
            columns: 80
        }
    ]
};
timeline.push(comments);





// ---------------------------------------------------------------------------
// END
// ---------------------------------------------------------------------------



// TRIAL: END FULLSCREEN
timeline.push({
    type: 'fullscreen',
    fullscreen_mode: false
})



// ADD DATA TO EACH PARTICIPANT

// timestamp
const d = new Date();
const year = d.getFullYear();
const month = d.getMonth();
const day = d.getDate();
const hour = d.getHours();
const minute = d.getMinutes();
function twoDigit(n) {
    if(n < 10) {
        return "0" + n;
    } else {
        return n;
    }
}
const date = year + twoDigit(month + 1) + twoDigit(day);
const time = twoDigit(hour) + twoDigit(minute);
const timestamp  = date + "_" + time;
//console.log("Timestamp: ", timestamp);

// id
var id = jsPsych.randomization.randomID(5);
//console.log("ID: ", id);

// version number
var version = "V2-20210910";
console.log("Version: ", version);

// add to each trial
jsPsych.data.addProperties({
    id: id,
    date: date,
    time: time,
    version: version
});

var fileName = "dat_" + timestamp + "_" + id;
console.log("FN: ", fileName);



// TRIAL: CALL PHP FILE
function saveData(name, data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/write_data.php'); // 'write_data.php' is the path to the php file described above.
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: name, filedata: data}));
    //console.log("Ajax Request started!");
};

var writeToServer = {
    type: "call-function",
    func: function() {
        saveData("dat_" + timestamp + "_" + id,
            jsPsych.data.get().csv());
        //console.log("Start saveData() function!");
    }
};
timeline.push(writeToServer);



// TRIAL: END SCREEN
var end = {
    type: "instructions",
    pages: [
        instructions.end + "<p>Your unique ID is: <b>" + id + "</b></p>"
    ],
    show_clickable_nav: false
}
timeline.push(end);



// RUN EXPERIMENT TIMELINE
jsPsych.init({
    timeline: timeline,
    // on_finish: function() { jsPsych.data.displayData(); }
});
