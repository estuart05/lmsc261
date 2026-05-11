define e = Character("Mingus", color="#0e92cf")
define j = Character("Jim Lucchese", color="#D62424")
#define w = Character("", color="#ffffff", what_font="Zapfino.ttf")
#define theend = ParameterizedText(xalign=0.5, yalign=0.5, color="#ffffff", font="Zapfino.ttf")
style theend is text:
    color "#ffffff"
    size 100
    font "Zapfino.ttf"


# The game starts here.

label start:

    ### GETTING BOSTON WEATHER API ### 
    python:
        from requests import *
        import json 

        url = 'https://api.open-meteo.com/v1/forecast?latitude=42.3464&longitude=-71.0870&current_weather=true'
        response = get(url)

        if response.status_code == 200:
            api_success = True
        
        response_formatted = (float(json.dumps(response.json()['current_weather']['temperature'], indent=4)) * (9/5)) + 32

    ### FOR SKIPPING TO THE DATE ###

    #$ name = "Emma"
    #jump caf_date

    ###

    scene berklee 136night

    show mingus chill

    e "Ahh, yes, Berklee College of Music."

    show mingus wave
    $name = renpy.input(prompt="Welcome! What's your name?",default='Emma',)

    show mingus bonita
    e "There are so many wonderful classes available here for you to take."

    e "What do you want to major in?"

    menu:

        "Music Composition":
            jump major_comp

        "MG&P":
            jump major_mgp

    label major_comp:

        $ lame_flag = True

        show mingus chill
        e "Mmm... Ok... I see. Well, you're very brave."

        jump major_done

    label major_mgp:

        $ lame_flag = False

        show mingus thumbs
        e "Of course, Berklee's newest and greatest major yet: Music Generation and Prompting!"

        e "AI is the way of the future!!"

        jump major_done

label major_done:

    show mingus chill
    e "When registering for classes, you have plenty of cool options."

    "All of the classes I wanted to take are full..."

    e "Oh no, are they all filled up?"

    show mingus thumbs 
    e "That's okay, you can be the first to pioneer our all-NEW classes! How exciting!"

    "Yeah..." 

    show mingus chill
    e "Let me show you your new schedule..." 

    window hide

    show schedule paper:
        xalign 0.5
        yalign 0.5

    pause
    window show

    hide schedule paper

    show mingus bonita 
    menu:
        e "Awesome, right?"

        "Yeah, can't wait!":
            jump awesome_yes

        "Uhhhh...":
            jump awesome_no

    label awesome_yes:
        
        $ excite_flag = True
        jump awesome_done

    label awesome_no:

        $ excite_flag = False

        # scary bit

        show mingus chill
        e "What's wrong, [name]?"

        show mingus scary
        with Dissolve(1)

        e "{cps=*0.1}You aren't excited?{/cps}" 

        jump awesome_done
 
label awesome_done:
    show mingus wave
    e "Wait a minute-"

    e "JIM LUCCHESE?!??"

    show mingus wave at left

    show jim standing at right

    j "Hey everyone. It's me, your president Jim."

    e "What are you doing here?"

    if lame_flag:

        j "I just wanted to let this loser know that because we bought another dance studio, we're going to have to cut the composition department budget in half."

        show jim posed at right

        j "You are so so talented, and we love you, but there won't be any composers in 3-5 years anyway, depending on projections of generative tech."

        j "You know, they're using AI to train other AI models now."

        jump jim_done

    else:

        j "[name]! I just wanted to say congratulations on your newly declared major. It's not easy to spearhead a new path like this, so we at the College are very proud."
        
        j "You represent everything that Berklee stands for: Innovation, creativity, and high job placement rates."

        j "I won't be seeing you!"

        jump jim_done

label jim_done:

    hide jim

    show mingus chill at center

    e "Anyway, "

    if excite_flag:
        e "Enjoy your semester, [name]! {w=.5}And remember:"
    else:
        e "You better {size=-10}ahem{/size} enjoy your semester! {w=.5}And remember:"

    e "Work is always better when it's done faster!"

    hide mingus
    with Dissolve(.5)

    "Maybe I should appeal for a bigger scholarship..."

##### SCENE 2 #####

label scene_2:

    scene berklee 160
    with Dissolve(.5)

    "Later that day..."
    show mingus chill

    menu:
        e "Oh hey, it's you again!"

        "Hi Mingus!":
            jump himingus_done

        "Hi...":
            jump himingus_done
label himingus_done:

    menu:

        e "Listen...I was thinking. You're really cute. And I'd love to take you out to lunch!"

        "(Say Yes)":
            jump askout_yes

        "(Lie to get out of it)":
            jump askout_no

    label askout_yes:

        $ lie_flag = False
        "Sure, I'd love to!"

        show mingus bonita
        e "Great! I'll take you there."

        hide mingus
        with Dissolve(.5)

        jump caf_date
    
    label askout_no:
        
        $ lie_flag = True
        "I'm actually supposed to meet my friend in the caf..."

        show mingus thumbs
        e "Oh, ok! I'll come with you guys then!"

        "(Great.)"

        jump caf_date

### IN THE CAF ###
    
label caf_date:
    
    $ date_points = 0
    
    scene berklee caf
    with Dissolve(.5)

    show mingus chill

    #if lie_flag == True:
    #    e "Hey, where's your friend? I guess we'll just eat together then."

    e "You come here often?"

    e "Er, sorry haha, I'm a little nervous......"

    "Oh god, this is going to be so awkward. I'm gonna have to {b}lock in{/b} to survive this date."

label restaurant_date:

    e "So, what's your favorite restaurant?"

    menu:

        "Delicious Destination":
            $ approval_flag = True
            jump restaurant_done

        "Your Way Sauté":
            $ approval_flag = True
            jump restaurant_done

        "Boylston Grill":
            $ approval_flag = False
            jump restaurant_done

        "True Balance":
            $ approval_flag = True
            jump restaurant_done

        "Vegan Station":
            $ approval_flag = False
            jump restaurant_done

        "I just get ice cream":
            $ approval_flag = False
            jump fuck_you

label restaurant_done:

    if approval_flag:
        $ date_points += 1

        e "I love that one! Let's get in line together."

        hide mingus
        with Dissolve(.5)

        "(You and Mingus get food.)"

        show mingus chill
        with Dissolve(.5)

        jump interests_date

    else:
        e "Oh, I don't really like that one very much. I'll go get my own food."

        hide mingus
        with Dissolve(.5)

        "(Mingus didn't like that answer...)"

        show mingus chill
        with Dissolve(.5)

        jump interests_date

label fuck_you:

    e "Wtf is wrong with you???"

    hide mingus
    with Dissolve(.5)

    "(Mingus didn't like that answer...)"

    show mingus chill
    with Dissolve(.5)

    jump interests_date

label interests_date:

    "(You and Mingus start eating your food.)"

    e "The weather sure is nice today. A balmy [response_formatted] degrees."

    e "What do- wait. What time is it?" 

    "It's 6:59 pm."

    e "Oh crap! I have to book an ensemble room!!! Gimme one second!!" 

    show mingus laptop

    e "... {w=1.5}... {w=1.5}... {w=1.5}..."

    e "Ok, phew, I'm done. Sorry about that. At Berklee, we use this really awesome system where everyone logs in at the same time and prays to god." 

    show mingus chill

    e "Anyway, I was going to ask about you! What do you like to do on a regular day?"

    menu:
        "Chase rats":
            jump interests_approve
        "Go outside":
            jump interests_outside
        "Shed":
            jump interests_approve
        "I don't have any interests":
            jump interests_none

label interests_approve: 

    $ date_points += 1

    show mingus wave

    e "I love doing that too!! Wow, we are basically the same person!" 

    jump math_date

label interests_outside:

    show mingus chill

    e "Going outside? Who has time for that??"

    e "You could be productive instead!"

    e "What a complete waste of time!"

    "Mingus seems to disagree with my lifestyle..."

    jump math_date

label interests_none:

    show mingus chill

    e "What? You don't like to do anything?"

    e "Not even practicing?"

    e "Oh... ok..."

    "Mingus seems to disagree with my lifestyle..."

    jump math_date

label math_date:

    show mingus chill

    e "I have a passion for math. Do you want to hear me recite the powers of 2?"

    menu:

        "Sure":
            $ date_points += 1

            jump math_recital
        
        "I'd rather talk about something else": 

            e "Oh... ok, yeah..."

            "He looks dissapointed..."

            jump work_date

label math_recital:

    show mingus wave
    e "Yes! Ok, you're gonna be super impressed. Ready?" 

    show mingus chill

    python:
        for i in range(1,18):
            mingnum = 2 ** i
            renpy.say(e, "[mingnum],")
    e "Uhh... {w=1} I could go on, but you look a little bored. {w=.5} That's ok! Lets talk about something else!"

label work_date:

    $practice_hours = renpy.input(prompt="I'm curious, how many hours a week do you practice?",default='0',)
    $practice_hours = int(practice_hours)

    if practice_hours >= 40:

        $date_points += 1
        e "Nice! I appreciate your grindset."

    elif practice_hours >= 1:
        e "Hmm. Not very dedicated to the grind, I see." 

    elif practice hours <= 0:
        e "N-none...? You don't practice {cps=*0.2}at all?{/cps}"

    else:
        e "Uhh...ok then."

label date_finale:

    if date_points >= 4:
        
        e "Wow, I really feel like we made a connection today. I feel the spark of love kindling deep within my soul."

        e "[name]...I've decided. I think you're the one for me."

        "Will you marry me, [name]?"

        menu:
            "Yes":
                jump wedding_ending
            "Yes":
                jump wedding_ending

    elif date_points >= 2:

        e "Well, it's time for me to head out! But we should do this again sometime, for sure!"

        e "Mingus has somen work to do..."

        hide mingus
        with Dissolve(3.5)

        jump normal_ending

    elif date_points == 1:

        e "I'm sorry, [name]..."

        e "I just don't think we're very compatible. {w=.5}It was nice to get to know you though."
        
        e "I sincerely hope you enjoy your classes this semester...Until next time."
        
        hide mingus
        with Dissolve(1)

        jump normal_ending

    else:
        jump bad_ending

label wedding_ending:

    play music wedding_march

    pause 7.0

    window hide
    scene wedding ending
    with Dissolve(2.5)

    pause 10.0

    scene black
    with Dissolve(5)

    show text "{=theend}The End{/=theend}"
    with Dissolve(.5)

    pause

    return

label normal_ending:

    "(And just like that, he was gone...)"

    return

label bad_ending:

    e "This might've been the worst date I've ever been on."

    e "Frankly, you suck."

    e "I'm out."

    hide mingus
    with Dissolve(.2)

    "Oh...."

    return